'use client';
import React from 'react';
import TCGCardFront from "./tcgfront";
import FlipCard from './flipcard';
import Image from 'next/image';

const cards = [
  {
    backSrc: './tcgback2.svg',
    frontProps: {
      imageSrc: './bouldering.png',
      name: 'Bouldering',
      description: ['Love problem solving', 'Not scared of failing'],
      iconSrc: './globe.svg',
      iconLink: 'https://instagram.com/dotheg_archives/',
    },
  },
  {
    backSrc: './tcgback2.svg',
    frontProps: {
      imageSrc: './travelling.png',
      name: 'Travelling',
      description: ['Time management', 'Adapt to unexpected situations'],
      iconSrc: './globe.svg',
      iconLink: 'https://www.instagram.com/wrappergary/',
    },
  },
  {
    backSrc: './tcgback2.svg',
    frontProps: {
      imageSrc: './photo.png',
      name: 'Photography',
      description: ['Hunger for the optimal result', 'Great attention to detail'],
      iconSrc: './globe.svg',
      iconLink: 'https://www.instagram.com/aussie_short_shoots/',
    },
  },
];

export default function Hobbies() {
  return (
    <div className="hobbies-section">
      <p className="section-label">Outside of work</p>
      <div className="hobbies-grid">
        {cards.map((c, i) => (
          <div key={i} className="w-full max-w-xs mx-auto">
            <FlipCard
              front={<TCGCardFront {...c.frontProps} />}
              back={
                <Image
                  src={c.backSrc}
                  alt="Card Back"
                  className="w-full h-full object-cover rounded-lg"
                  width={200}
                  height={300}
                />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}