"use client"
import Image from "next/image";
import React, { useState } from "react"
import subscribeStyles from './subScribe.module.css';
import CustomButton from "../ui/customButton";

import Input  from '../ui/Input/Input';

import {isItEmpty,regexPatternCondition}   from  '../../app/lib/inputValidation'

import {useInput} from '../../hooks/useInput'
  
type RegexPatterns = {
    name: RegExp;
    mail: RegExp;
};


  const regexPatterns:RegexPatterns={name:/^[A-Za-z\s'-]+$/,mail:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}

  const phoneNumberRegexPattern =/^(\+91|\+91\-|0)?[789]\d{9}$/;

const SubScribe = () => {

    const [errors, setErrors] = useState({ name: '', mail: '' });

    const [phoneNumberValidations, setPhoneNumberValidations] = useState<string>('');

 // Function to extract data's from the form object 
    const getFormDatas=(e:React.FormEvent<HTMLFormElement>)=>{
        const formData=new FormData(e.currentTarget);
        const formObject = Object.fromEntries(formData.entries());    
        const formObjectKeys=Object.keys(formObject);
        return {formObjectKeys,formObject};
    }

// Form Submit Logic
  const handleSubscribeForm=(e:React.FormEvent<HTMLFormElement>)=>{

    e.preventDefault();
    const error:any={}
    const {formObjectKeys,formObject}=getFormDatas(e)

    formObjectKeys.forEach(formObjectKey=>{
        if(isItEmpty(formObject[formObjectKey])){        
            error[formObjectKey]="Cannot Be Empty" 
        }
        else if(!regexPatternCondition(regexPatterns[formObjectKey as keyof RegexPatterns],formObject[formObjectKey] )){
            error[formObjectKey]=`Enter a Valid ${formObjectKey}`;
        }
    })

    const hasError = Object.values(error).some(err => err);
    if (hasError) {
    setErrors(error);
    } else {
    setErrors({ name: '', mail: '' });
    alert("Successfully Subscribed");
    }
}

// Validation logic for Forms 
  const  handlePhoneNumberCheck=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData=new FormData(e.currentTarget);
    const phoneNumber=formData.get('phoneNumber')
    let error:string=''

    error=isItEmpty(phoneNumber)?'*Field Cannot be Empty':!regexPatternCondition(phoneNumberRegexPattern,phoneNumber)?'*Enter a Valid PhoneNumber':'';

    error ? setPhoneNumberValidations(error):setPhoneNumberValidations('');

    !error && alert("Please Check the link")

}

  
      
  return (   
     <section className={subscribeStyles.exclusiveOfferSection}>
         <div className={subscribeStyles.subscriptionContent}>
           <h2 className={subscribeStyles.subscriptionHeading}>Subscribe here for exclusive offers and updates!</h2>

           <form className={subscribeStyles.userInfoContainer} id={subscribeStyles.subscribeNewsLetter} onSubmit={handleSubscribeForm}  >
              <div className={subscribeStyles.userInputBoxes}>
                <Input   placeholder="Name" name="name"     erroMessage={errors.name} cssClasses={subscribeStyles.inputFlex1}/>
                <Input    placeholder="Email" name="mail" erroMessage={errors.mail} cssClasses={subscribeStyles.inputFlex1}/>
              </div>
            <p  className={subscribeStyles.subscriptionDescription}>Don&apos;t miss out! enter your email and your name, then hit         subscribe to unlock a world of special offers and details.</p>
            <CustomButton type="submit" className={`${subscribeStyles.subscriptionButton} border-0 pointer`}>Subscribe</CustomButton>
            </form>

        </div>


     {/*  Container for the app download content */}
       <div className={subscribeStyles.appDownloadContent}>
        {/* <Image/> Container */}
        <Image src="/images/AppPreview.png" width="231" height="417" alt="application on phine Screen" className={subscribeStyles.appPhone}/>
         {/*  Container for download-related information*/}
        <div className={subscribeStyles.downloadInfo}>
            {/* <!-- Text paragraph for download instruction --> */}
             <p  id={subscribeStyles.downloadInstruction}>Enter your number and receive  a direct link to download the app</p>
                {/* <!-- Container for phone number input and button --> */}
               <form id={subscribeStyles.inputGroup} onSubmit={handlePhoneNumberCheck}>
               <Input placeholder="Enter Phone Number" name="phoneNumber"  erroMessage={phoneNumberValidations} cssClasses={subscribeStyles.inputFlex1} erroMessagClass="black"/>
                      <CustomButton type="submit" className={subscribeStyles.generateLinkButton}>Get The Link</CustomButton>
               </form>
                 {/* <!-- Container for app store icons --> */}
               <div  className={subscribeStyles.storeIconsContainer}  id="icons">
                <p  className={subscribeStyles.storeIconsContainerText}>Get in on</p>
                <span className={subscribeStyles.storeIcons}>
                   <Image src="/images/PlayStore-White-logo.svg" width={103} height={30} alt="PlayStore-White-logo"/>
                   <Image src="/images/AppStore-white-logo.svg"  width={103} height={30}  alt="AppStore-white-logo"/>
               </span>
               </div>
        </div>

    </div>
      </section>
  )
}

export default SubScribe;
