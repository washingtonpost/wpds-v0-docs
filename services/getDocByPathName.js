import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

/**
 * gets markdown content given a path
 */
export const getDocByPathName = async (input) => {
	const [directory, fileName] = input.split("/");

	const slug = path.join(`mdx_${directory}`, `${fileName}.mdx`);
	const fileData = fs.readFileSync(slug);

	const { content, data } = matter(fileData);

	const source = await serialize(content, {
		scope: data,
	});

	return source;
};
