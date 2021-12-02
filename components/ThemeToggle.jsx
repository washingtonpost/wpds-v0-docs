import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import * as React from "react";
import { css, theme } from "@washingtonpost/ui-theme";
import { Icon } from "@washingtonpost/ui-icon";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

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

  return (
    <button
      onClick={toggleTheme}
      aria-label="Switch theme"
      className={button()}
    >
      <Icon label="Theme Toggle" size="16">
        {resolvedTheme === "light" ? <>🌛</> : <>🌒</>}
      </Icon>
    </button>
  );
};
