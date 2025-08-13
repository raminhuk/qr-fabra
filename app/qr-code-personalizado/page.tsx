import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
	title: "QR Code Personalizado com Cores | QRFabra",
	description:
		"Crie QR codes personalizados com suas cores favoritas. Customize fundo e foreground, baixe em PNG ou SVG com qualidade profissional.",
	keywords: "qr code personalizado, qr code colorido, qr code com cores, personalizar qr code",
	alternates: {
		canonical: "/qr-code-personalizado",
	},
}

export default function QRCodePersonalizadoPage() {
	redirect("/")
}
