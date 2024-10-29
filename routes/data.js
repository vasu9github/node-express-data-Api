import express from 'express';
import { getData , getInData , PostData ,putData , DeletePost } from '../Controller/postController.js';
const router = express.Router();

// get all data 

router.get('/',getData);

// get individual data

router.get('/:id',getInData);

// create new data entry 

router.post('/',PostData);

// update data entry

router.put('/:id',putData);

// delete data entry 

router.delete('/:id', DeletePost);

export default router;