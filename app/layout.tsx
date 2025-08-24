import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
	title: "QRFabra - Gerador Gratuito de QR Code Online | Criar QR Code Personalizado",
	description:
		"Crie QR codes gratuitos e personalizados online. Baixe em PNG ou SVG com cores customizáveis. Gerador moderno e fácil de usar para empresas e uso pessoal.",
	keywords:
		"gerador qr code, qr code gratis, criar qr code, qr code personalizado, gerador qr code online, qr code png, qr code svg, qr code colorido",
	authors: [{ name: "QRFabra", url: "https://github.com/raminhuk" }],
	creator: "QRFabra",
	publisher: "QRFabra",
	robots: "index, follow",
	openGraph: {
		title: "QRFabra - Gerador Gratuito de QR Code Online",
		description: "Crie QR codes gratuitos e personalizados online. Baixe em PNG ou SVG com cores customizáveis.",
		type: "website",
		locale: "pt_BR",
		siteName: "QRFabra",
	},
	twitter: {
		card: "summary_large_image",
		title: "QRFabra - Gerador Gratuito de QR Code Online",
		description: "Crie QR codes gratuitos e personalizados online. Baixe em PNG ou SVG com cores customizáveis.",
	},
	alternates: {
		canonical: "/",
	},
	generator: 'fabra.dev - QRFabra',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
			<head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#3b82f6" />
			</head>
			<body className="font-sans">
				<Navigation />
				{children}
				<Footer />
			</body>
			<GoogleAnalytics gaId="G-JZX0QEME53" />
		</html>
	)
}
