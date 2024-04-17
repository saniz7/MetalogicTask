"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from '../../images/banashwali/chart.svg';
import img2 from '../../images/banashwali/contribution.svg';
import img3 from '../../images/banashwali/idcard.svg';
import img4 from '../../images/digitalkhata/cashout.svg';
import img5 from '../../images/digitalkhata/task.svg';
import img6 from '../../images/digitalkhata/dashboard.svg';
import { ArrowRight } from 'lucide-react';
import bg from '../../images/products_bg.svg'
import { Productswiper } from './ProductSwiper';
import { useInView } from 'react-intersection-observer';

const Product = () => {
    const { ref, inView } = useInView();
    const [stateview1, setStateview1] = useState(false);
    const [stateview2, setStateview2] = useState(true);
    const { ref: ref1, inView: inView1 } = useInView();
    const { ref: ref2, inView: inView2 } = useInView();
    // Trigger count when entering viewport
    useEffect(() => {
        if (inView1) {
            setStateview1(true);
            console.log('view');
        }
    }, [inView1]);
    useEffect(() => {
        if (inView2) {
            setStateview2(true);
            console.log('view');
        }
    }, [inView2]);
    const [state, setState] = useState(true);
    const banashwali = [{ src: img1 }, { src: img2 }, { src: img3 }];
    const digitalkhata = [{ src: img4 }, { src: img5 }, { src: img6 }];
    const banashwali_text = "Trace the footsteps of your ancestors and discover your family tree's story.";
    const digitalkhata_text = "Where Finances unify for business and personal success"
    return (
        <div ref={ref1} style={{
            backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: '0 100%'
        }}>
            <div  ref={ref2} className='container py-20'

            >
                <div className="flex flex-col items-center justify-center">
                    <div className='lg:mx-auto lg:w-[80%]'>
                        <div  className={`z-50 pb-12 text-4xl font-bold md:w-[50%] md:pb-24 md:text-5xl ${stateview1 ? 'text-focus-in':''}`}>Explore Our Products</div>
                        <div className="h-9 items-center justify-center bg-muted p-1 text-muted_foreground rounded-3xl grid grid-cols-2 md:w-[50%] lg:w-[30%]">
                            <button className={`inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-3xl ${state ? 'bg-white text-black border border-black' : ''}`} onClick={() => setState(true)}>Banshwali</button>
                            <button className={`inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded-3xl ${!state ? 'bg-white text-black border border-black' : ''}`} onClick={() => setState(false)}>Digital khata</button>
                        </div>
                        <div className={`${stateview2 ? 'slide-in-rightproduct':''} rounded-xl border border-border bg-card text-card-foreground shadow-md my-4 grid grid-cols-1 md:grid-cols-2`}>
                            <div className="w-[100%] relative flex items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-green-100 pb-10 lg:rounded-r-none">
                                <Productswiper image={state ? banashwali : digitalkhata} text={state ? banashwali_text : digitalkhata_text} />
                            </div>
                            <div className="flex h-full flex-col px-4 pt-4">
                                <div>
                                    <div className="text-3xl font-bold">
                                        Features
                                    </div>
                                    <p className="py-4 font-semibold">
                                        {state ?
                                            'View full Banshawali chart digitally.'
                                            :
                                            'Powerful POS system'
                                        }
                                    </p>
                                    <hr style={{
                                        border: 'none',
                                        height: '1px',
                                        backgroundColor: '#e3e3e3',
                                    }} />

                                </div>
                                <ul className="flex list-disc flex-col gap-4 py-4 pl-4">
                                    {state ?
                                        <>
                                            <li>View your Banshaj information all in one place.</li>
                                            <li>Bring all generations together under one roof creates a unique opportunity for shared experiences, mutual learning, and the strengthening of family bonds.</li>
                                            <li>Manage and learn about events nearby you.</li>
                                        </>
                                        :
                                        <>
                                            <li>Efficient personal finance management</li>
                                            <li>Accurate interest calculator</li>
                                            <li>Timely reminders and alerts</li>
                                            <li>Streamlined record-keeping</li>
                                            <li>Robust data security and many more</li>
                                        </>
                                    }


                                </ul>
                                <div className="flex self-center px-8 pb-3 pt-10 lg:self-end">
                                    <button className='h-9 px-4 py-2 inline-flex  items-center justify-center rounded-md text-sm font-medium shadow-sm text-secondary-100 border-secondary-100 border transition-all duration-500 hover:bg-secondary-300 hover:text-white'>
                                        <div className='flex items-center'>
                                            <span>Learn more</span>
                                            <span><ArrowRight className='h-4 w44' /></span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Product