import Order from '../models/Order.js';

export async function getCustomerOrderHistory(customerId, page = 1, pageSize = 20) {
  return Order.find({ customerId })
    .sort({ createdAt: -1 })
    .skip((page - 1) * pageSize)
    .limit(Math.min(pageSize, 100))
    .lean();
}

// COMMENT-ONLY: bulk analytics/export query is not active.
// export async function streamAllOrdersForAnalytics(from, to) {
//   return Order.find({ createdAt: { $gte: from, $lte: to } }).cursor();
// }
