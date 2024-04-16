import heroImage from '../images/herobg.svg';

export function Whyus() {
    return (
        <div
            className="text-white py-32 relative "
            style={{ backgroundImage: `url(${heroImage.src})` }}
        >
            <div className="p-3 container">
                <div className="rounded-xl border border-translucent_border bg-translucent p-4 text-white backdrop-blur md:p-8 lg:mx-auto lg:w-[80%]">
                    <div>
                        <div className="mb-8 text-2xl font-bold md:text-4xl">
                            Why Metalogic
                            <span className='text-secondary-500'>  ?</span>
                        </div>
                        <p className="w-[80%]">Innovation is our driving force. We explore the latest tech trends to deliver groundbreaking solutions that keep you ahead.</p>
                    </div>
                    <div className="flex gap-4 pt-4 md:px-[10%] md:pr-[10%]">
                        <div className=''>
                            <svg width="65" height="384" viewBox="0 0 65 384" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="dots" d="M30 32L30 292" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-dasharray="" className="dashed_path"></path>
                                <rect x="29" y="23" width="2" height="70" rx="1" fill="url(#paint0_linear_1_10894)"></rect>
                                <g filter="url(#filter0_di_1_10894)">
                                    <circle cx="30.5" cy="29.5" r="18.5" fill="url(#paint1_linear_1_10894)"></circle>
                                </g>
                                <defs>
                                    <filter id="filter0_di_1_10894" x="0" y="0" width="65" height="65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix
                                        ><feOffset dx="2" dy="3"></feOffset>
                                        <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.0856471 0 0 0 0 0.0784314 0 0 0 0 0.439216 0 0 0 0.49 0"></feColorMatrix>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_10894"></feBlend>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_10894" result="shape"></feBlend>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                        <feOffset dx="2" dy="4"></feOffset>
                                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.334833 0 0 0 0 0.425998 0 0 0 0 0.98 0 0 0 1 0"></feColorMatrix>
                                        <feBlend mode="lighten" in2="shape" result="effect2_innerShadow_1_10894"></feBlend>
                                    </filter>
                                    <linearGradient id="paint0_linear_1_10894" x1="30" y1="23" x2="30" y2="352" gradientUnits="userSpaceOnUse"><stop stop-color="#E70C0C"></stop><stop offset="1" stop-color="#EB6BF7"></stop></linearGradient>
                                    <linearGradient id="paint1_linear_1_10894" x1="30.5" y1="11" x2="30.5" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#D64949"></stop><stop offset="1" stop-color="#F62525"></stop></linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">Innovation at the Core</span>
                                <span>We thrive on innovation and continuously explore the latest technologies to provide you with groundbreaking solutions that keep you ahead of the curve.</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">Collaboration is the key</span>
                                <span>We work closely with you to understand your goals, challenges, and aspirations, ensuring our solutions align perfectly with your business objectives.</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">Your Success, Our Purpose</span>
                                <span>Our solutions are designed to enhance efficiency, boost productivity, and drive ROI, giving you a competitive edge in your industry.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
