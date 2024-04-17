"use client"
import { useEffect, useState, useRef } from 'react';

const Container = () => {
    const [drawPercentage, setDrawPercentage] = useState(0);
    const [isInViewport, setIsInViewport] = useState(false);
    const svgRef = useRef(null);

    const onEnterViewport = () => {
        console.log("Entered SVG viewport");
        setIsInViewport(true);
    };

    const handleScroll = () => {
        if (isInViewport) {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const maxScroll = documentHeight - windowHeight;
            const scrollPercentage = (window.scrollY / maxScroll) * 100;
            const newDrawPercentage = Math.min(Math.max(scrollPercentage * 3, 0), 100);
            setDrawPercentage(newDrawPercentage);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isInViewport]);

    useEffect(() => {
        const svgElement = svgRef.current;
        if (svgElement) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        onEnterViewport();
                        observer.disconnect();
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(svgElement);
            return () => observer.disconnect();
        }
    }, []);
  return (
    <div className=' flex-col relative hidden xl:flex '>
                <div className='flex w-[500px] justify-end absolute gap-8 top-44 left-40 border border-secondary-300 rounded-xl items-center p-2 transition-all duration-500 group/edit hover:cursor-pointer hover:bg-secondary-300 hover:text-white '>
                    <p className='text-right'>
                        Our Skilled designers will craft visually stunning and  intuitive  user interfaces that enhance the user experience.
                    </p>
                    <span className='flex text-3xl font-semibold'>Design</span>
                    <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white group-hover/edit:text-secondary-100 '>2</span>

                </div>
                <div className='flex w-[500px] justify-end absolute gap-8 top-[494px] left-40 border border-secondary-300 rounded-xl items-center p-2 transition-all duration-500 group/edit hover:cursor-pointer hover:bg-secondary-300 hover:text-white '>
                    <p className='text-right'>
                        {"We'll meticulously prepare for a successdul launch,ensuring  a smooth transition from development to deployment"}
                    </p>
                    <span className='flex text-3xl font-semibold'>Launch</span>
                    <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white group-hover/edit:text-secondary-100'>4</span>

                </div>
                <div className=''>
                    <svg
                        ref={svgRef}
                        viewBox="0 0 500 300"
                        xmlns="http://www.w3.org/2000/svg"
                        className='block'
                    >
                        <defs>
                            <path id="motionPath" d="M 247.447 0.239 C 247.447 0.239 184.947 29.651 247.447 59.062 C 309.947 88.473 246.221 118.499 246.221 118.499 C 246.221 118.499 194.138 150.974 246.221 180.386 C 298.304 209.798 244.996 239.822 244.996 239.822 C 244.996 239.822 199.653 265.762 244.383 298.85" />
                        </defs>
                        <path
                            style={{
                                fill: 'rgba(253, 253, 253, 0)',
                                strokeWidth: '5px',
                                stroke: 'rgb(239, 61, 61)',
                                strokeDasharray: `${drawPercentage}% 100%`,
                                strokeDashoffset: '0%'
                            }}
                            d="M 247.447 0.239 C 247.447 0.239 184.947 29.651 247.447 59.062 C 309.947 88.473 246.221 118.499 246.221 118.499 C 246.221 118.499 194.138 150.974 246.221 180.386 C 298.304 209.798 244.996 239.822 244.996 239.822 C 244.996 239.822 199.653 265.762 244.383 298.85"
                        ></path>
                    </svg>
                </div>
                <div className='flex w-[500px] justify-end absolute gap-8 right-44 top-4 border border-secondary-300 rounded-xl items-center p-2 transition-all duration-500 group/edit hover:cursor-pointer hover:bg-secondary-300 hover:text-white '>
                    <p className='text-right'>
                        {"Let's brainstorm together and explore creative ideas to solve your unique challenges."}                    </p>
                    <span className='flex text-3xl font-semibold'>Ideate</span>
                    <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white group-hover/edit:text-secondary-100'>1</span>

                </div>
                <div className='flex w-[500px] justify-end absolute gap-8 right-44 top-[330px] border border-secondary-300 rounded-xl items-center p-2 transition-all duration-500 group/edit hover:cursor-pointer hover:bg-secondary-300 hover:text-white'>
                    <p className='text-right'>
                        {"Our expert developers will turn your approved design into a robust and scalable software solution."}                    </p>
                    <span className='flex text-3xl font-semibold'>Develop</span>
                    <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white group-hover/edit:text-secondary-100'>3</span>

                </div>
                <div className='flex w-[500px] justify-end absolute gap-8 right-44 top-[650px] border border-secondary-300 rounded-xl items-center p-2 transition-all duration-500 group/edit hover:cursor-pointer hover:bg-secondary-300 hover:text-white'>
                    <p className='text-right'>
                        {"As your business grows, we'll work with you to scale your software and accomodate increasing demands."}                    </p>
                    <span className='flex text-3xl font-semibold'>Scale</span>
                    <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white group-hover/edit:text-secondary-100'>5</span>

                </div>
            </div>  )
}

export default Container