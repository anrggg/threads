import { Slot } from "expo-router";

import { ThemeProvider, DarkTheme } from "@react-navigation/native";

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white", // use this to change the color of nav bar icons
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>
      <Slot />;
    </ThemeProvider>
  );
}
