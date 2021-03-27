import { Router } from 'express';
import { getRecords } from '../controllers/records.controller';

const router = Router();

router.get('/', getRecords)

module.exports = router;