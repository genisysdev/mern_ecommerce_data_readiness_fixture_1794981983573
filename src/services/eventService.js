import Event from '../models/Event.js';

export async function recordProductView({ userId, productId, source = 'web' }) {
  return Event.create({
    eventType: 'product_view',
    userId,
    productId,
    source,
    occurredAt: new Date()
  });
}

export async function recordPurchase({ userId, orderId, source = 'backend' }) {
  return Event.create({
    eventType: 'purchase',
    userId,
    source,
    occurredAt: new Date(),
    metadata: { orderId: String(orderId) }
  });
}

// COMMENT-ONLY: these event types are not captured by the active implementation.
// export async function recordClick(payload) {
//   return Event.create({ eventType: 'click', ...payload });
// }
// export async function recordSearch(payload) {
//   return Event.create({ eventType: 'search', ...payload });
// }
