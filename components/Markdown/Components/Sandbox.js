import {
	SandpackProvider,
	SandpackLayout,
	SandpackCodeEditor,
	SandpackPreview,
	SandpackCodeViewer,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

const CustomSandpack = ({ children }) => {
	return (
		<SandpackProvider
			template="react"
			customSetup={{
				dependencies: {
					"@washingtonpost/wpds-assets": "1.1.8",
					"@washingtonpost/wpds-ui-kit": "0.1.0-experimental.20",
				},
				files: {
					"/App.js": children,
				},
			}}
		>
			<SandpackLayout>
				<SandpackCodeEditor showLineNumbers />
				{/* <SandpackCodeViewer /> */}
				{/* <SandpackPreview /> */}
			</SandpackLayout>
		</SandpackProvider>
	);
};

export default CustomSandpack;
