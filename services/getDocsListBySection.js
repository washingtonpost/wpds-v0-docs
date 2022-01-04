import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getDocsListBySection = (input) => {
	const folder = path.join(process.cwd(), `mdx_${input}`);

	const docs = fs
		.readdirSync(folder)
		// Only include md(x) files
		.filter((path) => /\.mdx?$/.test(path))
		.map((filePath) => {
			const source = fs.readFileSync(path.join(folder, filePath));
			const slug = `/${input}/${filePath.replace(/\.mdx?$/, "")}`;
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
