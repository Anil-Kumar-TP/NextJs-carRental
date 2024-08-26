
// NavBar Link Types
export type NavLink={navItem:string,href:string}

export type CalendarInputProps ={ icon?: string ,className?:string,children:React.ReactNode,backgroundColor?:string}

export type CustomButtonProps= {
    children: React.ReactNode;    
    className?: string;          
    onClick?: () => void;         
    isSelected?: boolean;         
    type?: 'button' | 'submit' | 'reset'; 
  }

 export type carItems = {
  id: number;
  imageSrc: string;
  title: string;
  about: string;
  seating: number;
  vehicleGearType: string;
  Doors: number;
  AirConditioner: string;
  price: number;
 }
  
 export  type  CompanyBranch= {
    location: string;
    icon: string;      
    altText: string;   
  }
  