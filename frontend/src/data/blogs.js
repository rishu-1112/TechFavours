const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function getBlogs() {
  const res = await fetch(`${API_URL}/blogs`);
  return res.json();
}

export async function getBlogBySlug(slug) {
  const res = await fetch(`${API_URL}/blogs/${slug}`);
  if (!res.ok) throw new Error("Blog not found");
  return res.json();
}
