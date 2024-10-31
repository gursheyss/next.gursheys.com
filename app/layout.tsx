import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Grain } from "@/components/Grain";
import { Vignette } from "@/components/Vignette";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "gursh",
};

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.setProperty('--background', '#ffffff');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.setProperty('--background', '#1a1a1a');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Grain />
          <Vignette />
          {children}
          <div
            className="pointer-events-none absolute top-0 h-full w-full opacity-[2%] blur-[100px] saturate-150 filter"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right,var(--background),#000)",
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
