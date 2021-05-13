const {Router} = require('express')
const EventCtrl = require('../../controllers/memory_management/event')

const router = Router();

// Create
router.post('/', EventCtrl.createEvent);

// Read all
router.get('/', EventCtrl.readEvents);

// Read by id
router.get('/:id', EventCtrl.readEvent);

// Update
router.put('/:id', EventCtrl.updateEvent);

// Delete all
router.delete('/', EventCtrl.deleteEvents);

// Delte by id
router.delete('/:id', EventCtrl.deleteEvent);


module.exports = router;