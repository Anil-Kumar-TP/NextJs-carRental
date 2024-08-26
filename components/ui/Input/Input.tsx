import React from "react";
import InputContainerStyles from './Input.module.css';




type InputProps ={
  placeholder?: string;
  cssClasses?: string;
  name: string;
  erroMessage?: string;
  erroMessagClass?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({placeholder,cssClasses,name,erroMessage,erroMessagClass,type='text'}) => {

    let inputCssStyles=InputContainerStyles.defaultStyles;
    let errorMessageClass=""
    // the styles given to the input box
    if(cssClasses){
        inputCssStyles+=" "+cssClasses;
    }
    // to  highlight the error Message the color given to that
    if(erroMessagClass==='black'){
      errorMessageClass=InputContainerStyles.blackColor
    }
  return (
     <div className={InputContainerStyles.inputBoxContainer}>
        <input type={type} placeholder={placeholder} className={inputCssStyles} name={name} />
         {erroMessage && <p className={`${InputContainerStyles.erroMessage}  ${errorMessageClass}`}>{erroMessage}</p>}
     </div>
  )
}

export default Input;

