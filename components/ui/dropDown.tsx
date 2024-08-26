import Image from 'next/image';
import dropDownStyles from './dropDown.module.css';

type Option ={
    optionLabel: string;
    optionValue: string;
  }
type DropDownProps= {
    optionValues: Option[],
    icon?:string,
    className?:string,
    variantType?:string
  }

  
const dropDown:React.FC<DropDownProps> = ({optionValues,icon,className,variantType}) => {

  let cssClasses=dropDownStyles.normalDropDowm+" border-0 "
  if(variantType=='semi-transparent'){
       cssClasses=dropDownStyles.semiTransparentDropDowm
  } 

  return (
        <div className={dropDownStyles.dropdownContainer}>
           <select id="" className={`${cssClasses}  ${className}`}>
            {optionValues.map((optionValue:Option)=>{
            return <option key={optionValue.optionValue} value={optionValue.optionValue} disabled={optionValue.optionValue==='default'} selected={optionValue.optionValue==='default'} hidden={optionValue.optionValue==='default'}>{optionValue.optionLabel}</option>
        })}
  </select>
        {icon && <Image  className={dropDownStyles.startIcon} src={icon} width={9} height={12} alt='icon'/>}
        </div>
  )
}

export default dropDown
