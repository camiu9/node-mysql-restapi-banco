import { pool } from "../db.js";

export const getTransacciones = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `tipo_transaccion`');
    // res.json(result);
    res.send(result);
}

export const getTransaccion = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `tipo_transaccion` WHERE `id_tt`=?', [req.params.id]);
    res.send(result);
}

export const createTransaccion = async (req, res) => {
    const { nombre_tt, signo_tt } = req.body;
    const [rows] = await pool.query('INSERT INTO `tipo_transaccion`(`nombre_tt`, `signo_tt`) VALUES (?, ?)', [nombre_tt, signo_tt]);
    res.send({ 
        id: rows.insertId,
        nombre_tt,
        signo_tt
     });
}

export const updateTransaccion = async (req, res) => {
    const { id_tt, nombre_tt, signo_tt } = req.body;
    const [rows] = await pool.query('UPDATE `tipo_transaccion` SET `nombre_tt`=?,`signo_tt`=? WHERE `id_tt`=?', [nombre_tt, signo_tt, id_tt]);
    // res.send('Transaccion agregada correctamente');
    res.send({ 
        id_tt,
        nombre_tt,
        signo_tt
     });
}

export const deleteTransaccion = async (req, res) => {
    const [result] = await pool.query('DELETE FROM `tipo_transaccion` WHERE `id_tt`=?', [req.params.id]);
    res.send(result);
}

