import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 120 },
  description: { type: String, trim: true, maxlength: 2000 },
  price: { type: Number, required: true, min: 0 },
  currency: { type: String, enum: ['INR', 'USD'], default: 'INR' },
  category: { type: String, required: true, index: true },
  stock: { type: Number, min: 0, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

// COMMENT-ONLY EXAMPLE: do not treat this as an active field.
// productSchema.add({ embedding: { type: [Number], default: [] } });

export default mongoose.model('Product', productSchema);
