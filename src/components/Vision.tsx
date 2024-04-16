"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/all';

const MotionPathAnimation = () => {
    const circleRef = useRef<SVGCircleElement>(null);

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);

        const values: string[] = ["100%", "40% 60%", "20 350", "50% 50%", "true", "10%"];
        let currentIndex = 0;

        const next = () => {
            gsap.killTweensOf(next);
            if (++currentIndex === values.length) {
                currentIndex = 0;
            }
            if (values[currentIndex] === "true") {
                gsap.set("#current", { text: values[currentIndex] });
            } else {
                gsap.set("#current", { text: ('"' + values[currentIndex] + '"') });
            }
            gsap.to("#path", { drawSVG: values[currentIndex], duration: 1, ease: "power1.inOut" });
        }

        document.querySelector("#next")?.addEventListener("click", next);

        return () => {
            document.querySelector("#next")?.removeEventListener("click", next);
        }
    }, []);

    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="516.3"
            height="190"
            viewBox="0 0 516.3 190"
            style={{ enableBackground: 'new 0 0 516.3 190', transform: 'rotate(90deg)' } as any}
            xmlSpace="preserve"
        >
            <path id="template" fill='none' d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />
            <path id="path" fill='none' stroke='red' d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37" />
        </svg>
    );
};

export default MotionPathAnimation;
