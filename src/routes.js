import { Router } from "express";

import * as verifyCodeController from "./controllers/verifyCode.js";

const router = Router();

router.get('/', verifyCodeController.checkServerStatus);
router.post('/verify', verifyCodeController.verifyCode);

export default router;
