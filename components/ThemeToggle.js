import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import * as React from "react";
import { css, Icon, styled } from "@washingtonpost/wpds-ui-kit";

const hasWindow = () => {
  return typeof window !== "undefined";
};

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [env, setEnv] = useState("");

  useEffect(() => {
    setEnv(hasWindow() ? "browser" : "server");
  }, []);

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };

  const Button = styled("button", {
    appearance: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
    margin: 0,
    border: 0,
    fontSize: "$200"
  });

  const showOnDarkTheme = css({
    display: "none",
    "@dark": {
      display: "block"
    }
  });

  const showOnLightTheme = css({
    display: "none",
    "@light": {
      display: "block"
    }
  });

  return (
    <Button onClick={toggleTheme} aria-label="Switch theme">
      <Icon label="Theme Toggle" size="16">
        <>
          <span className={showOnDarkTheme()}>
            {env === "browser" && resolvedTheme === "light" ? "🌞" : "🌕"}
            {env === "server" && "🌕"}
          </span>
          <span className={showOnLightTheme()}>
            {env === "browser" && resolvedTheme === "light" ? "🌞" : "🌕"}
            {env === "server" && "🌞"}
          </span>
        </>
      </Icon>
    </Button>
  );
};
