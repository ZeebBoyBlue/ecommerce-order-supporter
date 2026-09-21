# Ecommerce WISMO Supporter

> Resolves ecommerce "Where Is My Order?" (WISMO) support inquiries, cross-checks real-time carrier tracking milestones, flags delivery exceptions, and stages customer update drafts without helpdesk seat taxes.

## Overview

The **Ecommerce WISMO Supporter** is an official Vellum plugin built for direct-to-consumer (DTC) e-commerce founders and lean customer operations teams running on Shopify. WISMO inquiries routinely represent 35% to 50% of total customer support volume. Traditional e-commerce helpdesks charge between $60/month and $900/month plus $1.00 per automated AI resolution, turning routine order lookups into an expensive operational toll.

The plugin extracts customer order numbers from incoming support emails, pulls real-time tracking scan events directly from carriers or shipping aggregators (USPS, UPS, FedEx, DHL, ShipStation), classifies the shipment state (delivered, out for delivery, delayed transit, carrier exception), and prepares context-aware, empathetic email drafts for one-click merchant approval.

## Key Capabilities

- **Inbound Ticket Entity Parsing:** Extracts order references, tracking numbers, and customer intent from messy email threads.
- **Multi-Carrier Checkpoint Tracking:** Queries real-time package scan history, transit checkpoints, and updated delivery estimates.
- **Smart Exception Detection:** Identifies stalled shipments (e.g. no movement for 72+ hours), delivery attempted notices, and customs delays before they escalate to chargebacks.
- **Interactive Triage Queue UI:** Preact-powered triage deck allowing operators to review, edit, and approve 20+ WISMO responses in under two minutes.
- **Human-in-the-Loop Safeguards:** Operates in draft mode only. Zero unreviewed email sends, zero unconfirmed refund issuances.

## Included Components

- **Skill:** `ecommerce-order-supporter` (intake workflows, carrier lookup rules, and tone-matching draft templates)
- **Tool:** `resolve_wismo_inquiry` (deterministic lookup, milestone calculation, ETA generation, and draft assembly)
- **UI Surface:** `wismo-triage` (interactive Preact support queue with live carrier telemetry and one-click draft approvals)

## License

MIT © 2026 Nicolas Zeeb
