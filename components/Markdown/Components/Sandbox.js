import React from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";
import { useTheme } from "next-themes";
import { styled } from "@washingtonpost/wpds-ui-kit";
const CustomSandpack = ({ withPreview, children }) => {
  const { resolvedTheme } = useTheme();
  return (
    <SandpackProvider
      template="react"
      customSetup={{
        dependencies: {
          "@washingtonpost/wpds-assets": "1.1.13",
          "@washingtonpost/wpds-ui-kit": "0.1.0-experimental.20",
        },
        files: {
          "/App.js": children,
        },
      }}
    >
      <SandpackLayout theme={resolvedTheme}>
        <SandpackCodeEditor
        // customStyle={{
        // 	width: "100%",
        // }}
        // wrapContent
        />
        {withPreview && (
          <SandpackPreview
          // customStyle={{
          // 	height: "auto",
          // 	minHeight: "auto",
          // }}
          />
        )}
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default React.memo(CustomSandpack);
