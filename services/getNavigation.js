import { getDocsListBySection } from ".";

export const getNavigation = async () => {
	const [foundationDocs] = ["foundations"].map((section) =>
		getDocsListBySection(section)
	);

	const [componentDocs] = ["components"].map((section) =>
		getDocsListBySection(section)
	);

	return [
		{
			category: "Foundations",
			docs: foundationDocs,
		},
		{
			category: "Components",
			docs: componentDocs,
		},
	];
};
