import { Router } from 'express';
import { createPost, getPosts } from '../controllers/posts.controller';

const router = Router();

router.route("/").get(getPosts);
router.route("/").post(createPost);

export default router;