const pool = require("../../conexion");

const getZones = async (req, res) => {
  try {
    const response = await pool.query(`select * from zone`);
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getZonesId = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query(`select * from zone where id = ${id}`);
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getZoneCode = async (req, res) => {
  try {
    const { code } = req.params;
    const response = await pool.query(
      `select * from zone where code = '${code}'  order by code`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getZoneLocation = async (req, res) => {
  try {
    const { long, lat } = req.params;
    const response = await pool.query(
      `select * from zone 
      where latitude = '${lat}' and longitude = '${long}'`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getAllInfo = async (req, res) => {
  try {
    const zones = await pool.query(`select * from zone`);
    const cattles = await pool.query(`select * from cattle`);
    const data = { zones: zones.rows, cattles: cattles.rows };
    res.send(data);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getZones,
  getZoneCode,
  getZonesId,
  getZoneLocation,
  getAllInfo
};
