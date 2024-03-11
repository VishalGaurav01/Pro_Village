import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deleteshop, getshops, updateshop} from '../controller/shop.controller.js';

const router = express.Router();
router.post('/create', verifyToken, create);
router.get('/getshops', getshops);
router.delete('/deleteshop/:postId/:userId', verifyToken, deleteshop);
router.put('/updateshop/:shopId/:userId', verifyToken, updateshop);
export default router;