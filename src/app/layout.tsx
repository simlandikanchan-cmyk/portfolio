import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { MotionProvider } from "@/components/ui/motion-provider"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

const siteUrl = "https://kanchansimlandi.vercel.app"

const description =
  "Portfolio of Kanchan Simlandi — Full-Stack / Backend Developer specializing in Laravel, PHP, MySQL, and System Design."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kanchan Simlandi | Full-Stack Developer",
    template: "%s | Kanchan Simlandi",
  },
  description,
  applicationName: "Kanchan Simlandi Portfolio",
  authors: [{ name: "Kanchan Simlandi", url: siteUrl }],
  creator: "Kanchan Simlandi",
  keywords: [
    "Kanchan Simlandi",
    "Full-Stack Developer",
    "Backend Developer",
    "Laravel Developer",
    "PHP",
    "MySQL",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Kanchan Simlandi",
    title: "Kanchan Simlandi | Full-Stack Developer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanchan Simlandi | Full-Stack Developer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfefa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1f18" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen font-sans antialiased noise-overlay">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
