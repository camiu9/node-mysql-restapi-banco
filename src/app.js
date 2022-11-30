import express from 'express';
import transaccionesRoutes from './routes/transaccion.routes.js';
import cuentaRoutes from './routes/cuenta.routes.js';
import clienteRoutes from './routes/cliente.routes.js';
import cabeceraRoutes from './routes/cabecera.routes.js';
import detalleRoutes from './routes/detalle.routes.js';
import cors from 'cors';
// var cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());

app.use('/transaccion', transaccionesRoutes);
app.use('/cuenta', cuentaRoutes);
app.use('/cliente', clienteRoutes);
app.use('/cabecera', cabeceraRoutes);
app.use('/detalle', detalleRoutes);

export default app;