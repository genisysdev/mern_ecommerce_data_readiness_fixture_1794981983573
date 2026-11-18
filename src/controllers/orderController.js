import Order from '../models/Order.js';
import { getCustomerOrderHistory } from '../repositories/orderRepository.js';

export async function createOrder(req, res, next) {
  try {
    const order = await Order.create(req.validatedBody);
    res.status(201).json({ data: order });
  } catch (error) { next(error); }
}

export async function listOrderHistory(req, res, next) {
  try {
    const data = await getCustomerOrderHistory(req.params.customerId);
    res.json({ data, pageSize: data.length });
  } catch (error) { next(error); }
}
