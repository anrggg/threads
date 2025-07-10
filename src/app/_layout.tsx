import "../../global.css";

import { Slot } from "expo-router";

import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { AuthProvider } from "@/providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white", // use this to change the color of nav bar icons
    card: "#101010", // use this to change the color of background
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
