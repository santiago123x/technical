const keys = require("../../keys/keys.js");
const password = keys.cryptoKey;
const pool = require("../../conexion");
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers['token'];
  
  if (!token) return res.status(401).send({ token: null, isAuth: false });

  try {
    const deco = jwt.verify(token.replace(/["]+/g, ''), password);
    const email = deco.email;
    const response = await pool.query(
      `select * from usuario where email = ${email}`
    );
    const user = response.rows[0]
    if (!user || user.pass !== deco.pass) 
      return res.status(401).send({ token: null, isAuth: false });
    next();
  } catch (error) {
    return res.status(401).send({ token: null, isAuth: false });
  }
}

module.exports = verifyToken;