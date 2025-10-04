import React, { useRef, useEffect } from 'react'
import { navLinks } from '../../constants/index'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        if (!navRef.current) return;

        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: navRef.current,
                start: 'bottom top'
            }
        });

        navTween.fromTo(
            navRef.current,
            { backgroundColor: 'transparent' },
            {
                backgroundColor: '#00000050',
                backdropFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            });

        return () => {
            navTween.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <nav ref={navRef}>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar