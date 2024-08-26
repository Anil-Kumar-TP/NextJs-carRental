import { useState } from "react";

export const useInput=(defaultValue)=>{
    const[enteredValues,setEnteredValues]=useState(defaultValue);

    const[didEdit,setDidEdit]=useState(false);

    const handleInputValues=(e)=>{
        setEnteredValues(e.target.value)
    
        setDidEdit(false)
    
      }
      
      const handleEmailBlur=()=>{
        setDidEdit(true)
      
      }
    
      return {value:enteredValues,didEdit,handleInputValues,handleEmailBlur}

}