const EventCtrl = {};
const pool = require("../../db");
const { nanoid } = require("nanoid");

EventCtrl.createUser = async (req, res) => {
  const { _name, _password, _username, _mail } = req.body;
  const user = {
    _id: "",
    _name,
    _password,
    _username,
    _mail,
  };
  const ids = JSON.parse(
    JSON.stringify(await pool.query("SELECT _id FROM TUSER"))
  );
  if(ids){
    do {
      user._id = nanoid(5);
    } while (ids.find(e => e._id===user._id));
  }else{
    user._id = nanoid(5);
  }
  await pool.query("INSERT INTO TUSER set ? ", [user]);
  res.send("user created successfully");
};

EventCtrl.readUsers = async (req, res) => {
  const users = await pool.query("SELECT * FROM TUSER");
  res.status(200).json(users);
};

EventCtrl.readUser = async (req, res) => {
  const { id } = req.params;
  const user = await pool.query("SELECT * FROM TUSER WHERE _id = ?", [
    id,
  ]);
  res.status(200).json(user);
};

EventCtrl.updateUser = async (req, res) => {
  const { id } = req.params;
  const { _name, _password, _username, _mail } = req.body;
  const updatedUser = { _name, _password, _username, _mail };
  const user = await pool.query("UPDATE TUSER set ? WHERE _id = ?", [
    updatedUser,
    id,
  ]);
  res.send("user updated successfully");
};

EventCtrl.deleteUsers = async (req, res) => {
  res.send("yet not implemented");
};

EventCtrl.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await pool.query("DELETE FROM TUSER WHERE _id = ?", [
    id,
  ]);
  res.send("user deleted successfully");
};

module.exports = EventCtrl;
