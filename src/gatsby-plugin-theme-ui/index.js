import codeTheme from "@theme-ui/prism/presets/night-owl-light.json";
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#FFFFFF",
    muted: "#8b87ea",
    primary: "#f056c7",
    secondary: "#c39eff",
    error: "#ff4343",
    success: "#58e6d9",
    background: "#131127",
    surface: "#232140",
  },
  styles: {
    ...baseTheme.styles,
    p: {
      code: {
        ...baseTheme.styles.p.code,
        color: "inherit"
      }
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme
    }
  }
};
