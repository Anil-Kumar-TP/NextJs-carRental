'use client'
import React, { useState } from 'react'
import accordianStyles from './accordian.module.css';
import Image from 'next/image';

// Define the type for AccordionItem
type AccordionItem = {
    id:number,
    question: string;
    answer: string;
  };
  
  // Define your array of accordion items
  const accordionItems: AccordionItem[] = [
    {
        id:1,
      question: "What is my eligibility to book a car?",
      answer: "You should be 18 years old or above and must possess a valid driving license."
    },
    {
        id:2,
      question: "Can I book for any period of time?",
      answer: "You should be 18 years old or above and must possess a valid driving license."
    },
    {
        id:3,
      question: "Can I opt for a longer period?",
      answer: "You should be 18 years old or above and must possess a valid driving license."
    },
    {
        id:4,
      question: "Can I book a one-way trip?",
      answer: "You should be 18 years old or above and must possess a valid driving license."
    }
  ];
  
  

const Accordian = () => {
  
   // State to track the currently active accordion item by its id
   const[activeIndex,setActiveIndex]=useState(-4);

   // Function to handle the display of accordion content
   const handleAccordianDisplay=(id:number)=>{
    if(activeIndex===id){
        setActiveIndex(-1)
    }
    else{
        setActiveIndex(id)
    }

   }


  return (
    <section className={accordianStyles.frequentlyAskedQuestions}>
            <h2 >Frequently asked questions</h2>
         { accordionItems.map(accordionItem=>{
            return  <div className={`${accordianStyles.accordianItem}  `} key={accordionItem.id}>
            {/* "accordian-button border-0" */}
            <button onClick={()=>handleAccordianDisplay(accordionItem.id)} className={accordianStyles.accordianButton}>{accordionItem.question} <Image  className={ activeIndex===accordionItem.id? accordianStyles.rotate90:accordianStyles.rotate45} src="icons/xmark.svg" width={24} height={24} alt='close-button'/></button>
            {activeIndex===accordionItem.id &&
             <div className={accordianStyles.accordianContent}>
                <p>{accordionItem.answer}</p>
            </div>
           } 
          </div>
         })}

    </section>

  )
}

export default Accordian
