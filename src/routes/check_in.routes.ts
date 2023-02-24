import { Router } from 'npm:express';
import { getChecks_In, getCheck_In, createCheck_In, updateCheck_In, deleteCheck_In } from '../controllers/check_in.controller.ts'

const router = Router();

router.get('/check_in', getChecks_In);
router.get('/check_in/:id', getCheck_In);
router.post('/check_in', createCheck_In);
router.put('/check_in/:id', updateCheck_In);
router.delete('/check_in/:id', deleteCheck_In);

export default router;