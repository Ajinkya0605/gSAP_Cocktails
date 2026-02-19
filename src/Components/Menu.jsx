'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { allCocktails } from '../../constants'
import React, { useRef, useState } from 'react'

const Menu = () => {

    const contentRef = useRef();

    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        gsap.fromTo('#title' ,{opacity: 0}, {opacity: 1, duration: 1});
        gsap.fromTo('.cocktail img',{opacity: 0, xPercent: -100},{xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'});
        gsap.fromTo('.details h2',{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 100, ease: 'power1.inOut'})
        gsap.fromTo('.details p',{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 100, ease: 'power1.inOut'})
    }, [currentIndex]);

    const totalCocktails = allCocktails.length;

    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails 

        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }

    const currentCocktai = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nexCocktail = getCocktailAt(1);


    return (
        <section id='menu' aria-labelledby='menu-heading' className="relative py-12 bg-black">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf'/>
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf'/>

            <nav className='cocktail-tabs' aria-label='Cocktails Navigation'>
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button
                            key={cocktail.id}
                            className={isActive ? 'text-yellow border-yellow' : ''}
                            onClick={() => goToSlide(index)}
                        >
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>

            <div className='content'>
                <div className='arrows'>
                    <button className='text-left' onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true"/>
                    </button>

                    <button className='text-left' onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nexCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true"/>
                    </button>
                </div>

                <div className='cocktail'>
                    <img src={currentCocktai.image} className='object-contain' />
                </div>

                <div className='recipe'>
                    <div ref={contentRef} className='info'>
                        <p>Recipe for:</p>
                        <p id='title'>{currentCocktai.name}</p>
                    </div>

                    <div className='details'>
                        <h2>{currentCocktai.title}</h2>
                        <p>{currentCocktai.description}</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Menu