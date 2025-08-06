import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import FloatingShapes from "@/components/floating-shapes";
import Header from "@/components/header";44
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";



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

          <ClerkProvider appearance={{
            baseTheme: shadesOfPurple,
          }}>

          <ConvexClientProvider>
            {/* This is where Convex client is provided to the app */}
          <Header />

          <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
            <FloatingShapes />
            <Toaster richColors />
            {children}</main>

          </ ConvexClientProvider>
          </ ClerkProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
