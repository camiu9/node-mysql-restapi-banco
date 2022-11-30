import { pool } from "../db.js";

export const getDetalles = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `det_transaccion`');
    res.send(result);
}

export const getDetalle = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `det_transaccion` WHERE `id_dt`=?', [req.params.id]);
    res.send(result);
}

export const getDetallesIdCT = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `det_transaccion` WHERE `id_ct`=?', [req.params.id]);
    res.send(result);
}

export const createDetalle = async (req, res) => {
    const { fecha, id_tt, id_ct, valor_dt } = req.body;
    const [rows] = await pool.query('INSERT INTO `det_transaccion`(`fecha`, `id_tt`, `id_ct`, `valor_dt`) VALUES (?, ?, ?, ?)', [fecha, id_tt, id_ct, valor_dt]);
    // res.send('Detalle agregada correctamente');
    res.send({ 
        id: rows.insertId,
        fecha,
        id_tt,
        id_ct,
        valor_dt
     });
}

export const updateDetalle = async (req, res) => {
    const { id_dt, fecha, id_tt, id_ct, valor_dt } = req.body;
    const [rows] = await pool.query('UPDATE `det_transaccion` SET `id_ct`=?,`fecha`=?,`id_tt`=?,`valor_dt`=? WHERE `id_dt`=?', [id_ct, fecha, id_tt, valor_dt, id_dt]);
    // res.send('Detalle agregada correctamente');
    res.send({ 
        id_dt,
        fecha,
        id_tt,
        id_ct, 
        valor_dt
     });
}

// export const updateDetalleValor = async (req, res) => {
//     const { id_dt, valor_dt } = req.body;
//     const [rows] = await pool.query('UPDATE `det_transaccion` SET `valor_dt`=? WHERE `id_dt`=?', [valor_dt, id_dt]);
//     // res.send('Detalle agregada correctamente');
//     res.send({ 
//         id_dt,
//         valor_dt
//      });
// }

export const deleteDetalle = async (req, res) => {
    const [result] = await pool.query('DELETE FROM `det_transaccion` WHERE `id_dt`=?', [req.params.id]);
    res.send(result);
}

