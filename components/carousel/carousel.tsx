'use client'
import { useEffect, useState } from 'react'

import carouselStyles from './carousel.module.css'

import CustomButton from '../ui/customButton'

import { BACKGROUND_IMAGES } from '@/constants/MainPage';


const indicators=[0,1,2];

const Carousel = () => {
   const[backGroundImageIndex,setBackGroundImageIndex]= useState(0);

   useEffect(()=>{
    const interval=setInterval(() => {
      setBackGroundImageIndex((prevIndex)=>{
        const nextIndex= prevIndex+1%BACKGROUND_IMAGES.length
        return nextIndex===BACKGROUND_IMAGES.length?0:nextIndex
      })
    }, 8000);

    return ()=>{clearInterval(interval)}
   },[])

  return (
    <div className={carouselStyles.bannerWrapper} style={{ backgroundImage: `url(${BACKGROUND_IMAGES[backGroundImageIndex]})` }}>
                      <div className={carouselStyles.offerContentWrapper}>
                          <div className={carouselStyles.offerContent}>
                          Recieve guarnteed
                          <CustomButton className={`border-0 ${carouselStyles['bannerButton']}`}>GIFT VOUCHER</CustomButton>
                          </div>
                          <div>
                          on a monthly hire or lease
                          </div>
        </div>
        {/* Visual Indicator for the Carousel */}
        <div className={carouselStyles["carousel-navigator"]}>
            {indicators.map(indicator=>{
              return  <div   key={indicator} className={`${carouselStyles["circle-1"]} ${backGroundImageIndex==indicator?`${carouselStyles.active}`:''}`} ></div>
            })}
                   </div>
    </div>
  )
}

export default Carousel
