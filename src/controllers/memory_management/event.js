const EventCtrl = {};
const pool = require("../../db");

EventCtrl.createEvent = async (req, res) => {
  const { idtrabajo, nombre, tipo } = req.body;
  const event = {
    idtrabajo,
    nombre,
    tipo,
  };
  await pool.query("INSERT INTO evento set ? ", [event]);
  res.send("event created successfully");
};

EventCtrl.readEvents = async (req, res) => {
  const events = await pool.query("SELECT * FROM evento");
  res.status(200).json(events);
};

EventCtrl.readEvent = async (req, res) => {
  const { id } = req.params;
  const event = await pool.query("SELECT * FROM evento WHERE idevento = ?", [
    id,
  ]);
  res.status(200).json(event);
};

EventCtrl.updateEvent = async (req, res) => {
  const { id } = req.params;
  const { idtrabajo, nombre, tipo } = req.body;
  const updatedEvent = {
    idtrabajo,
    nombre,
    tipo,
  };
  await pool.query("UPDATE evento set ? WHERE idevento= ?", [
    updatedEvent,
    id,
  ]);
  res.send("event updated successfully");
};

EventCtrl.deleteEvents = async (req, res) => {
  res.send("yet not implemented");
};

EventCtrl.deleteEvent = async (req, res) => {
  const { id } = req.params;
  const user = await pool.query("DELETE FROM evento WHERE idevento = ?", [
    id,
  ]);
  res.send("event deleted successfully");
};

module.exports = EventCtrl;
