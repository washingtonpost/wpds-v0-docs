import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import * as React from "react";
import { css } from "@washingtonpost/ui-theme";
import { Icon } from "@washingtonpost/ui-icon";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };

  const button = css({
    position: "absolute",
    top: "$50",
    right: "$100",
    appearance: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
    margin: 0,
    border: 0,
    fontSize: "$200"
  });

  return (
    <button
      onClick={toggleTheme}
      aria-label="Switch theme"
      className={button()}
    >
      <Icon label="Theme Toggle" size="16">
        {mounted ? resolvedTheme === "light" ? <>🌛</> : <>🌒</> : <>🥮</>}
      </Icon>
    </button>
  );
};
