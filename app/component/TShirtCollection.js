

import {
    Carousel,
    CarouselItem,
    CarouselSlides,
} from 'keep-react';
import Image from 'next/image';
const imageData = [
    "/img/tshart (1).jpg",
    "/img/tshart (2).jpg",
    "/img/tshart (3).jpg",
    "/img/tshart (4).jpg",
    "/img/tshart (5).jpg",
    "/img/tshart (6).jpg",
    "/img/tshart (7).jpg",
    "/img/tshart (1).jpg",
    "/img/tshart (2).jpg",
    
   
];

export const TShirtCollection = () => {
    return (
        <div className="px-4 sm:px-20">
            <h1 className="text-[#272B36] text-lg font-semibold uppercase">T- Shirt Collection</h1>
            <Carousel options={{ slidesToScroll: 1, slidesToShow: 5 }}>
                <CarouselSlides className="flex">
                    {imageData.map((img, index) => (
                        <CarouselItem key={index} className="w-full flex-[0_0_33.33%] sm:flex-[0_0_20%]"> 
                            {/* 33.33% for 3 images on mobile, 20% for 5 images on larger screens */}
                            <div className="flex items-center justify-center rounded-xl border border-metal-100 my-8 dark:border-metal-900 dark:bg-metal-900">
                            <Image src={img} alt={`Image ${index + 1}`} className="object-cover w-full h-full rounded-xl" width={400} height={400}/>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselSlides>
            </Carousel>
        </div>
    );
};


  
  