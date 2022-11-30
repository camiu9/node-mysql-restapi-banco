import { Router } from "express";
import { getClientes, getCliente, createCliente } from "../controllers/cliente.controller.js";

const router = Router();

router.get('/list', getClientes);
router.get('/detail/:id', getCliente);
router.post('/create', createCliente);
export default router;