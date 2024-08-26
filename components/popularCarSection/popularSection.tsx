import popularSectionStyles from './popularSection.module.css';
import Card from '../ui/card';
import CartItem from './cartItem'
import { CARD_ITEMS } from '@/constants/MainPage';

const popularSection = () => {
  return (
    <div className={popularSectionStyles.popularCarSection}>
        <h2>Most Popular Cars</h2>
        <div className={popularSectionStyles.popularCarScrollContainer}>
           {CARD_ITEMS.map(cardItem=>{
               return <CartItem  key={cardItem.id} cartItem={cardItem}/>

           })}  
        </div>
    </div>
  )
}

export default popularSection;