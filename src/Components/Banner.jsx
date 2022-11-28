import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = (props) => {
   
    return (

          <Carousel className='overflow-hidden' showThumbs={false} autoPlay={true} interval={3000} width="100%"  infiniteLoop>
                <div className='cursor-pointer'>
                    <img   src="https://www.spacex.com/static/images/backgrounds-2022/crs-26/post-launch/Homepage_Desktop.webp" alt="carousel_image"/>
                </div>
                <div className='cursor-pointer'>
                    <img  src="https://www.spacex.com/static/images/backgrounds-2022/eutelsat-10b/post-launch/Homepage_Desktop.webp" alt="carousel_image"/>
             
                </div>
                <div className='cursor-pointer'>
                    <img  src="https://www.spacex.com/static/images/backgrounds-2021/hls-resized-2.webp" alt="carousel_image"/>
         
                </div>
                <div className='cursor-pointer'>
                    <img  src="https://www.spacex.com/static/images/backgrounds-2021/sn15/post-launch/STARSHIP_SN15_Desktop.webp" alt="carousel_image"/>
                
                </div>
            </Carousel>
 
    );
}

export default Banner;