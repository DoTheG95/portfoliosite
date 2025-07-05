'use client';
import React from 'react';
import TCGCardFront from "./tcgfront";
import FlipCard from './flipcard';

export default function Hobbies() {

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
        imageSrc:"./travelling.png",
          name:"Travelling",
          description:[
            'Planning ahead',
            'Research',
            'Adaptability '
          ],
          iconSrc:"./globe.svg",
          iconLink:"https://www.instagram.com/wrappergary/"
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
  ]


  return (
    <section className="w-full max-w-screen-xl mx-auto">
      <h4 className="text-2xl font-bold mb-4">Hobbies</h4>
      <div className="border border-white p-4">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-6
            p-6
          "
          >
          {cards.map((c, i) => (
            <div key={i} className="w-full max-w-xs">
              <FlipCard
                front={
                  <TCGCardFront
                    {...c.frontProps}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}