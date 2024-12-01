import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
});

export const metadata = {
  title: "Fleet Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </Providers>
    </html>
  );
}
