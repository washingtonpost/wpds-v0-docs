import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import * as React from "react";
import { css, Icon } from "@washingtonpost/wpds-ui-kit";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };

  const button = css({
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
    <button
      onClick={toggleTheme}
      aria-label="Switch theme"
      className={button()}
    >
      <Icon label="Theme Toggle" size="16">
        {mounted ? (
          resolvedTheme === "light" ? (
            <>🌞</>
          ) : (
            <>🌕</>
          )
        ) : (
          <>
            <span className={showOnDarkTheme()}>🌕</span>
            <span className={showOnLightTheme()}>🌞</span>
          </>
        )}
      </Icon>
    </button>
  );
};
