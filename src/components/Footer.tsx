import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import metalogo from "../images/metalogo.png"
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    const company = [
        {
            title: 'Company', child: ['a', 'b']
        }
    ]
    return (
        <footer className='z-50 w-full bg-primary px-4 pb-8 pt-24 text-white md:px-16 '>
            <div className='flex justify-between'>
                <div className='flex lg:flex-row gap-4 lg:gap-2' >
                    <div>
                        <Image src={metalogo} alt="metalogic company logo" className="w-[50px]"></Image>
                    </div>
                    <div>
                        <div className="tracking-widest font-exo font-bold text-3xl">MetaLogic</div>
                        <div className='text-sm mb-4'>Software Private Limited</div>
                        <ul className='flex flex-col gap-2 text-sm'>
                            <li className='flex gap-2'><MapPin className='w-4 h-4' />Saptakhel, Lalitpur (Head office)</li>
                            <li className='flex gap-2'><Phone className='w-4 h-4' />+ 977 9851353599</li>
                            <li className='flex gap-2'><Mail className='w-4 h-4' />info@metalogic.com.np</li>
                        </ul>
                    </div>
                </div>
                <div>
                    {company.map((item, index) => (
                         <ul key={index}>
                         <li>{item.title}</li>
                         <li>{item.child}</li>
                         {/* Render child elements if needed */}
                     </ul>
                    ))}

                </div>
            </div>
            <div className="mt-8 flex flex-col gap-y-2 text-sm md:flex-row">
                © Copyright 2024 Metalogic. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer