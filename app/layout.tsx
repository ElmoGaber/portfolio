import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "./providers/theme-provider"
import { LanguageProvider } from "./providers/language-provider"
import ThemeControlsFixed from "./components/theme-controls-fixed"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Momen Tarek - AI & Tech Portfolio",
  description: "Portfolio of Momen Tarek - AI Developer and Innovator in Technology",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Hide any v0 branding */
            [data-v0-t], 
            .v0-badge,
            .v0-watermark,
            [class*="v0"],
            [id*="v0"],
            iframe[src*="v0"],
            div[style*="v0"],
            .built-with-v0 {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              position: absolute !important;
              left: -9999px !important;
              top: -9999px !important;
              width: 0 !important;
              height: 0 !important;
              overflow: hidden !important;
            }
            
            /* Additional v0 badge hiding */
            div[style*="position: fixed"][style*="bottom"][style*="right"],
            div[style*="position: fixed"][style*="bottom"][style*="left"] {
              display: none !important;
            }
            
            /* Hide any floating badges */
            div[style*="z-index: 999"],
            div[style*="z-index: 9999"] {
              display: none !important;
            }
          `,
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider>
            {children}
            <ThemeControlsFixed />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
