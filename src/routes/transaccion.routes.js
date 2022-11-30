import { Router } from "express";
import { getTransacciones, getTransaccion, createTransaccion, updateTransaccion, deleteTransaccion } from "../controllers/transaccion.controller.js";

const router = Router();

router.get('/list', getTransacciones);
router.get('/detail/:id', getTransaccion);
router.post('/create', createTransaccion);
router.put('/update', updateTransaccion);
router.delete('/delete/:id', deleteTransaccion);

export default router;