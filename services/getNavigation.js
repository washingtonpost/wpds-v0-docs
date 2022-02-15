import { getDocsListBySection } from ".";

export const getNavigation = async () => {
  const foundationDocs = await getDocsListBySection("foundations");
  const componentDocs = await getDocsListBySection("components");
  return [
    {
      sortItems: true,
      category: "Foundations",
      docs: foundationDocs,
    },
    {
      category: "Components",
      docs: componentDocs,
    },
  ];
};
