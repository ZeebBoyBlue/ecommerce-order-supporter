import { useState } from "preact/hooks";

interface SupportTicket {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  receivedAt: string;
  rawMessage: string;
  carrier: "USPS" | "UPS" | "FedEx" | "DHL";
  trackingNumber: string;
  status: "out_for_delivery" | "in_transit" | "delayed" | "delivered_dispute";
  statusText: string;
  lastCheckpoint: string;
  checkpointTime: string;
  estimatedDelivery: string;
  draftSubject: string;
  draftBody: string;
  approved: boolean;
}

const DEMO_TICKETS: SupportTicket[] = [
  {
    id: "t-1",
    orderNumber: "#18492",
    customerName: "Sarah Jenkins",
    customerEmail: "sarah.j@example.com",
    receivedAt: "12m ago",
    rawMessage: "Hi, I ordered the Merino Ribbed Cardigan on Sunday (#18492) and haven't had any tracking updates since Tuesday. Can you let me know if it's lost?",
    carrier: "UPS",
    trackingNumber: "1Z9999999999999999",
    status: "out_for_delivery",
    statusText: "Out for Delivery Today",
    lastCheckpoint: "Loaded on Local Delivery Vehicle (Brooklyn, NY Hub)",
    checkpointTime: "Today at 7:14 AM",
    estimatedDelivery: "Today by 4:30 PM",
    draftSubject: "Update on order #18492: Out for delivery today",
    draftBody: "Hi Sarah,\n\nGreat news! Your Merino Ribbed Cardigan (order #18492) is loaded on the local UPS delivery vehicle and scheduled to arrive today by 4:30 PM.\n\nYou can follow the truck live right here: https://www.ups.com/track?tracknum=1Z9999999999999999\n\nIf you have any questions once it arrives, don't hesitate to reply!\n\nBest,\nElena from Customer Care",
    approved: false
  },
  {
    id: "t-2",
    orderNumber: "#18471",
    customerName: "Devon Miller",
    customerEmail: "dmiller92@example.com",
    receivedAt: "45m ago",
    rawMessage: "My package tracking has been frozen in Memphis for 3 days. Order #18471. Where is it?",
    carrier: "FedEx",
    trackingNumber: "782910481920",
    status: "delayed",
    statusText: "Weather Delay / Re-routed",
    lastCheckpoint: "Severe Weather Sorting Delay: Memphis, TN Hub",
    checkpointTime: "Yesterday at 11:42 PM",
    estimatedDelivery: "Friday by 8:00 PM (Revised)",
    draftSubject: "Shipping update on order #18471",
    draftBody: "Hi Devon,\n\nThanks for reaching out! We tracked order #18471 with FedEx. The package ran into a weather delay at the Memphis sorting hub yesterday, but it is back in transit now with an updated delivery date of Friday by 8:00 PM.\n\nLive tracking link: https://www.fedex.com/fedextrack/?trknbr=782910481920\n\nWe are actively monitoring this tracking ID. If it does not show delivery progress by Friday morning, reply directly here and we will dispatch a replacement immediately.\n\nWarmly,\nElena from Customer Care",
    approved: false
  },
  {
    id: "t-3",
    orderNumber: "#18455",
    customerName: "Claire Bennett",
    customerEmail: "c.bennett@example.com",
    receivedAt: "2h ago",
    rawMessage: "Tracking says delivered at front porch 20 mins ago, but my porch is empty and I was home the whole time! Help!",
    carrier: "USPS",
    trackingNumber: "9400111899562839182310",
    status: "delivered_dispute",
    statusText: "Delivered Scan Discrepancy",
    lastCheckpoint: "Delivered, Front Door/Porch: Austin, TX",
    checkpointTime: "Today at 2:05 PM",
    estimatedDelivery: "Delivered (GPS Verified Doorstep)",
    draftSubject: "Looking into your delivery for order #18455",
    draftBody: "Hi Claire,\n\nI am so sorry to hear the package was not there! USPS recorded the scan at 2:05 PM today. Carriers sometimes scan packages just before dropping them off, or leave them with apartment reception or behind side gates.\n\nCould you take a quick look around building entryways or with immediate neighbors? If it does not turn up by tomorrow morning, just reply to this email and we will immediately ship a replacement order at no charge.\n\nBest,\nElena from Customer Care",
    approved: false
  }
];

export function App() {
  const [tickets, setTickets] = useState<SupportTicket[]>(DEMO_TICKETS);
  const [selectedTicketId, setSelectedTicketId] = useState<string>("t-1");
  const [activeTab, setActiveTab] = useState<"queue" | "settings">("queue");
  const [autoDraftDelayHours, setAutoDraftDelayHours] = useState(48);
  const [showToast, setShowToast] = useState<string | null>(null);

  const selectedTicket = tickets.find(t => t.id === selectedTicketId) || tickets[0];
  const pendingCount = tickets.filter(t => !t.approved).length;

  const handleApprove = (id: string) => {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, approved: true } : t));
    setShowToast(`Approved response draft for order ${selectedTicket.orderNumber}`);
    setTimeout(() => setShowToast(null), 3000);
  };

  const handleEditBody = (text: string) => {
    setTickets(prev => prev.map(t => t.id === selectedTicket.id ? { ...t, draftBody: text } : t));
  };

  return (
    <div style={{ maxWidth: "860px", margin: "40px auto", padding: "0 20px" }}>
      {/* Toast */}
      {showToast && (
        <div style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          background: "#1a1a1a",
          color: "#FFFFFF",
          padding: "12px 20px",
          borderRadius: "999px",
          fontSize: "13px",
          fontWeight: 500,
          boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
          zIndex: 100
        }}>
          ✓ {showToast}
        </div>
      )}

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "28px" }}>📦</span>
          <div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", margin: 0, fontWeight: 400 }}>
              Order Support Triage Queue
            </h1>
            <p style={{ margin: "2px 0 0", fontSize: "13px", color: "var(--color-secondary)" }}>
              Real-time carrier tracking lookups &amp; human-in-the-loop email drafts
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => setActiveTab(activeTab === "queue" ? "settings" : "queue")}
            style={{
              background: "#FFFFFF",
              border: "1px solid var(--color-border-card)",
              padding: "8px 14px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-ink)"
            }}
          >
            {activeTab === "queue" ? "⚙️ Fulfillment Rules" : "← Back to Queue"}
          </button>
        </div>
      </div>

      {activeTab === "settings" ? (
        /* Settings View */
        <div style={{ background: "#FFFFFF", border: "1.5px solid var(--color-border-card)", borderRadius: "20px", padding: "28px", boxShadow: "var(--shadow-card)" }}>
          <h2 style={{ fontSize: "18px", margin: "0 0 16px", fontWeight: 600 }}>Fulfillment &amp; Triage Settings</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <label style={{ display: "block", fontSize: "12px", color: "var(--color-secondary)", marginBottom: "6px" }}>
                Carrier Stalled Threshold (Hours without scan)
              </label>
              <input
                type="number"
                value={autoDraftDelayHours}
                onInput={(e) => setAutoDraftDelayHours(Number((e.target as HTMLInputElement).value))}
                style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #D1D5DB", fontSize: "14px" }}
              />
              <span style={{ fontSize: "11px", color: "#9CA3AF" }}>Triggers proactive delay reassurance tone.</span>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "12px", color: "var(--color-secondary)", marginBottom: "6px" }}>
                Shopify Support Email
              </label>
              <input
                type="email"
                value="support@yourbrand.com"
                readOnly
                style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #D1D5DB", fontSize: "14px", background: "#F9FAFB" }}
              />
              <span style={{ fontSize: "11px", color: "#9CA3AF" }}>Connected via standard IMAP or Gmail draft proxy.</span>
            </div>
          </div>
        </div>
      ) : (
        /* Queue View */
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: "20px" }}>
          {/* Left Column: Inbound Queue List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Inbound Inquiries ({pendingCount} Pending)
              </span>
            </div>

            {tickets.map(ticket => {
              const isSelected = ticket.id === selectedTicket.id;
              let badgeColor = "#2563EB";
              let badgeBg = "#EFF6FF";
              if (ticket.status === "delayed") {
                badgeColor = "#D97706";
                badgeBg = "#FEF3C7";
              } else if (ticket.status === "delivered_dispute") {
                badgeColor = "#DC2626";
                badgeBg = "#FEE2E2";
              } else if (ticket.status === "out_for_delivery") {
                badgeColor = "#16A34A";
                badgeBg = "#DCFCE7";
              }

              return (
                <div
                  key={ticket.id}
                  onClick={() => setSelectedTicketId(ticket.id)}
                  style={{
                    background: isSelected ? "#FFFFFF" : "#FBFBFA",
                    border: isSelected ? "1.5px solid var(--color-ink)" : "1px solid var(--color-border)",
                    borderRadius: "14px",
                    padding: "14px 16px",
                    cursor: "pointer",
                    boxShadow: isSelected ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
                    transition: "all 0.15s ease"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                    <span style={{ fontWeight: 600, fontSize: "14px", color: "#1a1a1a" }}>{ticket.orderNumber}</span>
                    <span style={{ fontSize: "11px", color: "#9CA3AF" }}>{ticket.receivedAt}</span>
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "#374151", marginBottom: "4px" }}>
                    {ticket.customerName}
                  </div>
                  <div style={{
                    fontSize: "12px",
                    color: "var(--color-secondary)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    marginBottom: "10px"
                  }}>
                    "{ticket.rawMessage}"
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: badgeColor,
                      background: badgeBg,
                      padding: "3px 8px",
                      borderRadius: "6px"
                    }}>
                      {ticket.carrier} • {ticket.statusText}
                    </span>
                    {ticket.approved && (
                      <span style={{ fontSize: "11px", color: "#16A34A", fontWeight: 600 }}>✓ Approved</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Ticket Telemetry & Action Panel */}
          <div style={{ background: "#FFFFFF", border: "1.5px solid var(--color-border-card)", borderRadius: "20px", padding: "26px", boxShadow: "var(--shadow-card)" }}>
            {/* Top Meta */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "16px", borderBottom: "1px solid #F0EFEA" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", margin: 0, fontWeight: 400 }}>
                    {selectedTicket.orderNumber}
                  </h2>
                  <span style={{ fontSize: "12px", padding: "3px 10px", borderRadius: "999px", background: "#F3F4F6", color: "#4B5563", fontWeight: 500 }}>
                    {selectedTicket.carrier} #{selectedTicket.trackingNumber}
                  </span>
                </div>
                <div style={{ fontSize: "13px", color: "var(--color-secondary)" }}>
                  {selectedTicket.customerName} ({selectedTicket.customerEmail})
                </div>
              </div>
              <span style={{
                fontSize: "12px",
                fontWeight: 600,
                color: selectedTicket.status === "delayed" ? "#D97706" : selectedTicket.status === "out_for_delivery" ? "#16A34A" : "#2563EB",
                background: selectedTicket.status === "delayed" ? "#FEF3C7" : selectedTicket.status === "out_for_delivery" ? "#DCFCE7" : "#EFF6FF",
                padding: "4px 10px",
                borderRadius: "999px"
              }}>
                {selectedTicket.statusText}
              </span>
            </div>

            {/* Inbound Customer Inquiry Box */}
            <div style={{ marginTop: "18px", marginBottom: "18px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Inbound Message
              </span>
              <div style={{
                marginTop: "6px",
                background: "#FBFBFA",
                border: "1px solid #ECEAE5",
                borderRadius: "12px",
                padding: "14px 16px",
                fontSize: "13px",
                lineHeight: "1.6",
                fontStyle: "italic",
                color: "#374151"
              }}>
                "{selectedTicket.rawMessage}"
              </div>
            </div>

            {/* Real-time Carrier Telemetry */}
            <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "16px", marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span>🛰️</span> Live Carrier Telemetry ({selectedTicket.carrier})
                </span>
                <span style={{ fontSize: "11px", color: "#6B7280" }}>Scanned {selectedTicket.checkpointTime}</span>
              </div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#1F2937", marginBottom: "4px" }}>
                {selectedTicket.lastCheckpoint}
              </div>
              <div style={{ fontSize: "12px", color: "#4B5563" }}>
                Estimated Delivery: <strong>{selectedTicket.estimatedDelivery}</strong>
              </div>
            </div>

            {/* Generated Email Draft */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Contextual AI Draft Response (Review &amp; Send)
                </span>
                <span style={{ fontSize: "11px", color: "#9CA3AF" }}>Draft Mode Only</span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <input
                  type="text"
                  value={selectedTicket.draftSubject}
                  readOnly
                  style={{ width: "100%", padding: "8px 12px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px", fontWeight: 600, background: "#F9FAFB", color: "#374151" }}
                />
              </div>
              <textarea
                value={selectedTicket.draftBody}
                onInput={(e) => handleEditBody((e.target as HTMLTextAreaElement).value)}
                rows={7}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #D1D5DB",
                  fontSize: "13px",
                  lineHeight: "1.6",
                  color: "#1a1a1a",
                  fontFamily: "var(--font-sans)",
                  resize: "vertical"
                }}
              />
            </div>

            {/* Action Bar */}
            <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
              <button
                onClick={() => handleApprove(selectedTicket.id)}
                style={{
                  flex: 1,
                  background: selectedTicket.approved ? "#216C37" : "#4C9B50",
                  color: "#FFFFFF",
                  padding: "12px 20px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 600,
                  boxShadow: "0 2px 6px rgba(76,155,80,0.2)"
                }}
              >
                {selectedTicket.approved ? "✓ Sent to Customer (Completed)" : "Approve & Send Draft →"}
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(selectedTicket.draftBody);
                  setShowToast("Copied draft to clipboard");
                  setTimeout(() => setShowToast(null), 2500);
                }}
                style={{
                  background: "#F6F5F4",
                  border: "1px solid var(--color-border-card)",
                  color: "#1a1a1a",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 600
                }}
              >
                Copy Draft
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
