const express = require('express');

const { getActivities, addActivity } =  require('../controllers/activity.controller');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/activities', auth, getActivities);
router.post('/activity', auth, addActivity);

module.exports = router;
