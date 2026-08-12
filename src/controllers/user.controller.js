export const uploadAvatar = async (req, res) => {
  try {
    // Nếu dùng upload.single('avatar') -> lấy req.file
    // Nếu dùng upload.fields([{ name: 'avatar' }]) -> lấy req.files.avatar[0]
    const fileData =
      req.file || (req.files && req.files.avatar ? req.files.avatar[0] : null);

    if (!fileData) {
      return res.status(400).json({ message: "Vui lòng chọn file để tải lên" });
    }

    // URL ảnh đã được Cloudinary xử lý và trả về
    const avatarUrl = fileData.path;
    const publicId = fileData.filename; // ID dùng để xoá ảnh sau này nếu cần

    // ... Thực hiện logic lưu URL vào Database ở đây ...

    return res.status(200).json({
      message: "Tải lên avatar thành công",
      data: {
        url: avatarUrl,
        public_id: publicId,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
