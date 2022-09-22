import express from 'express'
import { addService, getServices } from '../controllers/service.js';

const router = express.Router();

// add a new service
router.post('/services',addService);
//get all the service
router.get('/services',getServices);
//get a single service 
router.get('/services/:id');

export default router