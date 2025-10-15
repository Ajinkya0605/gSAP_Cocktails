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
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id='c-right-leaf'
        ref={rightLeafRef}
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>
          <ul>
            {cocktailLists.map((cocktail, idx) => (
              <li key={cocktail.name ? cocktail.name : idx}>
                <div>
                  <h3>{cocktail.name}</h3>
                  <p>{cocktail.country} | {cocktail.detail}</p>
                </div>
                <span>{cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>
          <ul>
            {mockTailLists.map((cocktail, idx) => (
              <li key={cocktail.name ? cocktail.name : idx}>
                <div>
                  <h3>{cocktail.name}</h3>
                  <p>{cocktail.country} | {cocktail.detail}</p>
                </div>
                <span>{cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails