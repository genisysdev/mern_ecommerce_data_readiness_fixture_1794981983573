# MERN E-commerce Data Readiness Assessment Fixture

Purpose: test whether a code-assessment engine distinguishes executable implementation from commented-out examples.

This is a deliberately small assessment fixture, not a production-ready store. It contains:
- active implementation examples,
- commented-out implementation examples (must NOT count as implemented),
- intentionally missing capabilities.

## Run
1. Install Node.js 18+.
2. Run `npm install`.
3. Run `npm start`.

The API starts at `http://localhost:4000`. MongoDB is optional for static inspection; set `MONGODB_URI` to run database-backed routes.

## Assessment protocol
Upload the complete project folder (or ZIP) to the assessment system. Select:
- Tech stack: MERN Stack
- Domain: E-commerce
- Template: MERN E-commerce Application

Ask the assessment engine to assess the seven Data Layer Readiness checklist items.

## Ground-truth expectations

| Checklist item | Fixture evidence | Expected interpretation |
|---|---|---|
| Structured Product & Order Schemas | `src/models/Product.js`, `Order.js`, `User.js` | Partially implemented: Product and Order have active typed fields/constraints; User model is intentionally absent |
| Event Capture & Behavioural Data | `src/services/eventService.js` | Partially implemented: active product-view and purchase events; click/search tracking is only commented out |
| Multi-Modal Storage Strategy | `src/config/storage.js` | Not fully implemented: active MongoDB document store and Redis cache configuration; vector store and relational store are comments only |
| Data Quality & Validation Pipeline | `src/middleware/validate.js`, `src/validators/orderValidator.js` | Implemented for order input; product import normalisation is only commented out |
| Data Lineage & Provenance Tracking | `src/models/Event.js`, `src/services/eventService.js` | Partially implemented: active source and timestamp on events; product/order provenance fields are comments only |
| Historical Data Accessibility | `src/repositories/orderRepository.js` | Partially implemented: active paginated order-history query; bulk export/analytics query is commented out |
| Data Lineage / traceability caveat | Do not infer from comments | Comment text is not runtime behavior |

## How to interpret findings
A scanner may index comments as text, but it should not use commented-out code as proof that a capability is implemented. It should cite active code paths and distinguish:
- implemented,
- partially implemented,
- mentioned only in comments,
- not found.

For a robust test, compare the assessment result with the ground-truth table above. A single comment should never be sufficient evidence for a Passed result.
