"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, FileCode } from "lucide-react"
import type { QRItem } from "@/types/qr-types"
import QRCode from "qrcode"

interface QRCodeGeneratorProps {
  item: QRItem
  onUpdate: (updates: Partial<QRItem>) => void
}

const QR_SIZES = [
  { label: "128x128", value: 128 },
  { label: "256x256", value: 256 },
  { label: "512x512", value: 512 },
  { label: "1024x1024", value: 1024 },
]

export function QRCodeGenerator({ item, onUpdate }: QRCodeGeneratorProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("")
  const [qrSvg, setQrSvg] = useState<string>("")
  const [size, setSize] = useState(256)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (item.text.trim()) {
      generateQRCode()
    } else {
      setQrDataUrl("")
      setQrSvg("")
    }
  }, [item.text, item.foregroundColor, item.backgroundColor, size])

  const generateQRCode = async () => {
    try {
      const colorOptions = {
        dark: item.foregroundColor || "#000000",
        light: item.backgroundColor || "#FFFFFF",
      }

      // Generate PNG
      const canvas = canvasRef.current
      if (canvas) {
        await QRCode.toCanvas(canvas, item.text, {
          width: size,
          margin: 2,
          color: colorOptions,
        })
        setQrDataUrl(canvas.toDataURL("image/png"))
      }

      // Generate SVG
      const svgString = await QRCode.toString(item.text, {
        type: "svg",
        width: size,
        margin: 2,
        color: colorOptions,
      })
      setQrSvg(svgString)
    } catch (error) {
      console.error("Erro ao gerar QR code:", error)
    }
  }

  const downloadPNG = () => {
    if (qrDataUrl) {
      const link = document.createElement("a")
      link.download = `${item.label || "qrcode"}-${size}x${size}.png`
      link.href = qrDataUrl
      link.click()
    }
  }

  const downloadSVG = () => {
    if (qrSvg) {
      const blob = new Blob([qrSvg], { type: "image/svg+xml" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.download = `${item.label || "qrcode"}.svg`
      link.href = url
      link.click()
      URL.revokeObjectURL(url)
    }
  }

  return (
    <div className="space-y-4 p-4 rounded-lg border bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-sm">{item.label}</h3>
        {item.text.trim() && (
          <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
            Pronto
          </Badge>
        )}
      </div>

      {item.text.trim() ? (
        <div className="space-y-4">
          {/* QR Code Display */}
          <div className="flex justify-center p-4 bg-white rounded-lg border-2 border-dashed border-gray-200 dark:bg-gray-900 dark:border-gray-600">
            <canvas ref={canvasRef} className="max-w-full h-auto" style={{ imageRendering: "pixelated" }} />
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border border-gray-300"
                style={{ backgroundColor: item.foregroundColor || "#000000" }}
              />
              <span>QR Code</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border border-gray-300"
                style={{ backgroundColor: item.backgroundColor || "#FFFFFF" }}
              />
              <span>Fundo</span>
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">Tamanho</Label>
            <Select value={size.toString()} onValueChange={(value) => setSize(Number.parseInt(value))}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {QR_SIZES.map((sizeOption) => (
                  <SelectItem key={sizeOption.value} value={sizeOption.value.toString()}>
                    {sizeOption.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Download Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              onClick={downloadPNG}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-transparent"
            >
              <ImageIcon className="w-4 h-4" />
              PNG
            </Button>
            <Button
              onClick={downloadSVG}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-transparent"
            >
              <FileCode className="w-4 h-4" />
              SVG
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg border-2 border-dashed border-gray-200 dark:bg-gray-800 dark:border-gray-600">
          <p className="text-sm text-muted-foreground">Digite o conteúdo para gerar o QR code</p>
        </div>
      )}
    </div>
  )
}
