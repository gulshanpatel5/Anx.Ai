import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Anx.ai",
  description: "Test you skills",
};

export default function RootLayout({ children }) {
  return (

    <ClerkProvider appearance={{
        baseTheme: dark,
      }} >
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            
          





          {/* headers */}
          <Header />
        <main className="min-h-screen">{children}</main>
          
          
          

          {/* footer */}
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center">
              <p>Made with❣️by Gulshan Patel</p>
            </div>
            
          </footer>
          
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
