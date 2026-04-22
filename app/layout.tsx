import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers"
import { FloatingWhatsapp } from "@/components/ui/floating-whatsapp"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
    title: "Kael Agency - Más Reservas para tu Finca o Glamping en el Huila",
    description: "Ayudamos a negocios turísticos en San Agustín, Rivera y la Tatacoa a conseguir más clientes directos por WhatsApp sin comisiones.",
    icons: {
        icon: "/Kael-logo.webp",
    },
    verification: {
    google: "uHsBGpDyhin8TgY0aX-2h-f0gac9utg2G9lNRGeD6dU",
  },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" className={`${inter.variable} ${geistMono.variable} light`}>
            <body className="antialiased font-sans">
                <Providers>
                    {children}
                    <FloatingWhatsapp />
                </Providers>
                <Analytics />
            </body>
        </html>
    )
}
