import heroImage from '../../images/herobg.svg';
import { ArrowRight } from 'lucide-react';

export function Banner({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className='relative w-full h-screen flex flex-col justify-center items-center text-white text-center '
                style={{ backgroundImage: `url(${heroImage.src})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
                <div>
                    <div className="mb-8 text-4xl font-semibold lg:text-6xl">
                        Transforming Today
                        <br />
                        For
                        <br />
                        Digital Tomorrow
                    </div>
                    <p className="w-[90vw] font-semibold lg:w-full">We are committed to offering state-of-the-art software solutions that
                        <br />enable companies to prosper in the digital world.</p>
                </div>
                <div className='flex pt-10 z-10'>
                    <button className='h-9 px-4 py-2 flex  items-center justify-center rounded-md text-sm font-medium w-fit shadow-sm text-white bg-translucent_dark  transition-all duration-500 hover:bg-secondary-300 hover:text-white '>
                        <div className='flex items-center'>
                            <span className="hover-gap">Learn more</span>
                            <span><ArrowRight className='h-4 w-4 hover-gap' /></span>
                        </div>

                    </button>
                </div>
                {children}
            </div>
        </>
    )
}

