import Image from 'next/image'
import React from 'react'
import footerCssStyles from './footer.module.css'
import Link from 'next/link'


// To Export Constant's Used
import { footerNavSections, links } from '@/constants/footer'
import { navItems } from '@/constants/footer'
import { socialMediaLinks } from '@/constants/footer'

// const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''; 



const footer = () => {
  
 
  return (
    //    Footer Section Regarding its Different Branches 
    <footer className={footerCssStyles.footer}>
           {/* Comapny Profile Section  */}
            <section className={footerCssStyles.companyProfileSection}>
              {/* First Container  showing the Footer Navigation Links  */}
                <div className={footerCssStyles['contact-section-container']}>
                    {/* Brand Logo and the Writings  */}
                    <div className={footerCssStyles["company-logo-section"]}>
                        <Image src="/icons/footer/footer-logo-new.svg"  className={footerCssStyles.footerIcon} alt="Company-Brand-logo" width={56} height={66}/>
                        <p>Member of the Al Habtoor Group</p>
                    </div>
                    {/* Footer-Navigation-Links  */}

                  {/* Display For Desktop View  */}
                    <div className={footerCssStyles['footer-navigation-desktop']}>
                            {/* All the footer links */}
                        {footerNavSections.map(footerNavSection=>{
                            return <div  className={footerCssStyles[`footer-nav-${footerNavSection.section}`]} key={footerNavSection.section}>
                                  { footerNavSection.items.map(footerNavItem=>{
                                    return <Link   href={footerNavItem.link} key={footerNavItem.label}>{footerNavItem.label}</Link>                               
                                  })}
                        </div>
                        })}
                              
                         </div>                         
                               {/* Mobile View Desigin  */}
                                <div className={footerCssStyles["footer-navigation-mobile"]}>
                                    {navItems.map(navItem=>{
                                        return <Link  key={navItem.label} href={navItem.href}>{navItem.label}</Link>
                                    })}
                        </div>
                        {/* Social-Media-Links  */}
                        <div className={footerCssStyles["follow-us-container"]}>
                            <h3>Follow Us On</h3>
                              <div  className= {footerCssStyles.socialMediaLinksContainer}>
                                {socialMediaLinks.map(socialMediaLink=>{
                                    return  <Link key={socialMediaLink.alt} href={socialMediaLink.href}><Image src={socialMediaLink.src} className={footerCssStyles[`${socialMediaLink.className}`]} alt={socialMediaLink.alt} width="16" height="16"/></Link>
                                })}
                              </div>
                            <Image src="/images/SecurelockIcon.svg" width={64} height={24} alt="Secure-Lock-Icon" id={footerCssStyles["secure-Lock-small"]}/>
                        </div>
                </div>
                <div  className={footerCssStyles["sub-companies"]}>
                  <div className={footerCssStyles["parent-company"]}>
                    <h3>Al Habtoor Companies</h3>
                    
                  </div>
                  <div className={footerCssStyles["subCompanies-Container"]}>
                    {links.map(link=>{
                        return  <Link key={link.text} href={link.href}>{link.text}</Link>
                    })}
                       
                  </div>
                  <Image src="/images/Secure-Lock.svg" alt="Secure-Lock-Icon" width={64} height={24} className={footerCssStyles["secure-Lock"]}/>
                </div>
                <div className={footerCssStyles["copyright-content"]}>
                  © 2018 Car rental LLC - All Rights Reserved. 
                </div>
            </section>
    </footer>
  )
}

export default footer
