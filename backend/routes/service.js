import express from 'express'
import { addService, deleteService, getServices, getSingleService, updateService } from '../controllers/service.js';
import verifyUser from '../middelwares/checklogin.js'

const router = express.Router();

// add a new service
router.post('/services',addService);
//get all the service
router.get('/services',verifyUser,getServices);
//get a single service 
router.get('/services/:id',getSingleService);
// delete a service
router.delete('/services/:id',deleteService);
//update a service
router.put('/services/:id',updateService)

export default router