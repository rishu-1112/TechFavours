import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error(err));

app.use("/api/contact", contactRoutes);
app.use("/api/blogs", blogRoutes);

app.listen(8000, () =>
  console.log("Server running on http://localhost:8000")
);
