import React, { useEffect } from 'react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all'

const Hero = () => {

    useEffect(() => {
        const heroSplit = new SplitText('.title', { type: 'chars,words' });
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            stagger: 0.05,
            ease: 'expo.out',
        });

        gsap.from(paragraphSplit.lines,{
            opacity: 0,
            yPercent: 100,
            duration: 0.8,
            stagger: 0.05,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,

            }
        })
            .to('.right-leaf',{ y : -200 }, 0)
            .to('.left-leaf', { y : 200 }, 0)

        // Cleanup to revert SplitText changes if needed
        return () => {
            heroSplit.revert();
            paragraphSplit.revert();
        };
    }, []);

  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className='title'>MOJITO</h1>

            <img src="images/hero-left-leaf.png" alt="" className='left-leaf' />
            <img src="images/hero-right-leaf.png" alt="" className='right-leaf' />

            <div className='body'>
                <div className='content'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block'>
                            <p>Cool. Refreshing. Classic.</p>
                            <p className='subtitle'>
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>
                                Every cocktail on our menu is a blend of premium ingredients, creative, flair, and timeless recipies - designed to delight your senses.
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero