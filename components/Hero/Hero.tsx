'use client'
import { useState } from "react";
import Link from "next/link";

// Custom Components
import IconButton from "../ui/iconButton";
import Seperation from "../ui/seperation";
import DropDown from "../ui/dropDown";
import CustomButton from "../ui/customButton";
import CalendarInput from "../ui/calendarInput";


import heroStyles from './Hero.module.css'
import Image from "next/image";
const Hero = () => {

   const[selectedButton,setSelectedButton]=useState('samePick');

   const handleButtonClick=(bookOption:string)=>{
    setSelectedButton(bookOption)
   }

  return (
       <section className={heroStyles.bookingDownloadSection}>
        {/* Button for Bookings */}
               <div className={heroStyles.bookingTypeContainer}>

               <CustomButton className={`${heroStyles.bookingOptionButton} ${heroStyles['border-0']}`} isSelected={selectedButton==='samePick'} onClick={()=>handleButtonClick('samePick')}>Same as Pick-Up</CustomButton>

               <CustomButton   className={`${heroStyles.bookingOptionButton} ${heroStyles['border-0']}`} isSelected={selectedButton==='differentPick'} onClick={()=>handleButtonClick('differentPick')}>Different Drop-Off</CustomButton>

               <DropDown variantType="semi-transparent"  optionValues={[{optionLabel:"Select vehicle Type",optionValue:"default"},{optionLabel:"Seltos",optionValue:"Seltos"},{optionLabel:"Innova",optionValue:"innova"}]}/>
               </div>

                {/* Second Column */}

                <div className={heroStyles.bookingTypeContainer}>
                    {/* Drop Down Containers */}
                <DropDown className={heroStyles.whitebackground} icon="/icons/DropDownLocation.svg" optionValues={[{optionLabel:"Al Quoz",optionValue:"Al Quoz"}]}/>

                {/* Calendars */}
                     <CalendarInput icon="/icons/calender.svg" >Pick-Up Date & Time </CalendarInput>
                     <CalendarInput icon="/icons/calender.svg" >Drop Off Date & Time</CalendarInput>

                     {/* Search Button */}

                      <IconButton iconButton="/icons/search-glass.svg"/>


                        <Seperation/>

                        <CustomButton  className={`${heroStyles.bookingOptionButton} ${heroStyles.buttonPadding}  border-white`}>Quick Book</CustomButton>
                </div>
                {/* Third Column about various download options  */}
                <div className={heroStyles['app-download-section']}>
                <p>Download our App for easy accessibility anytime, anywhere!</p>
                <div className={heroStyles['store-links-container']}>
            <Link className={heroStyles["appStore"]} href="https://play.google.com/store/games?hl=en&pli=1" target="_blank"></Link>
            <Link className={heroStyles["playStore"]} href="https://play.google.com/store/games?hl=en&pli=1" target="_blank"></Link>
          </div>
                </div>

                {/* Contains Both Call Option and Support */}
                <div className={`${heroStyles.supportOptionsContainer} ' ' ${heroStyles.item1}`} >
          <Image title="Call" src="/images/Call.svg" id="call-icons"  width="26" height="26" alt="Call Icon" />
      </div>
      <div className={`${heroStyles.supportOptionsContainer} ' ' ${heroStyles.item2}`}>
        <Image title="Chat Support" src="/images/24by7.svg" id="24support" width="32" height="32" alt="24 by 7 Support" />
      </div>
    </section> 
  )
}

export default Hero
