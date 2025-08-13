import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode, Sparkles, Download, Palette, Zap, Shield } from "lucide-react"

export const metadata: Metadata = {
	title: "Sobre o QRFabra - Gerador Moderno de QR Code",
	description:
		"Conheça o QRFabra, o gerador de QR code mais moderno e fácil de usar. Criado para simplificar a geração de QR codes personalizados.",
	alternates: {
		canonical: "/about",
	},
}

export default function AboutPage() {
	const features = [
		{
			icon: QrCode,
			title: "Múltiplos QR Codes",
			description: "Crie vários QR codes simultaneamente em uma única sessão",
		},
		{
			icon: Palette,
			title: "Personalização Completa",
			description: "Customize cores do QR code e fundo com seletores visuais",
		},
		{
			icon: Download,
			title: "Download Flexível",
			description: "Baixe em PNG ou SVG com tamanhos de 128px até 1024px",
		},
		{
			icon: Zap,
			title: "Interface Moderna",
			description: "Design responsivo e intuitivo para todos os dispositivos",
		},
		{
			icon: Shield,
			title: "100% Gratuito",
			description: "Sem limites, sem cadastro, sem marcas d'água",
		},
		{
			icon: Sparkles,
			title: "Tecnologia Avançada",
			description: "Construído com Next.js 15 e as melhores práticas",
		},
	]

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			<div className="container mx-auto px-4 py-16">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<div className="flex items-center justify-center mb-6">
						<div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl">
							<QrCode className="w-10 h-10 text-white" />
						</div>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Sobre o QRFabra
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						O QRFabra é um gerador moderno e gratuito de QR codes, criado para simplificar a criação de códigos QR
						personalizados com a melhor experiência do usuário.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="border-0 shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800/70 hover:shadow-xl transition-shadow"
						>
							<CardHeader>
								<div className="flex items-center gap-3">
									<div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg">
										<feature.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
									</div>
									<CardTitle className="text-lg">{feature.title}</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-600 dark:text-gray-300">{feature.description}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Mission Section */}
				<Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800/70 mb-16">
					<CardHeader>
						<CardTitle className="text-2xl text-center">Nossa Missão</CardTitle>
					</CardHeader>
					<CardContent className="text-center">
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
							Democratizar a criação de QR codes, oferecendo uma ferramenta moderna, intuitiva e completamente gratuita.
							Acreditamos que todos devem ter acesso a tecnologias de qualidade sem barreiras ou limitações.
						</p>
					</CardContent>
				</Card>

				{/* Technology Section */}
				<Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800/70">
					<CardHeader>
						<CardTitle className="text-2xl text-center">Tecnologia</CardTitle>
					</CardHeader>
					<CardContent className="text-center">
						<p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
							Desenvolvido com as mais modernas tecnologias web para garantir performance, segurança e a melhor
							experiência do usuário.
						</p>
						<div className="flex flex-wrap justify-center gap-3">
							{["Next.js 15", "React", "TypeScript", "Tailwind CSS", "QRCode.js"].map((tech) => (
								<span
									key={tech}
									className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
								>
									{tech}
								</span>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
