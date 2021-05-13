const PartitionCtrl = {};
const pool = require("../../db");

PartitionCtrl.createPartition = async (req, res) => {
  const { idmemoria, posicion, tamanho, ocupado, estado } = req.body;
  const partition = {
    idmemoria,
    posicion,
    tamanho,
    ocupado,
    estado,
  };
  
  partition.posicion = parseInt(partition.posicion) 
  partition.tamanho = parseInt(partition.tamanho) 
  partition.ocupado = parseInt(partition.ocupado) 

  await pool.query("INSERT INTO particion set ? ", [partition]);
  res.send("partition created successfully");
};

PartitionCtrl.readPartitions = async (req, res) => {
  partitions = await pool.query("SELECT * FROM particion");
  res.status(200).json(partitions);
};

PartitionCtrl.readPartition = async (req, res) => {
  const { id } = req.params;
  partition = await pool.query("SELECT * FROM particion WHERE idparticion = ?", [id]);
  res.status(200).json(partition);
};

PartitionCtrl.updatePartition = async (req, res) => {
  const { id } = req.params;
  const { idmemoria, posicion, tamanho, ocupado, estado } = req.body;
  const updatedPartition = {
    idmemoria,
    posicion,
    tamanho,
    ocupado,
    estado,
  };
  updatedPartition.posicion = parseInt(updatedPartition.posicion) 
  updatedPartition.tamanho = parseInt(updatedPartition.tamanho) 
  updatedPartition.ocupado = parseInt(updatedPartition.ocupado)
  const user = await pool.query("UPDATE particion set ? WHERE idparticion = ?", [
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
  const user = await pool.query("DELETE FROM particion WHERE idparticion = ?", [
    id,
  ]);
  res.send("partition deleted successfully");
};

module.exports = PartitionCtrl;
