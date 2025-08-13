import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, QrCode, Palette, Download } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Como Criar QR Code: Guia Completo Passo a Passo | QRFabra",
	description:
		"Aprenda como criar QR codes facilmente. Guia completo com dicas, melhores práticas e tutorial passo a passo para criar QR codes profissionais.",
	keywords: "como criar qr code, tutorial qr code, passo a passo qr code, guia qr code",
	alternates: {
		canonical: "/como-criar-qr-code",
	},
}

export default function ComocriarQRCodePage() {
	const steps = [
		{
			icon: QrCode,
			title: "1. Defina o Conteúdo",
			description: "Digite a URL, texto ou dados que você quer transformar em QR code",
		},
		{
			icon: Palette,
			title: "2. Personalize as Cores",
			description: "Escolha as cores do QR code e do fundo para combinar com sua marca",
		},
		{
			icon: Download,
			title: "3. Baixe seu QR Code",
			description: "Selecione o formato (PNG ou SVG) e o tamanho desejado",
		},
	]

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			<div className="container mx-auto px-4 py-16">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Como Criar QR Code
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Aprenda a criar QR codes profissionais em 3 passos simples com o QRFabra
					</p>
				</div>

				{/* Steps */}
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{steps.map((step, index) => (
						<Card
							key={index}
							className="border-0 shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800/70 text-center"
						>
							<CardHeader>
								<div className="flex items-center justify-center mb-4">
									<div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl">
										<step.icon className="w-8 h-8 text-white" />
									</div>
								</div>
								<CardTitle className="text-xl">{step.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-600 dark:text-gray-300 text-base">
									{step.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>

				{/* CTA */}
				<div className="text-center">
					<Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800/70 max-w-2xl mx-auto">
						<CardHeader>
							<CardTitle className="text-2xl">Pronto para Começar?</CardTitle>
							<CardDescription className="text-lg">
								Crie seu primeiro QR code agora mesmo, é grátis e sem limites!
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Button
								asChild
								size="lg"
								className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
							>
								<Link href="/">
									Criar QR Code Agora
									<ArrowRight className="w-4 h-4 ml-2" />
								</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
