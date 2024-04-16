"use client"
import { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const MotionPathAnimation = () => {
    const [drawPercentage, setDrawPercentage] = useState(0);
    const [isInViewport, setIsInViewport] = useState(false);

    const onEnterViewport = () => {
        console.log("Entered SVG viewport"); // For debugging
        setIsInViewport(true);
    };

    const handleScroll = () => {
        if (isInViewport) {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const maxScroll = documentHeight - windowHeight;
            const scrollPercentage = (window.scrollY / maxScroll) * 100;

            // Increase the draw percentage to make the animation faster
            const newDrawPercentage = Math.min(Math.max(scrollPercentage * 3, 0), 100); // Adjust the multiplier for speed
            setDrawPercentage(newDrawPercentage);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isInViewport]);

    return (
        <div className="min-h-screen py-8 md:py-32">
            <div className="px-2 py-4 text-center text-4xl font-semibold capitalize  md:px-0 md:text-5xl">
                design, build and scale your
                <br />
                vision with us
            </div>
            <div>
                <ScrollTrigger onEnter={onEnterViewport as any}>
                    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" className='block'>
                        <defs>
                            <path id="motionPath" d="M 247.447 0.239 C 247.447 0.239 184.947 29.651 247.447 59.062 C 309.947 88.473 246.221 118.499 246.221 118.499 C 246.221 118.499 194.138 150.974 246.221 180.386 C 298.304 209.798 244.996 239.822 244.996 239.822 C 244.996 239.822 199.653 265.762 244.383 298.85" />
                        </defs>
                        <path style={{ fill: 'rgba(253, 253, 253, 0)', strokeWidth: '5px', stroke: 'rgb(239, 61, 61)', strokeDasharray: `${drawPercentage}% 100%`, strokeDashoffset: '0%' }} d="M 247.447 0.239 C 247.447 0.239 184.947 29.651 247.447 59.062 C 309.947 88.473 246.221 118.499 246.221 118.499 C 246.221 118.499 194.138 150.974 246.221 180.386 C 298.304 209.798 244.996 239.822 244.996 239.822 C 244.996 239.822 199.653 265.762 244.383 298.85"></path>
                    </svg>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default MotionPathAnimation;
