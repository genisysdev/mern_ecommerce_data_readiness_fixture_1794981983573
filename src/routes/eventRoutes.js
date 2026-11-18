import { Router } from 'express';
import { recordProductView } from '../services/eventService.js';

const router = Router();
router.post('/product-view', async (req, res, next) => {
  try {
    const event = await recordProductView(req.body);
    res.status(201).json({ data: event });
  } catch (error) { next(error); }
});
export default router;
