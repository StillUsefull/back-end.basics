const Router = require('express').Router;
const WorkController = require('../controllers/WorkController.js');

const WorkRouter = new Router('/');

WorkRouter.get('/get-works', WorkController.getWorks);
WorkRouter.post('/create-work', WorkController.createWork);
WorkRouter.put('/update-work-data', WorkController.updateWorkById);
WorkRouter.put('/add-student', WorkController.addStudent);
WorkRouter.delete('/delete-work', WorkController.deleteWork);

module.exports = WorkRouter;