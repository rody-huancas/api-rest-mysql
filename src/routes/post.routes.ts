import { Router } from 'express';
import { createPost, deletePost, getPost, getPosts } from '../controllers/posts.controller';

const router = Router();

router.route("/")
    .get(getPosts)
    .post(createPost);

router.route("/:postId")
    .get(getPost)
    .delete(deletePost)

export default router;