const WorkCtrl = {};
const pool = require("../../db");
const { nanoid } = require("nanoid");

WorkCtrl.createWork = async (req, res) => {
  const { _idPartition, _name, _weight, _state } = req.body;
  const work = {
    _id: "",
    _idPartition,
    _name,
    _weight,
    _state,
  };
  const ids = JSON.parse(
    JSON.stringify(await pool.query("SELECT _id FROM TWORK"))
  );
  if (ids) {
    do {
      work._id = nanoid(15);
    } while (ids.find((e) => e._id === work._id));
  } else {
    work._id = nanoid(15);
  }
  await pool.query("INSERT INTO TWORK set ? ", [work]);
  res.send("work created successfully");
};

WorkCtrl.readWorks = async (req, res) => {
  const works = await pool.query("SELECT * FROM TWORK");
  res.status(200).json(works);
};

WorkCtrl.readWork = async (req, res) => {
  const { id } = req.params;
  const work = await pool.query("SELECT * FROM TWORK WHERE _id = ?", [id]);
  res.status(200).json(work);
};

WorkCtrl.updateWork = async (req, res) => {
  const { id } = req.params;
  const { _idPartition, _name, _weight, _state } = req.body;
  const updatedWork = {
    _idPartition,
    _name,
    _weight,
    _state,
  };
  await pool.query("UPDATE TWORK set ? WHERE _id= ?", [updatedWork, id]);
  res.send("work updated successfully");
};

WorkCtrl.deleteWorks = async (req, res) => {
  res.send("yet not implemented");
};

WorkCtrl.deleteWork = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM TWORK WHERE _id = ?", [id]);
  res.send("work deleted successfully");
};

module.exports = WorkCtrl;
