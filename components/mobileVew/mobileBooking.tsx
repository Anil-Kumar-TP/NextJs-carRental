'use client'
import CustomButton from "../ui/customButton"
import mobileBookingStyles from './mobileBooking.module.css';
import DropDown from "../ui/dropDown";
import CalendarInput from "../ui/calendarInput";
import { useState } from "react";

const MobileBooking = () => {

    const[selectedButton,setIsSelected]=useState<string>('samePick');
    const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);


    const handleBookingOption=(pickUptions:string)=>{
        setIsSelected(pickUptions)  
    }

    const showBookingOptions=()=>{
      setIsButtonClicked(true)
    }
  return (
    <div className={mobileBookingStyles.bookingOptionsWrapper}>
        {/* Buttons for bookings */}
        <div className={mobileBookingStyles.bookingButtonsWrapper}>
               <CustomButton  onClick={showBookingOptions} className={`${mobileBookingStyles.buttonStyle} ${mobileBookingStyles.redButton}`}>Book a Car</CustomButton>
               <CustomButton onClick={showBookingOptions} className={`${mobileBookingStyles.buttonStyle} ${mobileBookingStyles.whiteButton}`}>Quick Book</CustomButton>
        </div>
        {/* To show the  different pick up Options */}
        { isButtonClicked && <>
          <div className={mobileBookingStyles.bookingOptionWrapper}>
            <CustomButton  isSelected={selectedButton==='samePick'}  className={mobileBookingStyles.buttonfontSize} onClick={()=>handleBookingOption('samePick')} >Same as Pick-Up</CustomButton>

            <CustomButton isSelected={selectedButton==='differentPick'} className={mobileBookingStyles.buttonfontSize}  onClick={()=>handleBookingOption('differentPick')}>Different Drop-Off</CustomButton>

            <DropDown className={`${mobileBookingStyles.padding0}`}  optionValues={[{optionLabel:"vehicle Type",optionValue:"default"},{optionLabel:"Seltos",optionValue:"Seltos"},{optionLabel:"Innova",optionValue:"innova"}]}/>
        </div>
        {/* Options For Different Pick Up */}
        <div className={mobileBookingStyles.bookingOptionsContainer}>
        { (selectedButton !=='samePick')  &&  <DropDown icon="/icons/DropDownLocation.svg" className={mobileBookingStyles.greyBackground} optionValues={[{optionLabel:"Pick Up Location",optionValue:"default"}]}/>}

        <DropDown icon="/icons/DropDownLocation.svg" className={mobileBookingStyles.greyBackground} optionValues={[{optionLabel:"Drop Off Location",optionValue:"default"}]}/>

          <CalendarInput icon="/icons/calender.svg" backgroundColor="grey" >Pick-Up Date & Time </CalendarInput>
          <CalendarInput icon="/icons/calender.svg" backgroundColor="grey">Drop Off Date & Time</CalendarInput>

        
        </div>
        </>}
    </div>
  )
}

export default MobileBooking
