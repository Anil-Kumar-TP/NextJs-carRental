'use client'

import { useState } from 'react'
import Image from 'next/image'

import { CalendarInputProps } from '@/types/Types'

import calendarInputStyles from './calendarInput.module.css'


const CalendarInput = ({icon,className,children,backgroundColor}:CalendarInputProps) => {


  // to change the background of the button based on the on variant recived from the user  
  let background;
  if(backgroundColor=='grey'){
    background=calendarInputStyles.grey;
  }

  // to store the Date and Time
   const[datetime,setDateTime]=useState<string>('');

  //  to show  show the date and time picker
   const[showDateTimeInput,setShowDateTimeInput]=useState(false);

    // Handler to toggle the visibility of the date and time picker input
  const showTimeHandler=()=>{
    setShowDateTimeInput(prev=>!prev);
  }   

   const handleDateTimeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(event.target.value);
    setShowDateTimeInput(false)
  };
  return (
      //  Container for the calendar input component 
    <div className={calendarInputStyles.calendarContainer}>
          <button  onClick={showTimeHandler}  className={`${className} ' ' ${calendarInputStyles.buttonStyles} ' ' ${background}`} >{datetime?datetime:children}</button>

           {/* Conditionally render the date and time picker input if showDateTimeInput is true */}

        { showDateTimeInput && <input  type="datetime-local"  defaultValue={'2018-06-12T19:30'}  className={`${calendarInputStyles.calendarStyles}  ${background}`}    onChange={handleDateTimeChange}/>}
        {icon && <Image className={calendarInputStyles.startIcon} src={icon} width={10} height={10} alt='Calendar-icon'/>}
    </div>
  )
}

export default CalendarInput
