'use client'
import Image from 'next/image';
import Link from 'next/link';
import navBarStyles from './NavBar.module.css';
import { useState } from 'react';
import { NAV_LINKS, SOCIAL_MEDIA_ICONS } from '@/constants/navBar';
import { NavLink } from '@/types/Types';



const NavBar = () => {
   const[openNavigation,setOpenNavigation]= useState(false);
    
  //  To show the Side Bar
   const setOpenNavigationHandler=()=>{
    setOpenNavigation(true);
   }

// to close the Side Bar
   const closeNavigationHandler=()=>{
    setOpenNavigation(false);
   }

//  Handlr Navigation
  const handleNavigateTo=()=>{
    setOpenNavigation(false);
  }

    return (
    <header className={navBarStyles.headerStyles}>
        {/* The Social Media Icons */}
        <div className={navBarStyles.socialMediaIconConatiner}>
            {SOCIAL_MEDIA_ICONS.map((socialMediaIcon: { icon: string, link: string }, index: number)=>{
                 return <Link href={socialMediaIcon.link} key={index} target="_blank"><Image className={navBarStyles.socialMediaIcons} src={socialMediaIcon.icon} alt='facebook Icon' width={14} height={14}/></Link>
            })}           
        </div>

        {/* Nav Bar Container */}
         <nav className={navBarStyles.mainNavBar}>
              <div className={navBarStyles.BrandlogoHamburger}>
                {/* The Company Branding */}
              <Image src='images/Branding.svg' className={`${navBarStyles.branding}  ${navBarStyles.cursorPointer}`} width={354} height={52.6}  alt='Company Branding'/>
               {/* HamBurger Menu */}
              <Image src='icons/charm_menu-hamburger.svg' width={24} height={24}  alt='HamBurger Menu'  id={navBarStyles.hamburgerMenu} onClick={setOpenNavigationHandler}/>
                {/* Close Button */}
               { openNavigation && <Image src='/icons/Close-Icon.svg' id={navBarStyles.closeButton} width={24} height={24} alt='Close Menu Button' onClick={closeNavigationHandler}/>}
              </div>
                {/*tO  Display the the nav Menu Items  Menu Bar */}
                <div className={`${navBarStyles.navBarLinks} ${openNavigation?navBarStyles.toggleDisplay:undefined}`}>
                {NAV_LINKS.map((navLink:NavLink)=>{
                return <Link className={navBarStyles.linkStyles} onClick={handleNavigateTo} key={navLink.navItem} href={navLink.href}>{navLink.navItem}</Link>
            })}

              <div className={navBarStyles.cursorPointer}>
                 <Image src="icons/Bell.svg" alt="Bell-Icon" width={24} height={24}/>
                 <Image src="images/Person.svg" alt="Login-Button" width={114} height={29}/>
              </div>

              <Image  src="images/LoginButton.svg" alt="Login-Button" className={navBarStyles.loginButton} width={114} height={29}/>
                
              </div>
        </nav>
            <p className={navBarStyles.serviceInfo}>Sunday Pick Up/Drop-Off <span className ={navBarStyles.serviceDetails}
            >only at Dubai Silicon Oasis & Habtoor Grand Sales Counters | All
            Rates inclusive of VAT. T&C’s apply | Follow us on Social Media for
           </span></p>
    </header>
  )
}

export default NavBar
