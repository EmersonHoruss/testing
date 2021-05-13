const {Router} = require('express')
const UserCtrl = require('../../controllers/user/user')

const router = Router();

// Create
router.post('/', UserCtrl.createUser);

// Read all
router.get('/', UserCtrl.readUsers);

// Read by id
router.get('/:id', UserCtrl.readUser);

// Update
router.put('/:id', UserCtrl.updateUser);

// Delete all
router.delete('/', UserCtrl.deleteUsers);

// Delte by id
router.delete('/:id', UserCtrl.deleteUser);


module.exports = router;