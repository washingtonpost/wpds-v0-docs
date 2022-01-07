module.exports = {
	async rewrites() {
		return [
			{
				source: "/components",
				destination: "/components/design",
			},
			{
				source: "/foundations",
				destination: "/foundations/design",
			},
			{
				source: "/v0/:path*",
				destination:
					"https://v0.wpds.docs.preview.now.washingtonpost.com/:path*",
			},
			{
				source: "/v0",
				destination:
					"https://v0.wpds.docs.preview.now.washingtonpost.com",
			},
		];
	},
	async rewrites() {
		return [
			{
				source: "/foundations",
				destination: "/foundations/design",
			},
			{
				source: "/components",
				destination: "/components/design",
			},
			// {
			// 	source: "/v0/:path*",
			// 	destination:
			// 		"https://v0.wpds.docs.preview.now.washingtonpost.com/:path*",
			// },
		];
	},
};
