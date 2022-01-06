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
		];
	},
};
