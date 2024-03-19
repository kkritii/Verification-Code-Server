import { Router } from "express";

import verifyCodeController from "./controllers/verifyCode.js";

const router = Router();
router.post('/verify', verifyCodeController);

export default router;
