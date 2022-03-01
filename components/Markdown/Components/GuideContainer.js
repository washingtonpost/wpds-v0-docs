import React from "react";
import { Icon, styled, theme, Box } from "@washingtonpost/wpds-ui-kit";
import Success from "@washingtonpost/wpds-assets/asset/success";
import Warning from "@washingtonpost/wpds-assets/asset/warning";
import Info from "@washingtonpost/wpds-assets/asset/info";
import Error from "@washingtonpost/wpds-assets/asset/error";

const Div = styled("div", {
  width: "100%",
  padding: "$075 $075 $275",
  backgroundColor: "$gray500",
  color: theme.colors.accessible,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const MessageContainer = styled("div", {
  width: "100%",
});

const Message = styled("article", {
  height: "$200",
  padding: "$075 0",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const Rule = styled("hr", {
  borderStyle: "solid",
  borderWidth: "1px",
  marginLeft: "$075",
  width: "100%",
  color: "transparent",

  variants: {
    variant: {
      success: {
        borderColor: "$success",
      },
      warning: {
        borderColor: "$warning",
      },
      error: {
        borderColor: "$error",
      },
      signal: {
        borderColor: "$signal",
      },
    },
  },
});

const Assets = {
  success: Success,
  warning: Warning,
  signal: Info,
  error: Error,
};

export default function GuideContainer({ css, variant, children }) {
  const Asset = Assets[variant];

  return (
    <Div>
      {variant && (
        <MessageContainer>
          <Message>
            <Icon size="32">
              <Asset fill={theme.colors[variant]} />
            </Icon>
            <Rule variant={variant} />
          </Message>
        </MessageContainer>
      )}
      {children}
    </Div>
  );
}
