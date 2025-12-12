export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.misbah.biz/sitemap.xml",
    host: "https://www.misbah.biz",
  };
}
