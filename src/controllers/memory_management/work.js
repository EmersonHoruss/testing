const WorkCtrl = {};
const pool = require("../../db");

WorkCtrl.createWork = async (req, res) => {
  const { idparticion, nombre, peso, estado } = req.body;
  const work = {
    idparticion,
    nombre,
    peso,
    estado,
  };
  await pool.query("INSERT INTO trabajo set ? ", [work]);
  res.send("work created successfully");
};

WorkCtrl.readWorks = async (req, res) => {
  const works = await pool.query("SELECT * FROM trabajo");
  res.status(200).json(works);
};

WorkCtrl.readWork = async (req, res) => {
  const { id } = req.params;
  const work = await pool.query("SELECT * FROM trabajo WHERE idtrabajo = ?", [
    id,
  ]);
  res.status(200).json(work);
};

WorkCtrl.updateWork = async (req, res) => {
  const { id } = req.params;
  const { idparticion, nombre, peso, estado } = req.body;
  const updatedWork = {
    idparticion,
    nombre,
    peso,
    estado,
  };
  await pool.query("UPDATE trabajo set ? WHERE idtrabajo= ?", [
    updatedWork,
    id,
  ]);
  res.send("work updated successfully");
};

WorkCtrl.deleteWorks = async (req, res) => {
  res.send("yet not implemented");
};

WorkCtrl.deleteWork = async (req, res) => {
  const { id } = req.params;
  const user = await pool.query("DELETE FROM trabajo WHERE idtrabajo = ?", [
    id,
  ]);
  res.send("work deleted successfully");
};

module.exports = WorkCtrl;
