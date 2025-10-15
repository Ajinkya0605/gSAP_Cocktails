import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all'

// Custom hook to detect mobile screen size without using react-responsive
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= 767 : false
    );

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 767);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}

const Hero = () => {
    const videoRef = useRef();
    const isMobile = useIsMobile();

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

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 0.8,
            stagger: 0.05,
            delay: 1
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
            .to('.right-leaf', { y: -200 }, 0)
            .to('.left-leaf', { y: 200 }, 0);

        
        const startValue = isMobile ? 'top: 50%' : 'center 60%';
        const endValue = isMobile ? 'top: 120%' : 'bottom top';

        
        if (videoRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: startValue,
                    end: endValue,
                    scrub: true,
                    pin: true
                }
            });

            // Use onloadedmetadata (lowercase) and set up the timeline after metadata is loaded
            videoRef.current.onloadedmetadata = () => {
                tl.to(videoRef.current, {
                    currentTime: videoRef.current.duration
                });
            };
        }

        return () => {
            heroSplit.revert();
            paragraphSplit.revert();
        };
    }, [isMobile]);

    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>MOJITO</h1>

                <img src="images/hero-left-leaf.png" alt="" className='left-leaf' />
                <img src="images/hero-right-leaf.png" alt="" className='right-leaf' />

                <div className='body'>
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
            </section>

            <div className=" video absolute inset-0 ">
                <video
                    ref={videoRef}
                    src='/videos/output.mp4'
                    muted
                    playsInline
                    preload='auto'
                />
            </div>
        </>
    )
}

export default Hero