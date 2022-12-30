import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Virtual, Autoplay } from 'swiper';
import { useState } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { IEvents } from '../../api/interfaces/events';
import { useEvents } from '../../api/events';

export const BannerSwiper = () => {
    const [swiperChange, setSwiperChange] = useState({});
    const events = useEvents()
    let banners: string[] = []
    if(!events.isLoadingEvents) {
        banners = (events.events?.data as IEvents[]).map((data) => data.banner)
   
    }
    // const banners = ["music-fest", "rock-in-rio", "lollapalooza", "dj-party", "bloco-emo"]
    return (
        <Flex   position="relative">
            <Swiper
            
                // centeredSlides={true}
                modules={[Autoplay]}
                className="swiper-white"
                slidesPerView={2}
                spaceBetween={0}
                pagination={{ clickable: true }}
                onInit={(ev: any) => {
                    setSwiperChange(ev);
                }}
                loop
                autoplay
            >
                {
                    banners.map((data, index) =>
                        <SwiperSlide key={index} virtualIndex={index}
                        // onClick={() => router.push(`/movie/${data.id}`)}
                        >
                            <Flex justifyContent="center" cursor="pointer"  position="relative" h="400px">
                                <Image w="100%" objectFit="fill" src={`${data}`} />
                            </Flex>
                        </SwiperSlide>
                    )}
            </Swiper>
        </Flex>
    )
}

