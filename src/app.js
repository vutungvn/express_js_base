import express from "express";
import categoryRoutes from "./routes/category.route.js";
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

export default app;
