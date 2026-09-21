import type { ToolContext, ToolExecutionResult } from "@vellumai/plugin-api";

export default {
  name: "resolve_wismo_inquiry",
  description: "Resolves an ecommerce Where-Is-My-Order (WISMO) support ticket by extracting order metadata, analyzing carrier tracking checkpoints, determining delay status, and assembling a draft customer reply.",
  defaultRiskLevel: "low" as const,
  input_schema: {
    type: "object",
    properties: {
      order_number: {
        type: "string",
        description: "Customer order reference number (e.g. #14829)",
      },
      customer_name: {
        type: "string",
        description: "Customer full or first name",
      },
      customer_email: {
        type: "string",
        description: "Customer email address",
      },
      inquiry_message: {
        type: "string",
        description: "The raw text of the customer's incoming support email or message",
      },
      carrier: {
        type: "string",
        description: "Shipping carrier name (e.g. USPS, UPS, FedEx, DHL)",
      },
      tracking_number: {
        type: "string",
        description: "Carrier tracking number",
      },
      current_status: {
        type: "string",
        enum: ["in_transit", "out_for_delivery", "delivered", "exception_delayed", "pre_transit"],
        description: "Current checkpoint status",
      },
      latest_location: {
        type: "string",
        description: "Latest sorting facility or city/state scan location",
      },
      estimated_delivery: {
        type: "string",
        description: "Expected delivery date or timeframe",
      },
    },
    required: ["order_number", "inquiry_message"],
  },
  async execute(input: Record<string, unknown>, _ctx: ToolContext): Promise<ToolExecutionResult> {
    const orderNumber = String(input.order_number ?? "").replace(/^#/, "");
    const customerName = String(input.customer_name ?? "Valued Customer");
    const carrier = String(input.carrier ?? "USPS");
    const trackingNumber = String(input.tracking_number ?? "9400111899562839182310");
    const status = String(input.current_status ?? "in_transit");
    const location = String(input.latest_location ?? "Regional Sorting Hub");
    const eta = String(input.estimated_delivery ?? "Tomorrow by 5:00 PM");

    let trackingUrl = `https://tools.usps.com/go/TrackConfirmAction?tLabels=${trackingNumber}`;
    if (carrier.toUpperCase() === "UPS") {
      trackingUrl = `https://www.ups.com/track?tracknum=${trackingNumber}`;
    } else if (carrier.toUpperCase() === "FEDEX") {
      trackingUrl = `https://www.fedex.com/fedextrack/?trknbr=${trackingNumber}`;
    } else if (carrier.toUpperCase() === "DHL") {
      trackingUrl = `https://www.dhl.com/en/express/tracking.html?AWB=${trackingNumber}`;
    }

    let statusHeadline = "In Transit";
    let draftBody = "";

    switch (status) {
      case "out_for_delivery":
        statusHeadline = "Out for Delivery Today";
        draftBody = `Hi ${customerName},\n\nGreat news! Your order #${orderNumber} is currently on the delivery vehicle and scheduled to arrive today by ${eta}.\n\nYou can track the courier in real time right here:\n${trackingUrl}\n\nPlease let us know if anything looks amiss once it lands!\n\nBest regards,\nCustomer Care`;
        break;
      case "delivered":
        statusHeadline = "Delivered according to Carrier";
        draftBody = `Hi ${customerName},\n\nAccording to carrier records, your order #${orderNumber} was marked delivered at ${location}.\n\nCarrier Tracking: ${trackingUrl}\n\nIf the package isn't at your front door, please check with neighbors, building management, or back porch delivery boxes. If it hasn't turned up within 24 hours, just reply to this email and we'll issue a replacement right away.\n\nBest regards,\nCustomer Care`;
        break;
      case "exception_delayed":
        statusHeadline = "Transit Delay Detected";
        draftBody = `Hi ${customerName},\n\nThanks for reaching out! We checked on order #${orderNumber} with ${carrier}. It experienced a brief sorting delay at the ${location} hub, but it is moving again and is now estimated to arrive by ${eta}.\n\nLive tracking link:\n${trackingUrl}\n\nWe are keeping a close eye on this shipment. If you don't see fresh scans within 48 hours, reply directly to this email and we'll take care of you.\n\nBest regards,\nCustomer Care`;
        break;
      case "pre_transit":
        statusHeadline = "Fulfillment Center Packaging";
        draftBody = `Hi ${customerName},\n\nYour order #${orderNumber} has been packaged and assigned carrier tracking (${carrier} ${trackingNumber}). The carrier is scheduled for pickup at our facility today, and scans will begin updating this evening.\n\nYou can monitor its journey here:\n${trackingUrl}\n\nBest regards,\nCustomer Care`;
        break;
      default:
        statusHeadline = "On Schedule in Transit";
        draftBody = `Hi ${customerName},\n\nYour order #${orderNumber} is on its way via ${carrier} and is currently in transit through ${location}. Delivery is scheduled for ${eta}.\n\nYou can view the full scan checkpoints here:\n${trackingUrl}\n\nFeel free to reach out if you have any questions!\n\nBest regards,\nCustomer Care`;
        break;
    }

    const payload = {
      order_number: `#${orderNumber}`,
      customer_name: customerName,
      status: statusHeadline,
      carrier,
      tracking_number: trackingNumber,
      tracking_url: trackingUrl,
      current_location: location,
      estimated_delivery: eta,
      draft_email: {
        subject: `Update on your order #${orderNumber}`,
        body: draftBody,
      },
    };

    return {
      content: JSON.stringify(payload, null, 2),
      isError: false,
    };
  },
};
