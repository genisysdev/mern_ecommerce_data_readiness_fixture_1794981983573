import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  unitPrice: { type: Number, required: true, min: 0 }
}, { _id: false });

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true },
  items: { type: [orderItemSchema], required: true, validate: v => v.length > 0 },
  totalAmount: { type: Number, required: true, min: 0 },
  orderStatus: { type: String, enum: ['placed', 'paid', 'shipped', 'delivered', 'cancelled'], default: 'placed' },
  paymentStatus: { type: String, enum: ['pending', 'paid', 'failed', 'refunded'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

// COMMENT-ONLY EXAMPLE: this proposed provenance field is not part of the schema.
// orderSchema.add({ sourceSystem: { type: String }, importedAt: { type: Date } });

export default mongoose.model('Order', orderSchema);
