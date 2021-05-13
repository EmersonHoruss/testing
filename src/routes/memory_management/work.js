const {Router} = require('express')
const WorkCtrl = require('../../controllers/memory_management/work')

const router = Router();

// Create
router.post('/', WorkCtrl.createWork);

// Read all
router.get('/', WorkCtrl.readWorks);

// Read by id
router.get('/:id', WorkCtrl.readWork);

// Update
router.put('/:id', WorkCtrl.updateWork);

// Delete all
router.delete('/', WorkCtrl.deleteWorks);

// Delte by id
router.delete('/:id', WorkCtrl.deleteWork);


module.exports = router;