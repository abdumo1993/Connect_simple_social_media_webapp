import { Router } from "express";
import authRoutes from './auth.mjs';
import postRoutes from './post.mjs';
import usersRoutes from './users.mjs'
const router = Router();
router.use(authRoutes)
router.use(postRoutes)
router.use(usersRoutes)
// will there really be a change

export default router;
