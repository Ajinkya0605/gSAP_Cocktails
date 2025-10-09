import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

// Use root-relative paths to public images to match project pattern
const getImagePath = (img) => `/images/${img}`

const About = () => {

    useEffect(() => {
        const titleSplit = new SplitType('#about h2', {
            types: 'words',
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            }
        });

        scrollTimeline
         .from(titleSplit.words, {
            opacity: 0,
            duration: 1,
            yPercent: 100,
            ease: 'expo.out',
            stagger: 0.02,
         })
         .from('.top-grid div, .bottom-grid div',{
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.08,
            immediateRender: false,
         }, '-=0.5')

        // Cleanup function
        return () => {
            if (titleSplit && titleSplit.revert) {
                titleSplit.revert()
            }
        }
    }, [])

  return (
    <div>
      <div id="about">
        <div className="mb-16 md:px-0 px-5">
            <div className="content">
                <div className="md:col-span-8">
                    <p className='badge'>Best Cocktails</p>
                    <h2>
                        Where every detail matters <span className='text-white'>-</span>
                        from muddle to garnish
                    </h2>
                </div>

                <div className="sub-content">
                    <p>
                        Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. 
                    </p>

                    <div>
                        <p className="md:text-3xl text-xl font-bold">
                            <span>4.5</span>/5
                        </p>
                        <p className="text-sm text-white-100">
                            More than +12000 customers
                        </p>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy" />
                    <img src={getImagePath('abt1.png')} alt="grid-img-1" />
                </div>

                <div className="md:col-span-6">
                    <div className="noisy" />
                    <img src={getImagePath('abt2.png')} alt="grid-img-2" />
                </div>
                
                <div className="md:col-span-3">
                    <div className="noisy" />
                    <img src={getImagePath('abt5.png')} alt="grid-img-5" />
                </div>
            </div>

            <div className="bottom-grid">
                 <div className="md:col-span-8">
                    <div className="noisy" />
                    <img src={getImagePath('abt3.png')} alt="grid-img-3" />
                </div>

                 <div className="md:col-span-4">
                    <div className="noisy" />
                    <img src={getImagePath('abt4.png')} alt="grid-img-4" />
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default About
