const pool = require("../../conexion");

const getCattle = async (req, res) => {
  try {
    const response = await pool.query(`select * from cattle`);
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getCattleId = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query(
      `select * from cattle where id = ${id}`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getCattleOwner = async (req, res) => {
  try {
    const { owner } = req.params;
    const response = await pool.query(
      `select * from cattle where owner = '${owner}'  order by owner`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getCattleLocation = async (req, res) => {
  try {
    const { long, lat } = req.params;
    const response = await pool.query(
      `select * from cattle 
      where latitude = '${lat}' and longitude = '${long}'`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getCattle,
  getCattleOwner,
  getCattleId,
  getCattleLocation,
};
