import { pool } from "../db.js";

export const getCabeceras = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `cab_transaccion`');
    res.json(result);
}

export const getCabecera = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `cab_transaccion` WHERE `id_ct`=?', [req.params.id]);
    res.json(result);
}

export const createCabecera = async (req, res) => {
    const { fecha, num_cb, descri_ct } = req.body;
    const [rows] = await pool.query('INSERT INTO `cab_transaccion`(`fecha`, `num_cb`, `descri_ct`) VALUES (?, ?, ?)', [fecha, num_cb, descri_ct]);
    // res.send('Cabecera agregada correctamente');
    res.send({ 
        id: rows.insertId,
        fecha,
        num_cb,
        descri_ct
     });
}

export const updateCabecera = async (req, res) => {
    const { id_ct, fecha, num_cb, descri_ct } = req.body;
    const [rows] = await pool.query('UPDATE `cab_transaccion` SET `fecha`=?,`num_cb`=?,`descri_ct`=? WHERE `id_ct`=?', [fecha, num_cb, descri_ct, id_ct]);
    // res.send('Cabecera agregada correctamente');
    res.send({ 
        id_ct,
        fecha,
        num_cb,
        descri_ct
     });
}

export const deleteCabecera = async (req, res) => {
    const [result] = await pool.query('DELETE FROM `cab_transaccion` WHERE `id_ct`=?', [req.params.id]);
    res.json(result);
}

