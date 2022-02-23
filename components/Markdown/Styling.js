/**IMPORTS AND MAPS COMPONENTS TO ALL ELEMENTS IN MARKDOWN FILES
 * FOR STYLING. AS WELL COMMONLY USED COMPONENTS. FOR UNIQUE COMPONENTS
 * NEEDED IMPORT THEM VIA THE COMPONENTS PASSED ON THE SPECIFIC [SLUG].JS FILE
 */
import Header from "./Components/headers";
import CustomLink from "./Components/link";
import { styled, theme, Box, Button } from "@washingtonpost/wpds-ui-kit";
import * as AlertBanner from "@washingtonpost/wpds-alert-banner";
import { List, ListItem } from "~/components/Markdown/Components/list";
import dynamic from "next/dynamic";
import Sandbox from "./Components/Sandbox";
import { InputCheckbox } from "./Components/Checkbox";
import { Grid, Cell } from "./Components/Grid";

const HR = styled("hr", {
  borderStyle: "none",
  backgroundColor: "$subtle",
  height: "1px",
  width: "100%",
  margin: "$100 0",
});

export const P = styled("p", {
  fontSize: "$100",
  paddingBottom: "$050",
  color: theme.colors.accessible,
  fontFamily: "$meta",
  fontWeight: "$light",
});

export const Small = styled("small", {
  fontSize: "$075",
  paddingBottom: "$050",
  color: theme.colors.accessible,
  fontFamily: "$meta",
  fontWeight: "$light",
});

export const BR = styled("div", {
  paddingBottom: "$125",
  variants: {
    size: {
      xl: { paddingBottom: "$225" },
    },
  },
});

export const Change = styled("div", {
  border: "1px solid currentColor",
  borderRadius: "$025",
  borderRadius: "$025",
  color: "$accessible",
  cursor: "pointer",
  display: "inline-block",
  fontFamily: "$meta",
  fontSize: "$100",
  fontWeight: "$light",
  lineHeight: "auto",
  px: "$050",

  variants: {
    type: {
      Draft: {
        fontSize: "$075",
        color: "$accessible",
        backgroundColor: "$orange300",
        borderColor: "$warning",
      },
      ComingSoon: {
        fontSize: "$075",
        color: "$accessible",
        backgroundColor: "$gray400",
        borderColor: "$gray400",
      },
    },
  },
});

const components = {
  a: ({ children, href }) => (
    <CustomLink href={href} useSignal>
      {children}
    </CustomLink>
  ),
  ul: List,
  ol: ({ children }) => <List as="ol">{children}</List>,
  li: ListItem,
  p: P,
  Change: Change,
  h1: ({ children }) => <Header as="h1">{children}</Header>,
  h2: ({ children }) => (
    <Header id={children} css={{ paddingBottom: "$100" }} as="h2">
      {children}
    </Header>
  ),
  h3: ({ children }) => (
    <Header id={children} as="h3">
      {children}
    </Header>
  ),
  h4: ({ children }) => (
    <Header id={children} as="h4">
      {children}
    </Header>
  ),
  hr: HR,
  BR: BR,
  Button: Button,
  Alert: ({ variant, dismissable, css, children }) => (
    <AlertBanner.Root dismissable={dismissable} variant={variant}>
      <AlertBanner.Trigger />
      <AlertBanner.Content css={css}>{children}</AlertBanner.Content>
    </AlertBanner.Root>
  ),
  AlertBanner: AlertBanner,
  Grid: ({ maxSize, css, children }) => (
    <Grid css={css} maxSize={maxSize}>
      {children}
    </Grid>
  ),
  Cell: ({ children }) => <Cell>{children}</Cell>,
  CopyClipboard: dynamic(() => import("./Components/CopyToClipBoard")),
  IconSamples: dynamic(() => import("../Markdown/Examples/IconSamples")),
  LogoSamples: dynamic(() => import("../Markdown/Examples/LogoSamples")),
  Table: dynamic(() => import("./Components/table")),
  Img: dynamic(() => import("./Components/InlineImage")),
  TableOfContents: dynamic(() => import("./Components/tableofcontents")),
  Container: dynamic(() => import("./Components/container")),
  GuideContainer: dynamic(() => import("./Components/GuideContainer")),
  InlineSVG: dynamic(() => import("./Components/inlineSVG")),
  InlineImage: dynamic(() => import("./Components/InlineImage")),
  Box: Box,
  pre: ({ children }) => (
    <Box
      as="pre"
      css={{
        overflowX: "auto",
        backgroundColor: theme.colors.gray500,
      }}
    >
      {children}
    </Box>
  ),
  code: ({ children, ...props }) => {
    if (props.className === "language-jsx") {
      return (
        <Box
          as="code"
          css={{
            marginBottom: "$100",
            maxWidth: "100%",
            width: "100%",
          }}
        >
          <Sandbox withPreview={children.includes("// preview")}>
            {
              // remove the preview comment from the code and the line break
              children.includes("// preview")
                ? children.replace("// preview", "").replace("\n", "").trim()
                : children.trim()
            }
          </Sandbox>
        </Box>
      );
    }

    return (
      <Box
        as="code"
        css={{
          color: "$onSecondary",
          fontSize: "$100",
          marginBottom: "$050",
          marginTop: "$050",
          display: "block",
        }}
      >
        {children}
      </Box>
    );
  },
  input: ({ children, type, ...props }) => {
    if (type === "checkbox") {
      return <InputCheckbox {...props} />;
    }

    return <input {...props} />;
  },
};

export default components;
