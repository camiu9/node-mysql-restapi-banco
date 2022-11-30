import { Router } from "express";
import { getDetalles, getDetalle, createDetalle, updateDetalle, deleteDetalle, getDetallesIdCT } from "../controllers/detalle.controller.js";

const router = Router();

router.get('/list', getDetalles);
router.get('/detailCt/:id', getDetallesIdCT);
router.get('/detail/:id', getDetalle);
router.post('/create', createDetalle);
router.put('/update', updateDetalle);
// router.put('/updateValor', updateDetalleValor);
router.delete('/delete/:id', deleteDetalle);

export default router;