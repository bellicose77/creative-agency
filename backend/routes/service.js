import express from 'express'
import { addService } from '../controllers/service.js';

const router = express.Router();

// add a new service
router.post('/services',addService);
//get all the service
router.get('/services');

export default router