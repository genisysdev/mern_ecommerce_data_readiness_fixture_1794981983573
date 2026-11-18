import { z } from 'zod';

export const createOrderSchema = z.object({
  orderNumber: z.string().min(4).max(40),
  customerId: z.string().regex(/^[a-f\d]{24}$/i),
  items: z.array(z.object({
    productId: z.string().regex(/^[a-f\d]{24}$/i),
    quantity: z.number().int().positive(),
    unitPrice: z.number().nonnegative()
  })).min(1),
  totalAmount: z.number().nonnegative()
});

// COMMENT-ONLY: product import cleanup is proposed but not executed.
// export function normaliseProductImport(row) {
//   return { ...row, name: row.name.trim(), price: Number(row.price) };
// }
