import express from 'express';
import getImageIdController from '../controller/findImage';
const router=express.Router();

router.get('/:id',getImageIdController.getImageId);

module.exports=router;