import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from 'next/image';
import img1 from '../../images/chart.svg';
import img2 from '../../images/contribution.svg';
export function Productswiper({ image, text }: { image: any, text: string }) {
    return (
        <>
            <Swiper
                spaceBetween={25}
                modules={[FreeMode, Autoplay]}
                // snapOnRelease={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                navigation={false}
                className="mySwiper"
            >
                {image.map((image: { src: string }, index: number) => (
                    <SwiperSlide key={index}>
                        <div className="p-8 w-[250px] mx-auto"> {/* Center the image */}
                            <Image
                                src={image.src}
                                alt={`carousel-${index}`}
                                layout="responsive"
                                width={250}
                                height={250}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute bottom-0 hidden p-4 text-ui-500 md:block">
                {text}
            </div>

        </>
    );
}