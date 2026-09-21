---
name: "ecommerce-order-supporter"
description: "Resolves ecommerce Where-Is-My-Order (WISMO) support inquiries, cross-checks real-time carrier tracking milestones, flags transit delays, renders an interactive support triage queue in chat, and stages customer update drafts."
metadata:
  emoji: "📦"
  vellum:
    display-name: "Ecommerce WISMO Supporter"
    activation-hints:
      - "where is order 18492"
      - "resolve wismo support tickets"
      - "track customer package status"
      - "draft response for late delivery customer"
      - "handle shipping status inquiries"
      - "check carrier scans for delayed shipment"
    avoid-when:
      - "restaurant vendor delivery invoices"
      - "contractor trade labor billing"
    category: operations
---

# Ecommerce WISMO Supporter

Resolves "Where Is My Order?" (WISMO) tickets for Shopify and e-commerce store operators without recurring helpdesk seat taxes or per-resolution surcharges.

## Trigger & Input
The operator receives customer support emails, contact form submissions, or ticket exports asking about delivery status:
- E.g.: *"Hi, I ordered the Merino Wool Hoodie on Friday (order #14829) and haven't received any updates since Monday. Is it stuck or did it get lost? When will it arrive?"*

## Execution Workflow

### 1. Inbound Inquiry Parsing & Order Lookup
Extract key fulfillment identifiers from the customer's message:
- **Customer Email & Name:** Match against store customer database or order history.
- **Order Number:** Identify order tags (e.g. `#14829`, `ORD-98210`).
- **Inquiry Classification:** Classify into one of 4 fulfillment states:
  - *Standard Transit:* On schedule within carrier SLA window.
  - *Out for Delivery:* Scheduled for delivery today.
  - *Carrier Delay / Stalled:* Package has not scanned at a sorting facility for 48+ hours.
  - *Delivery Discrepancy:* Carrier marked package delivered, but customer states doorstep is empty.

### 2. Multi-Carrier Scan Telemetry
- Pull real-time checkpoint data (USPS, UPS, FedEx, DHL, ShipStation).
- Determine current geographical location, timestamp of latest physical scan, and revised carrier delivery estimate.
- Detect delivery exceptions: weather hold, incorrect address, attempted delivery, or missing apartment unit.

### 3. Response Generation (Tone-Matched)
- Generate a clear, empathetic customer update that answers the core question in the first two sentences.
- Include direct carrier tracking link, exact current checkpoint location, and realistic delivery ETA.
- Provide reassurance and clear escalation steps if the package does not arrive by the estimated date.

### 4. Surface the Interactive Triage Queue
Render an interactive Preact support triage queue in chat (`wismo-triage` component) displaying:
- Customer inquiry preview and sentiment.
- Live carrier timeline and current checkpoint badge.
- Pre-filled response draft with one-click send or copy buttons.
- Quick exception escalation actions (e.g., Mark for Carrier Claim, Flag Replacement Order).

### 5. Human-in-the-Loop Safety Gate
- **Draft Only:** Never transmits emails directly without operator confirmation.
- **No Unauthorized Financial Actions:** Does not trigger refunds or cancel orders automatically. All replacement or refund suggestions require operator approval.
