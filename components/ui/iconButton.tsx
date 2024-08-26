import Image from "next/image"
import iconButtonStyles from './iconButton.module.css';

type IconButton={
    iconButton:string,
    altText?:string
}

const iconButton = ({iconButton,altText="Icon Button"}:IconButton) => {
  return (
    <div className={iconButtonStyles.backgroundWhite}>
          <Image className={iconButtonStyles.buttonImage} src={iconButton} width={34} height={26} alt={altText}/>  
    </div>
  )
}

export default iconButton
