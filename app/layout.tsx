import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Grain } from '@/components/Grain'
import { Vignette } from '@/components/Vignette'
import Header from '@/components/Header'
import Script from 'next/script'
import { Sparkles } from '@/components/Sparkles'
import { SnowfallEffect } from '@/components/SnowfallEffect'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'gursh'
}

export const experimental_ppr = true

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <Script id="neko-config" strategy="beforeInteractive">
          {`window.NekoType="rose"`}
        </Script>
        <Script
          src="https://webneko.net/n20171213.js"
          strategy="afterInteractive"
        />
        <SpeedInsights />
        <Analytics />
        <Sparkles />
        <SnowfallEffect />
        <div className="flex flex-1 flex-col">
          <Header />
          {children}
        </div>
        <Grain />
        <Vignette />
        <div
          className="pointer-events-none fixed top-0 h-full w-full opacity-[2%] blur-[100px] saturate-150 filter"
          style={{
            backgroundImage:
              'radial-gradient(at 27% 37%,#3a8bfd 0,transparent 0),radial-gradient(at 97% 21%,#72fe7d 0,transparent 50%),radial-gradient(at 52% 99%,#fd3a4e 0,transparent 50%),radial-gradient(at 10% 29%,#855afc 0,transparent 50%),radial-gradient(at 97% 96%,#e4c795 0,transparent 50%),radial-gradient(at 33% 50%,#8ca8e8 0,transparent 50%),radial-gradient(at 79% 53%,#eea5ba 0,transparent 50%)'
          }}
        />
      </body>
    </html>
  )
}
