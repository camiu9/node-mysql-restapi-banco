import { pool } from "../db.js";

export const getCuentas = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `cuenta_bancaria`');
    res.json(result);
}

export const getCuenta = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `cuenta_bancaria` WHERE `num_cb`=?', [req.params.id]);
    res.json(result);
}

export const createCuenta = async (req, res) => {
    const { num_cb, id_cli, descri_cb } = req.body;
    const [rows] = await pool.query('INSERT INTO `cuenta_bancaria`(`num_cb`, `id_cli`, `descri_cb`) VALUES (?, ?, ?)', [num_cb, id_cli, descri_cb]);
    // res.send('Cuenta agregada correctamente');
    res.send({ 
        num_cb,
        id_cli,
        descri_cb
     });
}

export const updateCuenta = async (req, res) => {
    const { num_cb, id_cli, descri_cb } = req.body;
    const [rows] = await pool.query('UPDATE `cuenta_bancaria` SET `id_cli`=?,`descri_cb`=? WHERE `num_cb`=?', [id_cli, descri_cb, num_cb]);
    // res.send('Cuenta agregada correctamente');
    res.send({ 
        num_cb,
        id_cli,
        descri_cb
     });
}

export const deleteCuenta = async (req, res) => {
    const [result] = await pool.query('DELETE FROM `cuenta_bancaria` WHERE `num_cb`=?', [req.params.id]);
    res.send(result);
}

