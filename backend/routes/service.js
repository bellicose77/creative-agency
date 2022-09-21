import express from 'express'
import { addService } from '../controllers/service.js';

const router = express.Router();

router.post('/services',addService);

export default router