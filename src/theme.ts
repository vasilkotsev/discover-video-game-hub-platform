import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#eceff8",
      100: "#c9cfe6",
      200: "#a4aed5",
      300: "#808ec7",
      400: "#5c6eb9",
      500: "#4455a0",
      600: "#35427b",
      700: "#262f58",
      800: "#161c34",
      900: "#070913",
    },
  },
});

export default theme;
