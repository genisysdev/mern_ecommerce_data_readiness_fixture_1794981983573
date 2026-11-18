import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { createOrderSchema } from '../validators/orderValidator.js';
import { createOrder, listOrderHistory } from '../controllers/orderController.js';

const router = Router();
router.post('/', validate(createOrderSchema), createOrder);
router.get('/customer/:customerId', listOrderHistory);
export default router;
