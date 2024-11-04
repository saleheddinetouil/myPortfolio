import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { FloatingNav, Loader } from "@/components/index";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_CURRENT_SITE_URL as string), // Make sure this environment variable is set
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Saleh Eddine Touil | Cybersecurity Enthusiast & Web Developer",
    description:
      "I'm Saleh Eddine Touil, a cybersecurity enthusiast and web developer. I specialize in penetration testing, web development, and exploring various technologies like Go, Bash Scripting, and Linux.",
    images: [
      {
        url: "/og.webp", // Replace with your actual OG image path
        alt: "Saleh Eddine Touil | Cybersecurity Enthusiast & Web Developer",
      },
    ],
  },
  title: "Saleh Eddine Touil | Cybersecurity Enthusiast & Web Developer",
  description:
    "I'm Saleh Eddine Touil, a cybersecurity enthusiast and web developer. I specialize in penetration testing, web development, and exploring various technologies like Go, Bash Scripting, and Linux.",
  keywords:
    "Saleh Eddine Touil, Cybersecurity, Penetration Testing, Web Development, MERN, Python, PHP, MySQL, HTML, CSS, JavaScript, Go, Bash Scripting, Linux, Malware Analysis, Computer Forensics, Machine Learning",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export const revalidate = Number(process.env.REVALIDATE_INTERVAL) || 600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Or "light" depending on your preference
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden"> {/* Adjust styling as needed */}
            <Suspense fallback={<Loader />}>{children}</Suspense>
            <FloatingNav />
          </main>
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID as string} />
        <SpeedInsights />
      </body>
    </html>
  );
}