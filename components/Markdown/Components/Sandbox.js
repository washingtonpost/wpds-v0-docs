import React, { useEffect, useState } from "react";
import {
  SandpackPreview,
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  UnstyledOpenInCodeSandboxButton,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import { Box, styled, Icon, theme } from "@washingtonpost/wpds-ui-kit";
import packageJson from "../../../package.json";
import packageJsonLock from "../../../package-lock.json";
import InlineSVG from "./inlineSVG";

const ClipboardIcon = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 2.5H2.5V13.5H13.5V2.5H11" stroke={theme.colors.accessible} />
    <rect x="6" y="2" width="4" height="2" fill={theme.colors.accessible} />
    <rect x="5" y="6" width="3" height="1" fill={theme.colors.accessible} />
    <rect x="5" y="8" width="6" height="1" fill={theme.colors.accessible} />
    <rect x="5" y="10" width="5" height="1" fill={theme.colors.accessible} />
    <circle
      r="1"
      transform="matrix(1 0 0 -1 8 2)"
      fill={theme.colors.accessible}
    />
  </svg>
);

const CodeIcon = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.11 4.44 2 8l3.11 3.56.63-.72L3.25 8l2.49-2.84-.63-.72zm5.78 0-.63.72L12.75 8l-2.49 2.84.63.72L14 8l-3.11-3.56zm-4.56 8.28.88.28 2.5-9.72L8.82 3l-2.49 9.72z"
      fill={theme.colors.accessible}
    />
  </svg>
);

const CopyCodeButton = () => {
  const [copied, setCopied] = useState(false);
  const { sandpack } = useSandpack();
  const { files, activePath } = sandpack;
  const code = files[activePath].code;

  // set the copied state to false after a second
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);

  return (
    <Button
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        columnGap: "calc($050/2)",
      }}
      onClick={() => {
        // copy code to clipboard
        navigator.clipboard.writeText(code);
        setCopied(true);
      }}
      aria-label="Copy code to clipboard"
    >
      <Icon>
        <InlineSVG
          cushion="none"
          path="/img/doc-icons/clipboard.svg"
          height="16"
          width="16"
        />
      </Icon>
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
};

const lightTheme = {
  palette: {
    activeText: "#166dfc",
    defaultText: "#666666",
    inactiveText: "#e9e9e9",
    activeBackground: "#dde6f2",
    defaultBackground: "#ffffff",
    inputBackground: "#ffffff",
    accent: "#166dfc",
    errorBackground: "#ffffff",
    errorForeground: "#f27b81",
  },
  syntax: {
    plain: "#111111",
    comment: {
      color: "#999",
      fontStyle: "italic",
    },
    keyword: "#166dfc",
    tag: "#498a0c",
    punctuation: "#111111",
    definition: "#092c65",
    property: "#166dfc",
    static: "#b16e00",
    string: "#498a0c",
  },
  typography: {
    bodyFont:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monoFont:
      '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    fontSize: "14px",
    lineHeight: "1.4",
  },
};

const darkTheme = {
  palette: {
    activeText: "#1761f1",
    defaultText: "#868585",
    inactiveText: "#e9e9e9",
    activeBackground: "#0f1218",
    defaultBackground: "#020202",
    inputBackground: "#020202",
    accent: "#1761f1",
    errorBackground: "#020202",
    errorForeground: "#f27b81",
  },
  syntax: {
    plain: "#f3f3f3",
    comment: {
      color: "#f3f3f3",
      fontStyle: "italic",
    },
    keyword: "#166dfc",
    tag: "#517c2a",
    punctuation: "#f3f3f3",
    definition: "#cdd4df",
    property: "#166dfc",
    static: "#906629",
    string: "#517c2a",
  },
  typography: {
    bodyFont:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monoFont:
      '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    fontSize: "14px",
    lineHeight: "1.4",
  },
};

const buttonStyles = {
  cursor: "pointer",
  fontFamily: "$meta",
  fontSize: "$100",
  fontWeight: "$light",
  lineHeight: "$150",
  color: "$accessible",
  appearance: "none",
  border: "none",
  background: "transparent",
  padding: "calc($050/2)",
  borderRadius: "$012",
  "&:active": {
    background: "$subtle",
  },
  "@hover": {
    "&:hover": {
      background: "$subtle",
    },
  },
};

const Button = styled("button", {
  ...buttonStyles,
});

const OpenInSandboxButton = styled(UnstyledOpenInCodeSandboxButton, {
  alignSelf: "flex-end",
  ...buttonStyles,
});

const CustomSandpack = ({ isGuide, withPreview = false, children }) => {
  const [showCode, setShowCode] = useState(!withPreview);
  const { resolvedTheme } = useTheme();
  const [sandboxTheme, setSandboxTheme] = useState("");
  const [bodyBackground, setBodyBackground] = useState("$gray500");
  const [sandboxEmbedTheme, setSandboxEmbedTheme] = useState(lightTheme);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setSandboxEmbedTheme(darkTheme);
      setSandboxTheme("darkTheme.className");
    } else {
      setSandboxTheme("'light'");
      setSandboxEmbedTheme(lightTheme);
    }
    setBodyBackground("$gray500");
  }, [resolvedTheme]);

  const AppCode = `import { globalCss, styled, darkTheme, theme, globalStyles, darkModeGlobalStyles } from "@washingtonpost/wpds-ui-kit";
import Example from "./Example";
import Success from "@washingtonpost/wpds-assets/asset/success";
import Warning from "@washingtonpost/wpds-assets/asset/warning";
import Info from "@washingtonpost/wpds-assets/asset/info";
import Error from "@washingtonpost/wpds-assets/asset/error";


const Canvas = styled("div", {
  background: "${bodyBackground}",
  color: "$accessible",
  padding: "$100",
  width: "100vw",
  height: "100vh",
  margin: "0 auto",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
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
    <>
      <SandpackProvider
        template="react"
        customSetup={{
          dependencies: {
            "@washingtonpost/wpds-assets":
              packageJson.dependencies["@washingtonpost/wpds-assets"],
            "@washingtonpost/wpds-ui-kit":
              packageJson.dependencies["@washingtonpost/wpds-ui-kit"],
            ...packageJsonLock.packages[
              "node_modules/@washingtonpost/wpds-ui-kit"
            ].dependencies,
            ...packageJsonLock.packages[
              "node_modules/@washingtonpost/wpds-theme"
            ].peerDependencies,
            "@radix-ui/react-checkbox":
              packageJson.dependencies["@radix-ui/react-checkbox"],
            "@stitches/react": packageJson.dependencies["@stitches/react"],
          },
          files: {
            "/App.js": AppCode,
            "/Example.js": {
              code: children,
              active: true,
            },
          },
        }}
      >
        <SandpackLayout theme={sandboxEmbedTheme}>
          {withPreview && (
            <SandpackPreview
              showRefreshButton={false}
              showOpenInCodeSandbox={false}
            />
          )}
        </SandpackLayout>
        {showCode && (
          <SandpackLayout theme={sandboxEmbedTheme}>
            <SandpackCodeEditor
              wrapContent={true}
              showTabs={false}
              showNavigator={false}
              showRunButton={false}
              initMode="user-visible"
              showLineNumbers
            />
          </SandpackLayout>
        )}
        <Box
          as="nav"
          css={{
            border: "1px solid $subtle",
            flexGrow: 0,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "$075",
            padding: "$050 $075 $050 $100",
            background: "$gray500",
          }}
        >
          <Box>
            {withPreview && (
              <Button
                css={{
                  alignSelf: "flex-start",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  columnGap: "calc($050/2)",
                }}
                onClick={() => {
                  setShowCode(!showCode);
                }}
              >
                <Icon>
                  <CodeIcon />
                </Icon>
                {showCode ? "Hide" : "Show"} code
              </Button>
            )}
          </Box>
          <Box
            css={{
              alignSelf: "flex-end",
              flex: "1 1 auto",
              display: "flex",
              justifyContent: "flex-end",
              gap: "$100",
              "@sm": {
                display: "none",
              },
            }}
          >
            <OpenInSandboxButton>Open in CodeSandbox</OpenInSandboxButton>
            <CopyCodeButton />
          </Box>
        </Box>
      </SandpackProvider>
    </>
  );
};

export default React.memo(CustomSandpack);
