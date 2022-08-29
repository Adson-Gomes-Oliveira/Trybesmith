import express from 'express';
import userRoutes from './routes/user.routes';
import productRoutes from './routes/product.routes';
import orderRoutes from './routes/order.routes';
// import authorization from './middlewares/auth.middleware';
import error from './middlewares/error.middleware';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
// app.use(authorization);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use(error);

export default app;
