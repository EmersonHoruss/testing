const EventCtrl = {};
const pool = require("../../db");

EventCtrl.createUser = async (req, res) => {
  const { nombre, username, correo } = req.body;
  const user = {
    nombre,
    username,
    correo,
  };
  await pool.query("INSERT INTO usuario set ? ", [user]);
  res.send("user created successfully");
};

EventCtrl.readUsers = async (req, res) => {
  const users = await pool.query("SELECT * FROM usuario");
  res.status(200).json(users);
};

EventCtrl.readUser = async (req, res) => {
  const { id } = req.params;
  const user = await pool.query("SELECT * FROM usuario WHERE idusuario = ?", [
    id,
  ]);
  res.status(200).json(user);
};

EventCtrl.updateUser = async (req, res) => {
  const { id } = req.params;
  const { nombre, username, correo } = req.body;
  const updatedUser = { nombre, username, correo };
  const user = await pool.query("UPDATE usuario set ? WHERE idusuario = ?", [
    updatedUser,
    id,
  ]);
  res.send("user updated successfully");
};

EventCtrl.deleteUsers = async (req, res) => {
  res.send("delete event");
};

EventCtrl.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await pool.query("DELETE FROM usuario WHERE idusuario = ?", [
    id,
  ]);
  res.send("user deleted successfully");
};

module.exports = EventCtrl;
