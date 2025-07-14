'use client'
import React, { ReactNode, useState } from 'react'

interface FlipCardProps {
    front: ReactNode
    back: ReactNode
    width?: number
    height?: number
}

export default function FlipCard({
    front,
    back,
    width = 300,
    height = 550
}: FlipCardProps) {

  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group perspective"
      style={{ width, height, cursor: 'pointer' }}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
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