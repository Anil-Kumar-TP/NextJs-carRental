'use client'

import { useState } from 'react'
import Image from 'next/image'

import { CalendarInputProps } from '@/types/Types'

import calendarInputStyles from './calendarInput.module.css'


const CalendarInput = ({icon,className,children,backgroundColor}:CalendarInputProps) => {


  let background;
  if(backgroundColor=='grey'){
    background=calendarInputStyles.grey;
  }

   const[datetime,setDateTime]=useState<string>('');

   const[showDateTimeInput,setShowDateTimeInput]=useState(false);

  const showTimeHandler=()=>{
    setShowDateTimeInput(prev=>!prev);
  }   

   const handleDateTimeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(event.target.value);
    setShowDateTimeInput(false)
  };
  return (
    <div className={calendarInputStyles.calendarContainer}>
          <button  onClick={showTimeHandler}  className={`${className} ' ' ${calendarInputStyles.buttonStyles} ' ' ${background}`} >{datetime?datetime:children}</button>


        { showDateTimeInput && <input  type="datetime-local"  defaultValue={'2018-06-12T19:30'}  className={`${calendarInputStyles.calendarStyles}  ${background}`}    onChange={handleDateTimeChange}/>}
        {icon && <Image className={calendarInputStyles.startIcon} src={icon} width={10} height={10} alt='Calendar-icon'/>}
    </div>
  )
}

export default CalendarInput
