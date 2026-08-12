import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.config.js";

export const createCloudinaryUploader = (folderName = "uploads") => {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folderName,
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
      public_id: (req, file) => {
        // Tên file gốc bỏ đuôi mở rộng
        const nameWithoutExt = file.originalname
          .split(".")
          .slice(0, -1)
          .join(".");
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        return `${nameWithoutExt}-${uniqueSuffix}`;
      },
    },
  });

  return multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // Giới hạn kích thước file 2MB (tùy chỉnh)
  });
};
