import { DocSearch } from "@docsearch/react";
import "@docsearch/css";
import { globalCss } from "@washingtonpost/wpds-ui-kit";

const searchGlobalCss = globalCss({
	".DocSearch-Container": {
		zIndex: "9999 !important",
	},
});

const SearchForm = () => {
	searchGlobalCss();
	return (
		<DocSearch
			appId="O19N5YY9R3"
			indexName="crawler_WPDS Documentation Website"
			apiKey="d6e309a4051d820cae616d3419f4a5d9"
		/>
	);
};

export default SearchForm;
