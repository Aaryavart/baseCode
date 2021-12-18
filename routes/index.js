const express = require('express');
const  router = express.Router();
const homeController = require('../controllers/home_controller');
const eventController = require('../controllers/event_contoller');

console.log('INFO: Router loaded.');


router.get('/',homeController.home);
router.get('/home',homeController.home);
router.get('/team',homeController.team);
router.get('/events',homeController.events);
router.get('/gallery',homeController.gallery);
router.get('/contact',homeController.contact);
router.get('/admission',homeController.addmission);

router.use('/events/post', eventController.createEvent);


module.exports = router;