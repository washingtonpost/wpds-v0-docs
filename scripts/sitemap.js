const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const pagePaths = await globby(["pages/**/*.js", "!pages/_*.js"]);
  const pageRoutes = pagePaths
    .filter((pagePath) => !pagePath.includes("[slug]"))
    .map((pagePath) =>
      pagePath.replace("pages", "").replace(".js", "").replace("/index", "")
    );

  const blogPaths = await globby(["mdx_blog"]);
  const blogRoutes = blogPaths.map((postPath) =>
    postPath.replace("mdx_blog", "/blog").replace(".mdx", "")
  );

  const compPaths = await globby(["mdx_components"], {});
  const componentRoutes = compPaths.map((postPath) =>
    postPath.replace("mdx_components", "/components").replace(".mdx", "")
  );

  const foundationPaths = await globby(["mdx_foundations"], {});
  const foundationRoutes = foundationPaths.map((postPath) =>
    postPath.replace("mdx_foundations", "/foundations").replace(".mdx", "")
  );

  const releaseNotesPaths = await globby(["mdx_release-notes"], {});
  const releaseNotesRoutes = releaseNotesPaths.map((postPath) =>
    postPath.replace("mdx_release-notes", "/release-notes").replace(".mdx", "")
  );

  const allRoutes = [
    ...pageRoutes,
    ...blogRoutes,
    ...componentRoutes,
    ...foundationRoutes,
    ...releaseNotesRoutes,
  ].sort();

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      return `
      <url>
      <loc>${`https://build.washingtonpost.com${route}`}</loc>
      </url>
      `;
    })
    .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    parser: "html",
  });

  fs.writeFileSync("public/sitemap.xml", formatted);

  console.log("Sitemap generated");
})();
