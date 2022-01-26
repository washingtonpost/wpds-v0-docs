import React, { useEffect, useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";

const CustomSandpack = ({ withPreview, children }) => {
  const { resolvedTheme } = useTheme();
  const [sandboxTheme, setSandboxTheme] = useState("'light'");
  const [bodyBackground, setBodyBackground] = useState("theme.colors.primary");
  const [sandboxEmbedTheme, setSandboxEmbedTheme] = useState("github-light");

  useEffect(() => {
    console.log(resolvedTheme);
    if (resolvedTheme === "light") {
      setSandboxTheme("darkTheme.className");
      setSandboxEmbedTheme("github-light");
    } else {
      setSandboxEmbedTheme("night-owl");
      setSandboxTheme("'light'");
    }
    setBodyBackground("theme.colors.primary");
  }, [resolvedTheme]);

  const AppCode = `import { globalCss, styled, darkTheme, theme, globalStyles, darkModeGlobalStyles } from "@washingtonpost/wpds-ui-kit";
import Example from "./Example";

const Canvas = styled("div", {
  background: ${bodyBackground},
  padding: "$100",
  width: "100vw",
  height: "100vh",
  margin: "0 auto",
  overflow: "hidden"
});

export default function App() {
  globalStyles();
  darkModeGlobalStyles();
  return (
    <Canvas className={${sandboxTheme}}>
      <Example />
    </Canvas>
  );
}`;

  return (
    <Sandpack
      template="react"
      theme={sandboxEmbedTheme}
      options={{
        showNavigator: false,
        showTabs: false,
        // closableTabs: true,
        // showLineNumbers: false,
        // showInlineErrors: true,
        // wrapContent: true,
        autorun: withPreview,
        // editorHeight: "100%",
      }}
      customSetup={{
        dependencies: {
          "@washingtonpost/wpds-assets": "latest",
          "@washingtonpost/wpds-ui-kit": "0.2.0",
        },
        files: {
          "/App.js": AppCode,
          "/Example.js": {
            code: children,
            active: true,
          },
        },
      }}
    />
  );
};

export default React.memo(CustomSandpack);
