import express from 'express';
const router = express.Router();

import itemsController from '../controllers/items.controller.js' 


router.get('/getItem/:name', itemsController.getItem);
router.get('/getItemByPrice/:price', itemsController.getItemByPrice);

router.post('/addItem',itemsController.addItem)
router.put('/updateItem/:name',itemsController.editItem)
router.delete('/deleteItem/:name',itemsController.removeItem)

export default router

//ww