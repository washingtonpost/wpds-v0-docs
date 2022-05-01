import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import * as React from "react";
import * as Kit from "@washingtonpost/wpds-ui-kit";
import * as Assets from "@washingtonpost/wpds-assets/asset";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  useActiveCode,
} from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import Head from "next/head";
import LZString from "lz-string";

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

const sandboxGlobalcss = Kit.globalCss({
  ".sp-preview-iframe": {
    background: Kit.theme.colors.gray500,
    border: 0,
    width: "100%",
  },
  ".sp-layout": {
    borderColor: "transparent",
    borderBottomLeftRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
    background: "$secondary !important",
  },

  ".sp-code-editor": {
    py: "var(--sp-space-2)",
    background: "$secondary",
    width: "50vw",
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
  },

  ".sp-wrapper": {
    "--sp-colors-fg-active": "#1f2933",
    "--sp-colors-fg-default": "#757678",
    "--sp-colors-fg-inactive": "#e4e7eb",
    "--sp-colors-bg-active": "#e4e7eb",
    "--sp-colors-bg-default": "#f8f9fb",
    "--sp-colors-bg-default-overlay": "rgba(248,249,251,0.8117647058823529)",
    "--sp-colors-bg-input": "#fff",
    "--sp-colors-accent": "#64d2ff",
    "--sp-colors-bg-error": "#ffcdca",
    "--sp-colors-fg-error": "#811e18",
    "--sp-layout-height": "300px",
    "--sp-font-size": "14px",
    "--sp-font-body":
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    "--sp-font-mono":
      '"Fira Mono","DejaVu Sans Mono",Menlo,Consolas,"Liberation Mono",Monaco,"Lucida Console",monospace',
    "--sp-space-1": "4px",
    "--sp-space-2": "8px",
    "--sp-space-3": "12px",
    "--sp-space-4": "16px",
    "--sp-space-5": "20px",
    "--sp-space-6": "24px",
    "--sp-space-7": "28px",
    "--sp-space-8": "32px",
    "--sp-border-radius": "4px",
    background: "$secondary",
    fontSize: "var(--sp-font-size)",
    fontFamily: "var(--sp-font-body)",
    display: "block",
    boxSizing: "border-box",
    textRendering: "optimizeLegibility",
    WebkitTapHighlightColor: "transparent",
    WebkitFontSmoothing: "subpixel-antialiased",
  },
});

const Canvas = Kit.styled("div", {
  color: "$accessible",
  padding: "$100",
  margin: "0 auto",
  overflow: "hidden",
  position: "relative",
  transition: "all 0.5s ease-in-out",

  "& > div": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  variants: {
    hasEditor: {
      true: {
        "& > div": {
          width: "100%",
        },
      },
      false: {
        "& > div": {
          width: "100vw",
          height: "100vh",
        },
      },
    },
  },
});

const components = {
  Kit,
  Assets,
  ...Kit,
  ...Assets,
};

export default function Playroom({ source, code: thisCode, hasEditor }) {
  const [receivedSource, setSource] = React.useState(source);
  const [editorMode, setEditorMode] = React.useState(hasEditor);
  const [code, setCode] = React.useState(thisCode);
  const { resolvedTheme } = useTheme();
  const [sandboxEmbedTheme, setSandboxEmbedTheme] = React.useState(lightTheme);

  const Preview = () => {
    const { code: thatCode, updateCode } = useActiveCode();
    const [firstRenderCode, setFirstRenderCode] = React.useState(null);
    const iframeRef = React.useRef(null);

    React.useEffect(() => {
      hasEditor && setFirstRenderCode(thatCode);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
      if (hasEditor && iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(thatCode, "*");
      }
    }, [iframeRef, thatCode]);

    if (hasEditor) {
      return (
        <Kit.Box
          ref={iframeRef}
          as="iframe"
          sandbox="allow-scripts allow-same-origin"
          src={`/playroom?code=${LZString.compressToEncodedURIComponent(
            firstRenderCode
          )}`}
          css={{
            background: Kit.theme.colors.gray500,
            border: 0,
            width: "100%",
            minHeight: 300,
            overflow: "hidden",
          }}
        />
      );
    }

    return (
      <MDXRemote
        {...receivedSource}
        scope={{
          ...Kit,
          ...Assets,
          useState: React.useState,
          useEffect: React.useEffect,
        }}
        components={components}
        lazy
      />
    );
  };

  sandboxGlobalcss();

  React.useEffect(() => {
    if (resolvedTheme === "dark") {
      setSandboxEmbedTheme(darkTheme);
    } else {
      setSandboxEmbedTheme(lightTheme);
    }
  }, [resolvedTheme]);

  // listen for message from parent window
  React.useEffect(() => {
    const handleMessage = async (event) => {
      if (
        event.isTrusted === false &&
        event.origin === window.location.origin
      ) {
        return;
      }
      try {
        const mdxSource = await serialize(event.data, {
          scope: {
            ...Kit,
            ...Assets,
            useState: React.useState,
            useEffect: React.useEffect,
          },
          mdxOptions: {
            format: "mdx",
          },
        });

        setSource(mdxSource);
        setCode(event.data);
      } catch (error) {
        console.log(error);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <Kit.Box
      css={{
        display: "flex",
        height: "100vh",
        background: "$gray500",
      }}
    >
      <Head>
        <title>WPDS - Playroom</title>
      </Head>
      <SandpackProvider
        template="react"
        customSetup={{
          files: {
            "/App.js": {
              code,
              active: true,
            },
          },
        }}
      >
        <Canvas hasEditor={hasEditor}>
          <Preview />
        </Canvas>
        <SandpackLayout theme={sandboxEmbedTheme}>
          {hasEditor && (
            <SandpackCodeEditor
              showLineNumbers
              customStyle={{
                border: "1px solid var(--wpds-colors-subtle)",
              }}
            />
          )}
        </SandpackLayout>
      </SandpackProvider>
    </Kit.Box>
  );
}

Playroom.getLayout = (page) => page;

export async function getServerSideProps(req) {
  const {
    query: { code, edit },
  } = req;

  // guide=warning
  // guide=error
  // guide=information
  // guide=success

  let source;
  let parsedCode;

  try {
    parsedCode = LZString.decompressFromEncodedURIComponent(code);
    source = await serialize(parsedCode, {
      scope: {
        ...Kit,
        ...Assets,
        useState: React.useState,
        useEffect: React.useEffect,
      },
      mdxOptions: {
        format: "mdx",
      },
    });
  } catch (error) {
    console.error(error);
  }

  const hasEditor = edit === "true" || edit === true || edit === "1";

  return {
    props: {
      source,
      code: parsedCode,
      hasEditor,
    },
  };
}
