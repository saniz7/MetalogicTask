"use client"
import React from 'react'
import CountUp from 'react-countup';
const Countup = () => {
    return (
        <div className='container w-full translate-y-12 z-50'>
            <div className='mx-4 flex flex-col justify-between gap-4 rounded-xl border border-border bg-white p-4 font-semibold text-accent-teal shadow-lg shadow-muted_foreground  sm:flex-row md:mx-auto md:w-[80%] md:px-16 xl:w-[50%]'>
                <div className='flex flex-col gap-4'>
                    <CountUp
                        start={0}
                        end={313}
                        style={{
                            letterSpacing: '8px',
                            color: 'transparent',
                            WebkitTextStroke: '2px',
                            WebkitTextStrokeColor: 'teal'
                        }}
                        className='text-7xl md-h[80px]'
                    />
                    <span style={{ color: 'teal' }}>kilometers of code written</span>
                </div>
                <div className='flex flex-col gap-4'>
                    <CountUp
                        start={0}
                        end={210}
                        style={{
                            letterSpacing: '8px',
                            color: 'transparent',
                            WebkitTextStroke: '2px',
                            WebkitTextStrokeColor: 'teal'
                        }}
                        className='text-7xl md-h[80px]'
                    />
                    <span style={{ color: 'teal' }}>Liters of Coffee Drank</span>
                </div>
            </div>
        </div>
    )
}

export default Countup