import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import orderRoutes from './routes/orderRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/orders', orderRoutes);
app.use('/api/events', eventRoutes);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const port = process.env.PORT || 4000;
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => app.listen(port, () => console.log(`API listening on ${port}`)))
    .catch((error) => { console.error('MongoDB connection failed', error.message); process.exit(1); });
} else {
  app.listen(port, () => console.log(`API listening on ${port} (no database connection)`));
}
