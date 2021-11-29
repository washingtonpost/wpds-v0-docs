import fs from "fs";
import path from "path";
import glob from "glob";

// POST_PATH used to get a specific file postFilePaths gets all mdx in POST_PATH directory
export const POSTS_PATH = path.join(process.cwd(), "mdx_blog");
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter(path => /\.mdx?$/.test(path));

// DOCS_PATH used to get a specific file docsFilePaths gets all mdx in DOCS_PATH directory
export const DOCS_PATH = path.join(process.cwd(), "mdx_component-docs");
export const docsFilePaths = fs
  .readdirSync(DOCS_PATH)
  // Only include md(x) files
  .filter(path => /\.mdx?$/.test(path));

// FOUNDATION_PATH used to get a specific file foundationFilePaths gets all mdx in FOUNDATION_PATH directory
export const FOUNDATION_PATH = path.join(process.cwd(), "mdx_foundations");
export const foundationFilePaths = fs
  .readdirSync(FOUNDATION_PATH)
  // Only include md(x) files
  .filter(path => /\.mdx?$/.test(path));

// FOUNDATION_PATH used to get a specific file foundationFilePaths gets all mdx in FOUNDATION_PATH directory
export const RELEASE_NOTES_PATH = path.join(process.cwd(), "mdx_release-notes");
export const release_notesFilePaths = fs
  .readdirSync(RELEASE_NOTES_PATH)
  // Only include md(x) files
  .filter(path => /\.mdx?$/.test(path));
