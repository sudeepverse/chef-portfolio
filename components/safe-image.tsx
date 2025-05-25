"use client"

import { useState } from "react"

interface SafeImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
}

export function SafeImage({
  src,
  alt,
  className,
  fallbackSrc = "/placeholder.svg?height=600&width=400",
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return <img src={imgSrc || "/placeholder.svg"} alt={alt} className={className} onError={handleError} />
}
