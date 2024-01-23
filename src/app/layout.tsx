import type { Metadata } from "next";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "@/themes/lightTheme";
import StoreProvider from "./providers/StoreProvider";
import ToastProvider from "./providers/ToastProvider";

export const metadata: Metadata = {
  title: "Bandage",
  description: "Next Basket Assessment by Ayomide Oluniyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ToastProvider>
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </ToastProvider>
        </StoreProvider>
      </body>
    </html >
  );
}
