"use client"
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Container = () => {
    const { ref, inView } = useInView();
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState(false);
    const { ref: ref1, inView: inView1 } = useInView();
    const { ref: ref2, inView: inView2 } = useInView();
    const { ref: ref3, inView: inView3 } = useInView();
    const { ref: ref4, inView: inView4 } = useInView();
    const { ref: ref5, inView: inView5 } = useInView();
    useEffect(() => {
        if (inView1) {
            setState1(true);
            console.log('view 1');
        }
    }, [inView1]);

    useEffect(() => {
        if (inView2) {
            setState2(true);
            console.log('view 2');
        }
    }, [inView2]);
    useEffect(() => {
        if (inView3) {
            setState3(true);
            console.log('view 3');
        }
    }, [inView3]);
    useEffect(() => {
        if (inView4) {
            setState4(true);
            console.log('view 4');
        }
    }, [inView4]);
    useEffect(() => {
        if (inView5) {
            setState5(true);
            console.log('view 5');
        }
    }, [inView5]);
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
            <div ref={ref2} className={`${state1 ? 'slide-in-left' : ''} flex w-[500px] justify-end absolute gap-8 top-44 left-40 border border-secondary-300 rounded-xl items-center p-2 transition-all duration-500 bg-white  hover:cursor-pointer`}>
                <p className='text-right'>
                    Our Skilled designers will craft visually stunning and  intuitive  user interfaces that enhance the user experience.
                </p>
                <span className='flex text-3xl font-semibold'>Design</span>
                <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full  '>2</span>

            </div>
            <div ref={ref4} className={`${state4 ? 'slide-in-left' : ''} flex w-[500px] justify-end absolute gap-8 top-[494px] left-40 border border-secondary-300 rounded-xl items-center p-2 transition-all duration-500 bg-white hover:cursor-pointer`}>
                <p className='text-right'>
                    {"We'll meticulously prepare for a successdul launch,ensuring  a smooth transition from development to deployment"}
                </p>
                <span className='flex text-3xl font-semibold'>Launch</span>
                <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white'>4</span>

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
            <div ref={ref1} className={`${state1 ? 'slide-in-right' : ''} flex w-[500px] justify-end absolute gap-8 right-44 top-4 border border-secondary-300 rounded-xl items-center p-2 transition-all duration-500 bg-white hover:cursor-pointer `}>
                <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white '>1</span>
                <span className='flex text-3xl font-semibold'>Ideate</span>
                <p className='text-right'>
                    {"Let's brainstorm together and explore creative ideas to solve your unique challenges."}                    </p>

            </div>
            <div ref={ref3} className={`${state3 ? 'slide-in-right' : ''} flex w-[500px] justify-end absolute gap-8 right-44 top-[330px] border border-secondary-300 rounded-xl items-center p-2 transition-all duration-500 bg-white hover:cursor-pointer `}>
                <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white'>3</span>
                <span className='flex text-3xl font-semibold'>Develop</span>
                <p className='text-right'>
                    {"Our expert developers will turn your approved design into a robust and scalable software solution."}                    </p>

            </div>
            <div ref={ref5} className={`${state5 ? 'slide-in-right' : ''} flex w-[500px] justify-end absolute gap-8 right-44 top-[650px] border border-secondary-300 rounded-xl items-center p-2 transition-all duration-500 group/edit hover:cursor-pointer bg-white`}>
                <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full  '>5</span>
                <span className='flex text-3xl font-semibold'>Scale</span>
                <p className='text-right'>
                    {"As your business grows, we'll work with you to scale your software and accomodate increasing demands."}                    </p>

            </div>
        </div>)
}

export default Container