const MemoryCtrl = {};
const pool = require("../../db");

MemoryCtrl.createMemory = async (req, res) => {
  const { idusuario, nombre, descripcion } = req.body;
  const memory = {
    idusuario,
    nombre,
    descripcion,
  };
  await pool.query("INSERT INTO memoria set ? ", [memory]);
  res.send("memory created successfully");
};

MemoryCtrl.readMemories = async (req, res) => {
  const memories = await pool.query("SELECT * FROM memoria");
  res.status(200).json(memories);
};

MemoryCtrl.readMemory = async (req, res) => {
  const { id } = req.params;
  const user = await pool.query("SELECT * FROM memoria WHERE idmemoria = ?", [
    id,
  ]);
  res.status(200).json(user);
};

MemoryCtrl.updateMemory = async (req, res) => {
  const { id } = req.params;
  const { idusuario, nombre, descripcion } = req.body;
  const updatedMemory = { idusuario, nombre, descripcion };
  await pool.query("UPDATE memoria set ? WHERE idmemoria = ?", [
    updatedMemory,
    id,
  ]);
  res.send("Memory updated successfully");
};

MemoryCtrl.deleteMemories = async (req, res) => {
  res.send("yet not implemented");
};

MemoryCtrl.deleteMemory = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM memoria WHERE idmemoria = ?", [id]);
  res.send("Memory deleted successfully");
};

module.exports = MemoryCtrl;
