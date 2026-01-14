import { useEffect } from "react";

export default function SEO({
  title,
  description,
  image,
  url,
  schema,
  keywords,
  author = "TechFavours",
  robots = "index, follow",
}) {
  useEffect(() => {
    /* ---------- TITLE ---------- */
    if (title) document.title = title;

    /* ---------- META HELPER ---------- */
    const setMeta = (attr, name, content) => {
      if (!content) return;

      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    /* ---------- BASIC SEO ---------- */
    setMeta("name", "description", description);
    setMeta("name", "robots", robots);
    setMeta("name", "author", author);
    keywords && setMeta("name", "keywords", keywords);

    /* ---------- CANONICAL ---------- */
    if (url) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", url);
    }

    /* ---------- OPEN GRAPH ---------- */
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", "TechFavours");

    /* ---------- TWITTER ---------- */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    /* ---------- STRUCTURED DATA ---------- */
    if (schema) {
      let script = document.getElementById("structured-data");

      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "structured-data";
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    }
  }, [title, description, image, url, schema, keywords, robots, author]);

  return null;
}
