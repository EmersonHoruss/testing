const PartitionCtrl = {};
const pool = require("../../db");
const { nanoid } = require("nanoid");

PartitionCtrl.createPartition = async (req, res) => {
  const { _idMemory, _position, _size, _busy, _state } = req.body;
  const partition = {
    _id:'',
    _idMemory,
    _position,
    _size,
    _busy,
    _state,
  };
  const ids = JSON.parse(
    JSON.stringify(await pool.query("SELECT _id FROM TPARTITION"))
  );
  if(ids){
    do {
      partition._id = nanoid(15);
    } while (ids.find(e => e._id===partition._id));
  }else{
    partition._id = nanoid(15);
  }
  await pool.query("INSERT INTO TPARTITION set ? ", [partition]);
  res.send("partition created successfully");
};

PartitionCtrl.readPartitions = async (req, res) => {
  partitions = await pool.query("SELECT * FROM TPARTITION");
  res.status(200).json(partitions);
};

PartitionCtrl.readPartition = async (req, res) => {
  const { id } = req.params;
  partition = await pool.query("SELECT * FROM TPARTITION WHERE _id = ?", [id]);
  res.status(200).json(partition);
};

PartitionCtrl.updatePartition = async (req, res) => {
  const { id } = req.params;
  const { _idMemory, _position, _size, _busy, _state } = req.body;
  const updatedPartition = {
    _idMemory,
    _position,
    _size,
    _busy,
    _state,
  };

  const parition = await pool.query("UPDATE TPARTITION set ? WHERE _id = ?", [
    updatedPartition,
    id,
  ]);
  res.send("partition updated successfully");
};

PartitionCtrl.deletePartitions = async (req, res) => {
  res.send("yet not implemented");
};

PartitionCtrl.deletePartition = async (req, res) => {
  const { id } = req.params;
  const parition = await pool.query("DELETE FROM TPARTITION WHERE _id = ?", [
    id,
  ]);
  res.send("partition deleted successfully");
};

module.exports = PartitionCtrl;
