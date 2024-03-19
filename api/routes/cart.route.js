import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletecart, getcarts} from '../controller/cart.controller.js';

const router = express.Router();
router.post('/create', verifyToken, create);
router.get('/getcarts', getcarts);
router.delete('/deletecart/:cartId/:userId', verifyToken, deletecart);
export default router;