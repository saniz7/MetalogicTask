import { MonitorSmartphone } from 'lucide-react'
import React from 'react'

const Servicecard = ({ img, header, text, color }: { img: any, header: any, text: string, color: boolean }) => {
    return (
        <>
            <div className={`hover:cursor-pointer card scale-up-top hover:flip-vertical-fwd w-52 border border-secondary-800 rounded-xl  ${color ? 'bg-gradient-to-r from-[#FF5d5d] to-[#DD2476] text-white' : ''}`}>
                <div className='thefront flex flex-col py-4 gap-4 items-center justify-center'>
                    <div className=' rounded-full text-white bg-secondary-800 p-8'>
                        {img}
                    </div>
                    <div className='px-2 text-center'>
                        <h2 className="pb-4 text-xl font-semibold">{header}</h2>
                        <p className="px-4 text-sm">{text}</p>
                    </div>
                </div>
                <div className="theback items-center justify-center">
                    Hiiiiiiiiiiii
                </div>
            </div>
        </>
    )
}

export default Servicecard