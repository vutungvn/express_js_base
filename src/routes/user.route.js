import { Router } from "express";
import { uploadAvatar } from "../controllers/user.controller.js";
import { createCloudinaryUploader } from "../middlewares/upload.middleware.js";

const router = Router();

const avatarUploader = createCloudinaryUploader("users");

router.post("/upload-avatar", avatarUploader.single("avatar"), uploadAvatar);

export default router;
