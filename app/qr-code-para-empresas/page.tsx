import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
	title: "QR Code para Empresas: Soluções Profissionais | QRFabra",
	description:
		"QR codes profissionais para empresas. Aumente vendas, melhore atendimento e conecte-se com clientes usando QR codes personalizados.",
	keywords: "qr code empresas, qr code profissional, qr code marketing, qr code vendas",
	alternates: {
		canonical: "/qr-code-para-empresas",
	},
}

export default function QRCodeParaEmpresasPage() {
	const benefits = [
		{
			icon: TrendingUp,
			title: "Aumente as Vendas",
			description: "Facilite o acesso a produtos, promoções e catálogos digitais",
		},
		{
			icon: Users,
			title: "Melhore o Atendimento",
			description: "Conecte clientes rapidamente a WhatsApp, formulários e suporte",
		},
		{
			icon: Globe,
			title: "Presença Digital",
			description: "Direcione para redes sociais, site e avaliações online",
		},
		{
			icon: Shield,
			title: "Seguro e Confiável",
			description: "QR codes profissionais sem marcas d'água ou limitações",
		},
		{
			icon: Zap,
			title: "Implementação Rápida",
			description: "Crie e implemente em minutos, sem conhecimento técnico",
		},
		{
			icon: Building,
			title: "Para Todos os Negócios",
			description: "Restaurantes, lojas, consultórios, eventos e muito mais",
		},
	]

	const useCases = [
		"Cardápios digitais para restaurantes",
		"Links para WhatsApp Business",
		"Catálogos de produtos online",
		"Formulários de feedback",
		"Redes sociais da empresa",
		"Promoções e cupons",
		"Informações de contato",
		"Avaliações no Google",
	]

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			<div className="container mx-auto px-4 py-16">
				{/* Hero Section */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						QR Code para Empresas
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Transforme seu negócio com QR codes profissionais. Conecte-se com clientes, aumente vendas e modernize sua
						empresa.
					</p>
				</div>

				{/* Benefits Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
					{benefits.map((benefit, index) => (
						<Card key={index} className="border-0 shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800/70">
							<CardHeader>
								<div className="flex items-center gap-3">
									<div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg">
										<benefit.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
									</div>
									<CardTitle className="text-lg">{benefit.title}</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<CardDescription className="text-gray-600 dark:text-gray-300">{benefit.description}</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Use Cases */}
				<Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800/70 mb-16">
					<CardHeader>
						<CardTitle className="text-2xl text-center">Casos de Uso Populares</CardTitle>
						<CardDescription className="text-center text-lg">
							Veja como empresas estão usando QR codes para crescer
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid md:grid-cols-2 gap-4">
							{useCases.map((useCase, index) => (
								<div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50 dark:bg-gray-700/50">
									<div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
									<span className="text-gray-700 dark:text-gray-300">{useCase}</span>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* CTA */}
				<div className="text-center">
					<Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800/70 max-w-2xl mx-auto">
						<CardHeader>
							<CardTitle className="text-2xl">Comece Agora Mesmo</CardTitle>
							<CardDescription className="text-lg">
								Crie QR codes profissionais para sua empresa em minutos. 100% gratuito e sem limitações.
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Button
								asChild
								size="lg"
								className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
							>
								<Link href="/">
									Criar QR Code Profissional
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
