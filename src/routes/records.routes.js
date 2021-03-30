import { Router } from 'express';
import { getRecords, getByCategory, createRecord } from '../controllers/records.controller';

const router = Router();

router.get('/', getRecords)
router.get('/items/:category', getByCategory)
router.post('/', createRecord)

module.exports = router;