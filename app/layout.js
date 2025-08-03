import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pexel",
  description: "Ai image Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
            <Toaster richColors />
            {children}</main>

        </ThemeProvider>

      </body>
    </html>
  );
}
