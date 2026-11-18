import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventType: { type: String, enum: ['product_view', 'purchase'], required: true, index: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: false, index: true },
  productId: { type: mongoose.Schema.Types.ObjectId, required: false, index: true },
  source: { type: String, required: true }, // provenance: web, mobile, or backend
  occurredAt: { type: Date, required: true, default: Date.now, index: true },
  metadata: { type: mongoose.Schema.Types.Mixed, default: {} }
}, { timestamps: true });

eventSchema.index({ occurredAt: 1 }, { expireAfterSeconds: 7776000 });

export default mongoose.model('Event', eventSchema);
