const MemoryCtrl = {};
const pool = require("../../db");
const { nanoid } = require("nanoid");

MemoryCtrl.createMemory = async (req, res) => {
  const { _idUser, _name, _description } = req.body;
  const memory = {
    _id:'',
    _idUser,
    _name,
    _description,
  };
  const ids = JSON.parse(
    JSON.stringify(await pool.query("SELECT _id FROM TMEMORY"))
  );
  if(ids){
    do {
      memory._id = nanoid(10);
    } while (ids.find(e => e._id===memory._id));
  }else{
    memory._id = nanoid(10);
  }
  await pool.query("INSERT INTO TMEMORY set ? ", [memory]);
  res.send("memory created successfully");
};

MemoryCtrl.readMemories = async (req, res) => {
  const memories = await pool.query("SELECT * FROM TMEMORY");
  res.status(200).json(memories);
};

MemoryCtrl.readMemory = async (req, res) => {
  const { id } = req.params;
  const memory = await pool.query("SELECT * FROM TMEMORY WHERE _id = ?", [
    id,
  ]);
  res.status(200).json(memory);
};

MemoryCtrl.updateMemory = async (req, res) => {
  const { id } = req.params;
  const { _idUser, _name, _description } = req.body;
  const updatedMemory = { _idUser, _name, _description };
  await pool.query("UPDATE TMEMORY set ? WHERE _id = ?", [
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
  await pool.query("DELETE FROM TMEMORY WHERE _id = ?", [id]);
  res.send("Memory deleted successfully");
};

module.exports = MemoryCtrl;
