import React from 'react'
import { ArrowRight, MonitorSmartphone, Globe, TabletSmartphone, HeartHandshake, BookCopy } from 'lucide-react';
import Servicecard from './Servicecard';
const Services = () => {
    return (
        // <div className='container'>
        <div className="grid w-[80%] gap-y-8 pt-20 container sm:mx-auto lg:w-[90%] lg:grid-cols-2">
            <div className="hover:flip-vertical-fwd  order-2 grid items-center justify-center gap-y-8 px-4 sm:grid-cols-2">
                <div className='flex flex-col gap-8'>
                    <Servicecard img={<MonitorSmartphone className='h-14 w-14' />} header="UI/UX" text="we create interfaces that are not just visually appealing, but also intuitive and conversion-focused." color={false} />
                    <Servicecard img={<Globe className='h-14 w-14' />} header={<>Web <br /> Development</>} text="Our creative designers and skilled developers collaborate to create stunning websites that engage visitors and convert them into loyal customers." color={false} />
                </div>
                <div className='flex flex-col gap-8'>
                    <Servicecard img={<TabletSmartphone className='h-14 w-14' />} header={<>Mobile <br /> Development</>} text="From streamlining operations to data-driven insights, we create solutions that empower your business to thrive in the digital age." color={true} />
                    <Servicecard img={<HeartHandshake className='h-14 w-14' />} header={<>Brand & <br /> Marketing</>} text="Our branding experts craft strategies, logos, and visuals that resonate with your target audience, leaving a lasting impression." color={false} />
                    <Servicecard img={<BookCopy className='h-14 w-14' />} header={<>Internship/ <br /> Training</>} text="Our training programs and workshops cover a range of topics, from software utilization to design principles, enhancing your team's skills and productivity." color={true} />
                </div>
            </div>
            <div className="flex flex-col gap-6 px-4 md:px-8 lg:order-2">
                <div className='font-semibold '>Our Services</div>
                <div className='text-5xl font-bold'>Empowering <br /> Your Vision</div>
                <div>Our range of offerings is carefully curated to cater to your diverse needs, ensuring that your digital journey is seamless, captivating, and results-driven.</div>
                <button className='h-9 px-4 py-2 flex  items-center justify-center rounded-md text-sm font-medium w-fit shadow-sm text-secondary-100 border-secondary-100 border transition-all duration-500 hover:bg-secondary-300 hover:text-white'>
                    <div className='flex items-center'>
                        <span>Learn more</span>
                        <span><ArrowRight className='h-4 w44' /></span>
                    </div>
                </button>
            </div>
        </div>
        // </div>
    )
}

export default Services