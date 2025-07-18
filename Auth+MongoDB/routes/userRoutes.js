const userController=require('../controllers/userController');

const express=require('express');

const router=express.Router();

router.post('/register',userController.userRegister);
router.post('/login',userController.userLogin);

router.get('/all-users',userController.getAllUsers);

module.exports=router;