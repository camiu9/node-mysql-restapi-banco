import { pool } from "../db.js";

export const getClientes = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `cliente`');
    res.json(result);
}

export const getCliente = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM `cliente` WHERE `id_cli`=?', [req.params.id]);
    res.json(result);
}

export const createCliente = async (req, res) => {
    const { id_cli, nombre_cli } = req.body;
    const [rows] = await pool.query('INSERT INTO `cliente`(`id_cli`, `nombre_cli`) VALUES (?, ?)', [id_cli, nombre_cli]);
    // res.send('Cliente agregada correctamente');
    res.send({ 
        id_cli,
        nombre_cli
     });
}

// export const updateCliente = async (req, res) => {
//     const { id, nombre, signo } = req.body;
//     const [rows] = await pool.query('UPDATE `cliente` SET `nombre_tt`=?,`signo_tt`=? WHERE `id_tt`=?', [nombre, signo, id]);
//     // res.send('Cliente agregada correctamente');
//     res.send({ 
//         id,
//         nombre,
//         signo
//      });
// }

// export const deleteCliente = async (req, res) => {
//     const { id } = req.body;
//     const [rows] = await pool.query('DELETE FROM `cliente` WHERE `id_tt`=?', [id]);
//     // res.send('Cliente agregada correctamente');
//     res.send({ 
//         id
//      });
// }

