import React, { useEffect, useRef } from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Cocktails = () => {
  const leftLeafRef = useRef(null);
  const rightLeafRef = useRef(null);

  useEffect(() => {
    // Animate left leaf
    if (leftLeafRef.current) {
      gsap.fromTo(
        leftLeafRef.current,
        { scale: 1.3, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#cocktails",
            start: "top 80%",
            end: "top 60%",
            scrub: false,
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    // Animate right leaf
    if (rightLeafRef.current) {
      gsap.fromTo(
        rightLeafRef.current,
        { scale: 1.3, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: "#cocktails",
            start: "top 80%",
            end: "top 60%",
            scrub: false,
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section id='cocktails' className='noisy'>
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id='c-left-leaf'
        ref={leftLeafRef}
        style={{ willChange: 'transform' }}
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id='c-right-leaf'
        ref={rightLeafRef}
        style={{ willChange: 'transform' }}
      />

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 px-4 md:px-16 py-10">
        {/* Popular Cocktails - Left */}
        <div className="w-full md:w-1/2">
          <div className="popular">
            <h2 className="text-xl font-bold mb-4">Most popular cocktails:</h2>
            <ul className="space-y-4">
              {cocktailLists.map((cocktail, idx) => (
                <li
                  key={cocktail.name ? cocktail.name : idx}
                  className="flex justify-between items-center bg-white/10 rounded-lg p-4"
                >
                  <div>
                    <h3 className="font-semibold">{cocktail.name}</h3>
                    <p className="text-sm text-gray-500">{cocktail.country} | {cocktail.detail}</p>
                  </div>
                  <span className="font-bold text-green-700">- {cocktail.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Loved Mocktails - Right */}
        <div className="w-full md:w-1/2">
          <div className="loved">
            <h2 className="text-xl font-bold mb-4">Most loved mocktails:</h2>
            <ul className="space-y-4">
              {mockTailLists.map((cocktail, idx) => (
                <li
                  key={cocktail.name ? cocktail.name : idx}
                  className="flex justify-between items-center bg-white/10 rounded-lg p-4"
                >
                  <div>
                    <h3 className="font-semibold">{cocktail.name}</h3>
                    <p className="text-sm text-gray-500">{cocktail.country} | {cocktail.detail}</p>
                  </div>
                  <span className="font-bold text-green-700">- {cocktail.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cocktails