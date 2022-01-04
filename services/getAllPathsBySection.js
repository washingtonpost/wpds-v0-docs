import fs from "fs";
import path from "path";

export const getAllPathsBySection = async (input) => {
	const folder = path.join(process.cwd(), `mdx_${input}`);

	const paths = fs
		.readdirSync(folder)
		// Only include md(x) files
		.filter((path) => /\.mdx?$/.test(path))
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ""))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }));

	return paths;
};
