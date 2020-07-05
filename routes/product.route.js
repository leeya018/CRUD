import express from 'express';
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
import  product_controller from '../controllers/product.controller';



// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create);







export default router;