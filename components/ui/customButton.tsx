"use client"
import { log } from 'console';
import customButtonStyles from './customButton.module.css';
import { CustomButtonProps } from '@/types/Types';

const customButton = ({children,className,onClick,isSelected,type='button'}:CustomButtonProps) => {

  let customCssStyles=`${className} ${customButtonStyles.regular}`;

  // To highlight if the button is selected
  if(isSelected){
    customCssStyles+=` ${customButtonStyles.clicked}` 
  }

  const handleClick=()=>{
    console.log("CLCIKED");
    
  }
  return (
    <button className={`${customCssStyles}`} type={type}  onClick={onClick}>
      {children}  
    </button>
  )
}

export default customButton
