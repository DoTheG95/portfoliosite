'use client';
import React, { useRef } from 'react';
import TCGCardFront from "./tcgfront";
import LeftChevron from '@heroicons/react/24/solid/ChevronLeftIcon';
import RightChevron from '@heroicons/react/24/solid/ChevronRightIcon';
import FlipCard from './flipcard';

export default function Hobbies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const cards = [
    {
      backSrc: './tcgback2.svg',
      frontProps: {
        imageSrc: './bouldering.png',
        name: 'Bouldering',
        description: [
          'Problem Solving',
          'Tenacity',
          'Hunger for improvement'
        ],
        iconSrc: './globe.svg',
        iconLink: 'https://instagram.com/dotheg_archives/'
      }
    },
    {
      backSrc: './tcgback2.svg',
      frontProps: {
        imageSrc:"",
          name:"TCG",
          description:[
            'Time management',
            'Resource management',
            'Quick thinking'
          ],
          iconSrc:'./globe.svg',
          iconLink:'https://example.com',
      }
    },
    {
      backSrc: './tcgback2.svg',
      frontProps: {
        imageSrc:"./photo.png",
          name:"Photography",
          description:[
            'Patience',
            'Attention to detail',
            'Understanding of Visual Composition'
          ],
          iconSrc:"./globe.svg",
          iconLink:"https://www.instagram.com/aussie_short_shoots/",
      }
    },
    {
      backSrc: './tcgback2.svg',
      frontProps: {
        imageSrc:"./travelling.png",
          name:"Travelling",
          description:[
            'Planning ahead',
            'Research',
            'Adaptability '
          ],
          iconSrc:"./globe.svg",
          iconLink:"https://example.com"
      }
    },
    {
      backSrc: './tcgback2.svg',
      frontProps: {
          imageSrc:"",
          name:"Gaming",
          description:[
            'Team work',
            'Effective communication',
            'Adjust to a rapidly changing environment'
          ],
          iconSrc:"./globe.svg",
          iconLink:"https://example.com"
      }
    },
  ]


  return (
    <div className="w-full relative">
      <h4 className="text-2xl font-bold mb-4">Hobbies</h4>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full z-10"
        onClick={() => scroll(-300)}
        aria-label="Scroll left"
      >
        <LeftChevron className="w-6 h-6 text-gray-800" />
      </button>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-hidden scroll-smooth pb-4"
      >

        {cards.map((c, i) => (
        <FlipCard
          key={i}
          width={400}
          height={600}
          front={
            <TCGCardFront
              {...c.frontProps}
              width={400}
              height={600}
            />
          }
          back={
            <img
              src={c.backSrc}
              alt="Card Back"
              className="w-full h-full object-cover rounded-lg"
            />
          }
        />
      ))}

      </div>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full z-10"
        onClick={() => scroll(300)}
        aria-label="Scroll right"
      >
        <RightChevron className="w-6 h-6 text-gray-800" />
      </button>

    </div>
  );
}