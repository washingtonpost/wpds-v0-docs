import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { remarkMdxCodeMeta } from "remark-mdx-code-meta";
import remarkGfm from "remark-gfm";

export async function getHeadings(input) {
  const fileData = fs.readFileSync(`docs/${input}.mdx`);

  const { content } = matter(fileData);

  // Get each line individually, and filter out anything that
  // isn't a heading.
  const headingLines = content.split("\n").filter((line) => {
    return line.match(/^###*\s/);
  });

  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw) => {
    const label = raw.replace(/^###*\s/, "");
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level = raw.slice(0, 3) === "###" ? 3 : 2;

    return { label, level };
  });

  return headingLines;
}

/**
 * gets markdown content given a path
 */
export const getDocByPathName = async (input) => {
  const [directory, fileName] = input.split("/");

  const slug = path.join(`docs/${directory}`, `${fileName}.mdx`);
  const fileData = fs.readFileSync(slug);

  const { content, data } = matter(fileData);

  const source = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMdxCodeMeta],
    },
  });

  return source;
};

export const getResource = async (input) => {
  const [directory, category, fileName] = input.split("/");

  const slug = path.join(`docs/${directory}/${category}`, `${fileName}.mdx`);
  const fileData = fs.readFileSync(slug);

  const { content, data } = matter(fileData);

  const source = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMdxCodeMeta],
    },
  });

  return source;
};
