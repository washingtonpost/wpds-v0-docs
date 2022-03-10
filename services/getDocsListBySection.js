import fs from "fs";
import globby from "globby";
import matter from "gray-matter";

export const getAllDocs = async () => {
  const posts = await globby(`docs/**/*.mdx`);

  const docs = posts.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const slug = `/${filePath.replace(/\.mdx?$/, "").replace("docs/", "")}`;
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
  const posts = await globby(`docs/${input}/**/*.mdx`);
  const docs = posts.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const slug = `/${filePath.replace(/\.mdx?$/, "").replace("docs/", "")}`;
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

export const getResources = async (input) => {
  const posts = await globby(`docs/${input}/**/*.mdx`);

  const docs = posts.map((filePath) => {
    const source = fs.readFileSync(filePath);
    const slug = `/${filePath.replace(/\.mdx?$/, "").replace("docs/", "")}`;
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
