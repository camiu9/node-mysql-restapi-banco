import { Router } from "express";
import { getCabeceras, getCabecera, createCabecera, updateCabecera, deleteCabecera } from "../controllers/cabecera.controller.js";

const router = Router();

router.get('/list', getCabeceras);
router.get('/detail/:id', getCabecera);
router.post('/create', createCabecera);
router.put('/update', updateCabecera);
router.delete('/delete/:id', deleteCabecera);

export default router;