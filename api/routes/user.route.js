import express  from "express";
import { test, updateUser,signout, getUsers, sendnotice, getnotice,delnotice } from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { deleteUser } from "../controller/auth.contoller.js";

const router= express.Router();

router.get('/test',test);
router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId',verifyToken,deleteUser);
router.post('/signout', signout);
router.get('/getusers',verifyToken,getUsers);
router.get('/get-all-notify',verifyToken, getnotice);
router.delete('/delete-notify',verifyToken, delnotice);
router.post('/apply-notify',verifyToken, sendnotice);

export default router; 