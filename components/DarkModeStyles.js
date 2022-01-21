import { darkTheme, globalCss, theme } from "@washingtonpost/wpds-ui-kit";

export const darkModeStyles = globalCss({
  "@dark": {
    ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
      const currentColor = darkTheme.colors[currentColorKey];
      const currentColorValue =
        currentColor.value.substring(0, 1) === "$"
          ? `$colors${currentColor.value}`
          : currentColor.value;

      return {
        [currentColor.variable]: currentColorValue,
        ...varSet,
      };
    }, {}),
  },
  body: {
    background: theme.colors.secondary,
  },
});
