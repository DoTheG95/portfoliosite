import React from 'react'

export interface TCGCardFrontProps {
  imageSrc: string
  name: string
  description: string[]
  iconSrc?: string
  iconLink?: string
  width?: number
  height?: number
}

export default function TCGCardFront({
  imageSrc,
  name,
  description,
  iconSrc,
  iconLink,
  width = 400,
  height = 600
}: TCGCardFrontProps) {
  const padding = 10
  // Image covers 75% of the card height
  const imageHeight = (height - padding * 2) * 0.75
  const imageY = padding

  const spacing = 12
  const titleY = imageY + imageHeight + spacing
  const titleHeight = 40
  const descY = titleY + titleHeight + spacing
  // Increase description area accordingly
  const descHeight = height - descY - padding

  const descLines = description.slice(0, 3)

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
    >
      {/* Base card */}
      <rect
        x={0} y={0}
        width={width} height={height}
        rx={20} ry={20}
        fill="#ffffff"
      />

      {/* Image area (75%) */}
      <defs>
        <clipPath id="cardImageClip">
          <rect x={padding} y={imageY} width={width - padding * 2} height={imageHeight} />
        </clipPath>
      </defs>
      <image
        href={imageSrc}
        x={padding}
        y={imageY}
        width={width - padding * 2}
        height={imageHeight}
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#cardImageClip)"
      />

      {/* Globe icon */}
      {iconSrc && (
        <a href={iconLink} target="_blank" rel="noopener noreferrer">
          <image
            href={iconSrc}
            x={padding + 8}
            y={imageY + 8}
            width={24}
            height={24}
          />
        </a>
      )}

      {/* Title box */}
      <rect
        x={padding}
        y={titleY}
        width={width - padding * 2}
        height={titleHeight}
        rx={8} ry={8}
        fill="#0a0a0a"
      />
      <text
        x={width / 2}
        y={titleY + titleHeight / 2}
        fill="#ffffff"
        fontFamily="monospace"
        fontSize={24}
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {name}
      </text>

      {/* Description box */}
      <rect
        x={padding}
        y={descY}
        width={width - padding * 2}
        height={descHeight}
        rx={8} ry={8}
        fill="#0a0a0a"
      />
      {descLines.map((line, i) => (
        <text
          key={i}
          x={width / 2}
          y={descY + 20 + i * 20}
          fill="#ffffff"
          fontFamily="monospace"
          fontSize={14}
          textAnchor="middle"
        >
          {line}
        </text>
      ))}
    </svg>
  )
}
