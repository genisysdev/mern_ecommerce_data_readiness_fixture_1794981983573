# Manual validation checklist

For each checklist item, record:
- Does the evidence occur in executable code?
- Is it only mentioned in a comment, README, TODO, or disabled block?
- Is the code reachable from a route/service/controller?
- Is the implementation complete or only partial?

## Expected ground truth
1. Structured Product & Order Schemas: Partial. Product and Order schemas are active and constrained; there is no active User schema.
2. Event Capture & Behavioural Data: Partial. Product views and purchases are active; click and search tracking exist only as comments.
3. Multi-Modal Storage Strategy: Partial. MongoDB and Redis are configured; relational and vector stores are comments only.
4. Data Quality & Validation Pipeline: Partial. Order request validation is active; product import normalisation is a comment only.
5. Data Lineage & Provenance Tracking: Partial. Event source and occurredAt are active; order provenance fields are comments only.
6. Historical Data Accessibility: Partial. Customer history is paginated and active; bulk analytics cursor is a comment only.
7. Historical Data Accessibility must not be marked fully passed based only on the commented bulk query.

A correct assessment should explicitly identify comment-only evidence and should not count it as an implemented capability.
