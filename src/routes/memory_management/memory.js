const {Router} = require('express')
const MemoryCtrl = require('../../controllers/memory_management/memory')

const router = Router();

// Create
router.post('/', MemoryCtrl.createMemory);

// Read all
router.get('/', MemoryCtrl.readMemories);

// Read by id
router.get('/:id', MemoryCtrl.readMemory);

// Update
router.put('/:id', MemoryCtrl.updateMemory);

// Delete all
router.delete('/', MemoryCtrl.deleteMemories);

// Delte by id
router.delete('/:id', MemoryCtrl.deleteMemory);


module.exports = router;