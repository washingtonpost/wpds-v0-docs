import React, { useState, useEffect } from "react";
import { styled, Icon, theme } from "@washingtonpost/wpds-ui-kit";
const Button = styled("button", {
  backgroundColor: "transparent",
  borderStyle: "none",
  cursor: "pointer",
  "&hover": {
    opacity: 0.75,
  },
});
const Span = styled("span", {
  margin: "0 $025",
});
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
const CopyCodeButton = ({ css, children, textToCopy }) => {
  const [copied, setCopied] = useState(false);

  // set the copied state to false after a second
  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000);
    }
  }, [copied]);
  return (
    <Button
      css={{
        ...css,
        alignSelf: "flex-start",
        display: "flex",
      }}
      onClick={() => {
        // copy code to clipboard
        navigator.clipboard.writeText(`${textToCopy ? textToCopy : children}`);
        setCopied(true);
      }}
      aria-label="Copy code to clipboard"
    >
      {children}
      <Span>|</Span>
      <Icon size="16">
        <ClipboardIcon />
      </Icon>
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
};

export default CopyCodeButton;
