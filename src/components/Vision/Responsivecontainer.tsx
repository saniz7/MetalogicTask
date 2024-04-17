import React from 'react'

const Responsivecontainer = () => {
    return (
        <div className='flex flex-col gap-2 xl:hidden'>
            <div className='flex flex-col gap-2 p-4 shadow-md border border-secondary-300 rounded-xl transition-all duration-500 group/edit hover:cursor-pointer hover:bg-secondary-300 hover:text-white '>
                <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white group-hover/edit:text-secondary-100'>1</span>
                <span className='flex text-3xl font-semibold'>Ideate</span>
                <p className=''>
                    {"Let's brainstorm together and explore creative ideas to solve your unique challenges."}                    </p>

            </div>
            <div className='flex flex-col gap-2 p-4 shadow-md border border-secondary-300 rounded-xl transition-all duration-500 group/edit hover:cursor-pointer hover:bg-secondary-300 hover:text-white '>
                <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white group-hover/edit:text-secondary-100 '>2</span>
                <span className='flex text-3xl font-semibold'>Design</span>
                <p className=''>
                    Our Skilled designers will craft visually stunning and  intuitive  user interfaces that enhance the user experience.
                </p>

            </div>
            <div className='flex flex-col gap-2 p-4 shadow-md border border-secondary-300 rounded-xl transition-all duration-500 group/edit hover:cursor-pointer hover:bg-secondary-300 hover:text-white'>
                <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white group-hover/edit:text-secondary-100'>3</span>
                <span className='flex text-3xl font-semibold'>Develop</span>
                <p className=''>
                    {"Our expert developers will turn your approved design into a robust and scalable software solution."}                    </p>

            </div>
            <div className='flex flex-col gap-2 p-4 shadow-md border border-secondary-300 rounded-xl transition-all duration-500 group/edit hover:cursor-pointer hover:bg-secondary-300 hover:text-white '>
                <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white group-hover/edit:text-secondary-100'>4</span>
                <span className='flex text-3xl font-semibold'>Launch</span>
                <p className=''>
                    {"We'll meticulously prepare for a successdul launch,ensuring  a smooth transition from development to deployment"}
                </p>

            </div>
            <div className='flex flex-col gap-2 p-4 shadow-md border border-secondary-300 rounded-xl transition-all duration-500 group/edit hover:cursor-pointer hover:bg-secondary-300 hover:text-white'>
                <span className='flex justify-center items-center bg-secondary-600 h-10 w-10 text-white p-4 rounded-full group-hover/edit:bg-white group-hover/edit:text-secondary-100'>5</span>
                <span className='flex text-3xl font-semibold'>Scale</span>
                <p className=''>
                    {"As your business grows, we'll work with you to scale your software and accomodate increasing demands."}                    </p>

            </div>
        </div>)
}

export default Responsivecontainer