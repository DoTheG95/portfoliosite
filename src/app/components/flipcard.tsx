'use client'
import React, { ReactNode } from 'react'

interface FlipCardProps {
    front: ReactNode
    back: ReactNode
    width?: number
    height?: number
}

export default function FlipCard({
    front,
    back,
    width = 400,
    height = 600
}: FlipCardProps) {
  return (
    <div
      className="group perspective"
      style={{ width, height }}
    >
      <div
        className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180"
      >
        <div className="absolute inset-0 backface-hidden">
          {back}
        </div>
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          {front}
        </div>
      </div>
    </div>
  )
}