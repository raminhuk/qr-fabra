import Link from "next/link"
import { Github, QrCode } from "lucide-react"

export function Footer() {
	return (
		<footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 mt-16">
			<div className="container mx-auto px-4 py-8">
				<div className="grid md:grid-cols-3 gap-8">
					{/* Logo e Descrição */}
					<div className="space-y-4">
						<div className="flex items-center gap-3">
							<div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
								<QrCode className="w-4 h-4 text-white" />
							</div>
							<span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								QRFabra
							</span>
						</div>
						<p className="text-sm text-gray-600 dark:text-gray-400">
							Gerador moderno e gratuito de QR codes com personalização completa. Crie, customize e baixe seus QR codes
							em segundos.
						</p>
					</div>

					{/* Links Úteis */}
					<div className="space-y-4">
						<h3 className="font-semibold text-gray-900 dark:text-gray-100">Links Úteis</h3>
						<div className="flex flex-col space-y-2">
							<Link
								href="/gerador-qr-code-gratis"
								className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
							>
								Gerador Gratuito
							</Link>
							<Link
								href="/qr-code-personalizado"
								className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
							>
								QR Code Personalizado
							</Link>
							<Link
								href="/como-criar-qr-code"
								className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
							>
								Como Criar QR Code
							</Link>
							<Link
								href="/qr-code-para-empresas"
								className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
							>
								QR Code para Empresas
							</Link>
						</div>
					</div>

					{/* Criador */}
					<div className="space-y-4">
						<h3 className="font-semibold text-gray-900 dark:text-gray-100">Criador</h3>
						<div className="flex items-center gap-2">
							<Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
							<Link
								href="https://github.com/raminhuk"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
							>
								@raminhuk
							</Link>
						</div>
					</div>
				</div>

				<div className="border-t mt-8 pt-6 text-center">
					<p className="text-sm text-gray-600 dark:text-gray-400">© 2025 QRFabra. Todos os direitos reservados.</p>
				</div>
			</div>
		</footer>
	)
}
