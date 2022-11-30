import { pool } from "../db.js";

export const getReportees = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `tipo_Reporte`');
    // res.json(result);
    res.send(result);
}

export const getReporte = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `tipo_Reporte` WHERE `id_tt`=?', [req.params.id]);
    res.send(result);
}

export const createReporte = async (req, res) => {
    const { nombre_tt, signo_tt } = req.body;
    const [rows] = await pool.query('INSERT INTO `tipo_Reporte`(`nombre_tt`, `signo_tt`) VALUES (?, ?)', [nombre_tt, signo_tt]);
    res.send({ 
        id: rows.insertId,
        nombre_tt,
        signo_tt
     });
}

export const updateReporte = async (req, res) => {
    const { id_tt, nombre_tt, signo_tt } = req.body;
    const [rows] = await pool.query('UPDATE `tipo_Reporte` SET `nombre_tt`=?,`signo_tt`=? WHERE `id_tt`=?', [nombre_tt, signo_tt, id_tt]);
    // res.send('Reporte agregada correctamente');
    res.send({ 
        id_tt,
        nombre_tt,
        signo_tt
     });
}

export const deleteReporte = async (req, res) => {
    const [result] = await pool.query('DELETE FROM `tipo_Reporte` WHERE `id_tt`=?', [req.params.id]);
    res.send(result);
}

