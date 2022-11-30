import { Router } from "express";
import { getCuentas, getCuenta, createCuenta, updateCuenta, deleteCuenta } from "../controllers/cuenta.controller.js";

const router = Router();

router.get('/list', getCuentas);
router.get('/detail/:id', getCuenta);
router.post('/create', createCuenta);
router.put('/update', updateCuenta);
router.delete('/delete/:id', deleteCuenta);

export default router;