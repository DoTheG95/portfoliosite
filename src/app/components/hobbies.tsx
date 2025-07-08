'use client';
import React from 'react';
import TCGCardFront from "./tcgfront";
import FlipCard from './flipcard';
import Image from 'next/image';

export default function Hobbies() {

  const cards = [
    {
      backSrc: './tcgback2.svg',
      frontProps: {
        imageSrc: './bouldering.png',
        name: 'Bouldering',
        description: [
          'Effective problem solving',
          'Tenacity to never give up and try again',
          'Determination to complete the task'
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
            'Time mangement',
            'Organisation of resources',
            'Adapt to unexpected situations'
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
            'Patience for optimal results',
            'Great attention to detail',
            'Captivate audience visually'
          ],
          iconSrc:"./globe.svg",
          iconLink:"https://www.instagram.com/aussie_short_shoots/",
      }
    },
  ]


  return (
    <section className="w-full max-w-screen-xl mx-auto">
      <h4 className="text-2xl font-bold">Hobbies</h4>
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
                  <Image
                    src={c.backSrc}
                    alt="Card Back"
                    className="w-full h-full object-cover rounded-lg"
                    width="200"
                    height="300"
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