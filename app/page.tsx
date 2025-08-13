"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, QrCode, Plus, X, Sparkles } from "lucide-react"
import { QRCodeGenerator } from "@/components/qr-code-generator"
import type { QRItem } from "@/types/qr-types"

export default function QRFabraPage() {
	const [items, setItems] = useState<QRItem[]>([
		{
			id: "1",
			text: "QRFabra",
			label: "QR Code 1",
			foregroundColor: "#000000",
			backgroundColor: "#FFFFFF",
		},
	])

	const addItem = () => {
		const newItem: QRItem = {
			id: Date.now().toString(),
			text: "",
			label: `QR Code ${items.length + 1}`,
			foregroundColor: "#000000",
			backgroundColor: "#FFFFFF",
		}
		setItems([...items, newItem])
	}

	const removeItem = (id: string) => {
		if (items.length > 1) {
			setItems(items.filter((item) => item.id !== id))
		}
	}

	const updateItem = (id: string, updates: Partial<QRItem>) => {
		setItems(items.map((item) => (item.id === id ? { ...item, ...updates } : item)))
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
			{/* Header */}
			<header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
				<div className="container mx-auto px-4 py-6">
					<div className="flex items-center gap-3">
						<div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
							<QrCode className="w-6 h-6 text-white" />
						</div>
						<div>
							<h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								QRFabra
							</h1>
							<p className="text-muted-foreground">Gerador moderno de QR Codes</p>
						</div>
					</div>
				</div>
			</header>

			<main className="container mx-auto px-4 py-8">
				<div className="grid lg:grid-cols-2 gap-8">
					{/* Left Panel - Controls */}
					<div className="space-y-6">
						<Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800/70">
							<CardHeader>
								<div className="flex items-center justify-between">
									<div>
										<CardTitle className="flex items-center gap-2">
											<Sparkles className="w-5 h-5 text-blue-600" />
											Seus QR Codes
										</CardTitle>
										<CardDescription>Crie e personalize múltiplos QR codes</CardDescription>
									</div>
									<Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
										{items.length} {items.length === 1 ? "item" : "itens"}
									</Badge>
								</div>
							</CardHeader>
							<CardContent className="space-y-6">
								{items.map((item, index) => (
									<div key={item.id} className="space-y-4 p-4 rounded-lg border bg-gray-50/50 dark:bg-gray-700/50">
										<div className="flex items-center justify-between">
											<Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
												QR Code #{index + 1}
											</Label>
											{items.length > 1 && (
												<Button
													variant="ghost"
													size="sm"
													onClick={() => removeItem(item.id)}
													className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
												>
													<X className="w-4 h-4" />
												</Button>
											)}
										</div>

										<div className="space-y-3">
											<div>
												<Label htmlFor={`label-${item.id}`} className="text-xs text-muted-foreground">
													Nome do QR Code
												</Label>
												<Input
													id={`label-${item.id}`}
													value={item.label}
													onChange={(e) => updateItem(item.id, { label: e.target.value })}
													placeholder="Ex: Site da empresa"
													className="mt-1"
												/>
											</div>

											<div>
												<Label htmlFor={`text-${item.id}`} className="text-xs text-muted-foreground">
													Conteúdo do QR Code
												</Label>
												<Textarea
													id={`text-${item.id}`}
													value={item.text}
													onChange={(e) => updateItem(item.id, { text: e.target.value })}
													placeholder="Digite a URL, texto ou dados para o QR code..."
													className="mt-1 min-h-[80px] resize-none"
												/>
											</div>

											<div className="grid grid-cols-2 gap-3">
												<div>
													<Label htmlFor={`fg-color-${item.id}`} className="text-xs text-muted-foreground">
														Cor do QR Code
													</Label>
													<div className="flex items-center gap-2 mt-1">
														<input
															id={`fg-color-${item.id}`}
															type="color"
															value={item.foregroundColor || "#000000"}
															onChange={(e) => updateItem(item.id, { foregroundColor: e.target.value })}
															className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
														/>
														<Input
															value={item.foregroundColor || "#000000"}
															onChange={(e) => updateItem(item.id, { foregroundColor: e.target.value })}
															placeholder="#000000"
															className="text-xs font-mono"
														/>
													</div>
												</div>

												<div>
													<Label htmlFor={`bg-color-${item.id}`} className="text-xs text-muted-foreground">
														Cor de Fundo
													</Label>
													<div className="flex items-center gap-2 mt-1">
														<input
															id={`bg-color-${item.id}`}
															type="color"
															value={item.backgroundColor || "#FFFFFF"}
															onChange={(e) => updateItem(item.id, { backgroundColor: e.target.value })}
															className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
														/>
														<Input
															value={item.backgroundColor || "#FFFFFF"}
															onChange={(e) => updateItem(item.id, { backgroundColor: e.target.value })}
															placeholder="#FFFFFF"
															className="text-xs font-mono"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}

								<Separator />

								<Button
									onClick={addItem}
									variant="outline"
									className="w-full border-dashed border-2 h-12 text-muted-foreground hover:text-foreground hover:border-solid bg-transparent"
								>
									<Plus className="w-4 h-4 mr-2" />
									Adicionar novo QR Code
								</Button>
							</CardContent>
						</Card>
					</div>

					{/* Right Panel - QR Codes */}
					<div className="space-y-6">
						<Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm dark:bg-gray-800/70">
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Download className="w-5 h-5 text-purple-600" />
									QR Codes Gerados
								</CardTitle>
								<CardDescription>Visualize e baixe seus QR codes em PNG ou SVG</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-6">
									{items.map((item) => (
										<QRCodeGenerator key={item.id} item={item} onUpdate={(updates) => updateItem(item.id, updates)} />
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
		</div>
	)
}
