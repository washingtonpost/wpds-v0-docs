import fs from "fs";
import globby from "globby";
import matter from "gray-matter";

export const getAllDocs = async () => {
  const posts = await globby(`mdx_*/**/*.mdx`);

  const docs = posts.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const slug = `/${filePath.replace(/\.mdx?$/, "").replace("mdx_", "")}`;
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath,
      slug,
    };
  });

  return docs;
};

export const getDocsListBySection = async (input) => {
  const posts = await globby(`mdx_${input}/**/*.mdx`);

  const docs = posts.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const slug = `/${filePath.replace(/\.mdx?$/, "").replace("mdx_", "")}`;
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath,
      slug,
    };
  });

  return docs;
};

export const getBlogPosts = async (input) => {
  const posts = await globby(`mdx_${input}/**/*.mdx`);

  const docs = posts.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const slug = `/${filePath.replace(/\.mdx?$/, "").replace("mdx_", "")}`;
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath,
      slug,
    };
  });

  return docs;
};
