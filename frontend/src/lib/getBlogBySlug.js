export async function getBlogBySlug(slug) {
  const post = await fetch(`/content/blogs/${slug}.md`).then(res => res.text());
  return post;
}
