import { Router } from 'express';

import {
  postAllUser,
  postAllmalls,
  postAllWinners
} from '../controllers/ruleta.controller';

const router = Router();
router.post('/user', postAllUser); 
router.post('/malls', postAllmalls); 
router.post('/winners', postAllWinners);




export default router;
