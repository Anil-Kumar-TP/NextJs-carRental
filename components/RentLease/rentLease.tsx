import Image from "next/image";
import React from "react";

import rentalStyles from "./rentLease.module.css";

const steps = [
  {
    stepNumber: 1,
    icon: "/icons/rentLease/Fading-Location.svg",
    alt:"Fading Location Iocn",
    description:
      "Select the location. Browse through our available options and find the perfect car to suit your needs",
  },
  {
    stepNumber: 2,
    icon: "/icons/rentLease/Fading-Calender.svg",
    alt:"Fading Calendar Iocn",
    description: "Choose your desired Pick-Up date and time.",
  },
  {
    stepNumber: 3,
    icon: "/icons/rentLease/Fading-Car-logo.svg",
    alt:"Fading Car Iocn",
    description:
      "Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.",
  },
];
const rentLease = () => {
  return (
    //  Rent/Lease in Three easy steps
    <section className={rentalStyles.rentalInstructions}>
      <h2>Rent/Lease In three easy steps</h2>
      <div className={rentalStyles.stepsContainer}>
        {/*  Step Number */}
        {steps.map((step) => {
          return <div key={step.stepNumber} className={rentalStyles.stepItem}>
            <h3 className={rentalStyles.stepNumber}>0{step.stepNumber}</h3>
            {/*Container for step details (icon + text) */}
            <div className={rentalStyles.stepDetails}>
              {/* <!-- Icon representing the step --> */}
              <Image src={step.icon} alt={step.alt} width={46} height={46}/>
              {/* <!-- Text description for the step --> */}
              <p className={rentalStyles.stepDescription}>
                {step.description}
              </p>
            </div>
          </div>;
        })}
      </div>
    </section>
  );
};

export default rentLease;
