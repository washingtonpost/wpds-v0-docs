# WPDS Documentation site

We built this site to document the WPDS UI Kit. It's built with [Next.js](https://nextjs.org/). It's hosted on [Vercel](https://vercel.com/). It's written in [TypeScript](https://www.typescriptlang.org/).

## Getting started

We assume a Node.js environment using `lts/gallium` version of Node.js.

```bash
npm install
```

```bash
npm run dev
```

## Environment variables

Our documentation search uses [algolia](https://www.algolia.com/) to index the content. The API Key is stored in Vercel for safe keeping. If you want to test it locally or in CI please use the Vercel CLI to access them.

1. Install the Vercel CLI:

```bash
npm install -g vercel
```

2. Login into Vercel via the CLI:

```bash
vercel login
```

3. Run the `dev` command and follow the instructions. It will connect this repository to your Vercel account and the project.

```bash
vercel dev
```
