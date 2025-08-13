import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
	title: "Gerador de QR Code Grátis Online | QRFabra",
	description:
		"Crie QR codes gratuitos online sem limites. Gerador moderno com personalização de cores, múltiplos formatos e download instantâneo.",
	keywords: "gerador qr code gratis, qr code gratuito, criar qr code gratis, gerador qr code online gratis",
	alternates: {
		canonical: "/gerador-qr-code-gratis",
	},
}

export default function GeradorQRCodeGratisPage() {
	redirect("/")
}
