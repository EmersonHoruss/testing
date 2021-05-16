const EventCtrl = {};
const pool = require("../../db");
const { nanoid } = require("nanoid");

EventCtrl.createEvent = async (req, res) => {
  const { _idWork, _name, _kind } = req.body;
  const event = {
    _idWork,
    _name,
    _kind,
  };
  const ids = JSON.parse(
    JSON.stringify(await pool.query("SELECT _id FROM TEVENT"))
  );
  if (ids) {
    do {
      event._id = nanoid(15);
    } while (ids.find((e) => e._id === event._id));
  } else {
    event._id = nanoid(15);
  }
  await pool.query("INSERT INTO TEVENT set ? ", [event]);
  res.send("event created successfully");
};

EventCtrl.readEvents = async (req, res) => {
  const events = await pool.query("SELECT * FROM TEVENT");
  res.status(200).json(events);
};

EventCtrl.readEvent = async (req, res) => {
  const { id } = req.params;
  const event = await pool.query("SELECT * FROM TEVENT WHERE _id = ?", [id]);
  res.status(200).json(event);
};

EventCtrl.updateEvent = async (req, res) => {
  const { id } = req.params;
  const { _idWork, _name, _kind } = req.body;
  const updatedEvent = {
    _idWork,
    _name,
    _kind,
  };
  await pool.query("UPDATE TEVENT set ? WHERE _id= ?", [updatedEvent, id]);
  res.send("event updated successfully");
};

EventCtrl.deleteEvents = async (req, res) => {
  res.send("yet not implemented");
};

EventCtrl.deleteEvent = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM TEVENT WHERE _id = ?", [id]);
  res.send("event deleted successfully");
};

module.exports = EventCtrl;
