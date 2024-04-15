import heroImage from '../images/herobg.svg';

export function Whyus({ children }: Readonly<{ children: React.ReactNode; }>) {
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
                            <span className='text-secondary'>  ?</span>
                        </div>
                        <p className="w-[80%]">Innovation is our driving force. We explore the latest tech trends to deliver groundbreaking solutions that keep you ahead.</p>
                    </div>
                    <div className="flex gap-4 pt-4 md:px-[10%] md:pr-[10%]">
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
