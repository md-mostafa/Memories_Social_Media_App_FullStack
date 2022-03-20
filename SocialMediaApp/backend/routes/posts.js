import express from 'express';

import { getPosts } from '../contollers/posts';

const router = express.Router();


router.get('/', getPosts);


export default router;