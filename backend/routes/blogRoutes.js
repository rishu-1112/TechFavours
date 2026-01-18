import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const router = express.Router();

const BLOG_PATH = path.join(process.cwd(), "../frontend/src/content/blogs");

router.get("/", (req, res) => {
  try {
    const blogs = fs.readdirSync(BLOG_PATH).map((file) => {
      const slug = file.replace(".mdx", "");
      const source = fs.readFileSync(path.join(BLOG_PATH, file));
      const { data, content } = matter(source);

      return {
        slug,
        ...data,
        readingTime: readingTime(content).text,
      };
    });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:slug", (req, res) => {
  try {
    const filePath = path.join(BLOG_PATH, `${req.params.slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Blog not found" });
    }

    const source = fs.readFileSync(filePath);
    const { data, content } = matter(source);

    res.json({
      slug: req.params.slug,
      ...data,
      content,
      readingTime: readingTime(content).text,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;