const {Router} = require('express')
const PartitionCtrl = require('../../controllers/memory_management/partition')

const router = Router();

// Create
router.post('/', PartitionCtrl.createPartition);

// Read all
router.get('/', PartitionCtrl.readPartitions);

// Read by id
router.get('/:id', PartitionCtrl.readPartition);

// Update
router.put('/:id', PartitionCtrl.updatePartition);

// Delete all
router.delete('/', PartitionCtrl.deletePartitions);

// Delte by id
router.delete('/:id', PartitionCtrl.deletePartition);


module.exports = router;