"use client"
import Image from 'next/image'
import cardItemStyles from './cartItem.module.css'
import CustomButton from '../ui/customButton'
import { carItems } from '@/types/Types'

interface CartItemProps {
  cartItem: carItems;
}

const cartItem:React.FC<CartItemProps> = ({cartItem}) => {

  const showMore=()=>{
    console.log("Clicked");
    
  }
  return (
        <div className={cardItemStyles.carCard}>
             <Image src={cartItem.imageSrc} width="360" height="290" alt="Mitusbhi Car" className={cardItemStyles["vehicle-image"] }/>
             <div className={cardItemStyles["car-item-details"]}>
                <h3>{cartItem.title}</h3>
                <p className={cardItemStyles["car-item-description"]}>{cartItem.about}.</p>

                <div className={cardItemStyles["vehicle-info"]}>
                    {/* <!-- Each Items tells about the  Specification  of the Vehicle--> */}
                    <div>
                        <Image src="/icons/Seating-Capacity.svg" width="12" height="15" alt="Seating-Capacity"/>
                        <p>{cartItem.seating} People</p>
                    </div>
                    <div>
                        <Image src="/icons/Vehicle-gear-type.svg" width="12" height="15" alt="Vehicle-gear-type"/>
                         <p> {cartItem.vehicleGearType}</p>
                    </div>
                    <div>
                        <Image src="/icons/car-door.svg" width="12" height="15" alt="car-door"/>
                        <p>{cartItem.Doors} Doors</p>
                    </div>
                    <div>
                        <Image src="./icons/air-conditioner.svg" width="12" height="15" alt="Air-conditioner"/>
                       <p> {cartItem.AirConditioner}</p>
                    </div>
                  </div>
                  <div className={cardItemStyles["car-item-pricing"]}>
                     <p className={cardItemStyles["car-item-price"]}> {cartItem.price}/Monthly</p>
                     <CustomButton   onClick={showMore}
                         className={cardItemStyles["car-item-button"]}>Book Now</CustomButton>
                  </div>
             </div>
    </div>
  )
}

export default cartItem;
