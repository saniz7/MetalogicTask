import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import metalogo from "../images/metalogo.png"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='  relative w-full bg-primary px-4 pb-8 pt-24 text-white md:px-16 '>
            <div className='flex flex-col gap-6 xl:gap-0 xl:flex-row justify-between'>
                <div className='flex flex-col gap-2 md:hidden'>
                    <div className='flex gap-2'>
                        <span>
                            <Image src={metalogo} alt="metalogic company logo" className="w-[50px]"></Image>
                        </span>
                        <div className='flex flex-col'>
                            <div className="tracking-widest font-exo font-bold text-3xl">MetaLogic</div>
                            <div className='text-sm mb-4'>Software Private Limited</div>
                        </div>
                    </div>
                    <div className='flex'>
                        <ul className='flex flex-col gap-2 text-sm'>
                            <li className='flex gap-2'><MapPin className='w-4 h-4' />Saptakhel, Lalitpur (Head office)</li>
                            <li className='flex gap-2'><Phone className='w-4 h-4' />+ 977 9851353599</li>
                            <li className='flex gap-2'><Mail className='w-4 h-4' />info@metalogic.com.np</li>
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex lg:flex-row gap-4 lg:gap-2' >
                    <span>
                        <Image src={metalogo} alt="metalogic company logo" className="w-[50px]"></Image>
                    </span>
                    <div className='flex flex-col md:flex-row xl:flex-col justify-between xl:justify-normal w-full'>
                        <div className='flex flex-col'>
                            <div className="tracking-widest font-exo font-bold text-3xl">MetaLogic</div>
                            <div className='text-sm mb-4'>Software Private Limited</div>
                        </div>
                        <div className='flex'>
                            <ul className='flex flex-col gap-2 text-sm'>
                                <li className='flex gap-2'><MapPin className='w-4 h-4' />Saptakhel, Lalitpur (Head office)</li>
                                <li className='flex gap-2'><Phone className='w-4 h-4' />+ 977 9851353599</li>
                                <li className='flex gap-2'><Mail className='w-4 h-4' />info@metalogic.com.np</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 md:mx-auto md:flex-row md:gap-8 lg:gap-16 xl:mx-0'>
                    <div>
                        <h3 className="mb-2 font-semibold">Company</h3>
                        <ul className="flex flex-col gap-2 text-xs">
                            <li><a href="/contact">Feedback</a></li>
                            <li><a href="/contact/partner">Partnership</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 font-semibold">Services</h3>
                        <ul className="flex flex-col gap-2 text-xs">
                            <li><a href="/services">Custom Software Development</a></li>
                            <li><a href="/services">Web Development</a></li>
                            <li><a href="/services">Mobile App Development</a></li>
                            <li><a href="/services">Cloud Computing Services</a></li>
                            <li><a href="/services">Quality Assurance and Testing</a></li>
                            <li><a href="/services">UI/UX Designing</a></li>
                            <li><a href="/services">Maintenance and Support</a></li>
                            <li><a href="/services">Dev Ops</a></li>
                            <li><a href="/services">Blockchain Solutions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 font-semibold">Join</h3>
                        <ul className="flex flex-col gap-2 text-xs">
                            <li><a href="/career">Careers at MetaLogic</a></li>
                            <li><a href="/career">Internships</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 font-semibold">Join Us On Social Medias</h3>
                        <ul className="flex  gap-4 text-sm">
                            <li className='rounded-full border-2 p-2'><a href="/career"><Phone /></a></li>
                            <li className='rounded-full border-2 p-2'><a href="/career"><Facebook /></a></li>
                            <li className='rounded-full border-2 p-2'><a href="/career"><Instagram /></a></li>
                            <li className='rounded-full border-2 p-2'><a href="/career"><Linkedin /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col gap-y-2 text-sm md:flex-row">
                © Copyright 2024 MetaLogic. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer