type FooterNavItem= {
    label: string;
    link: string; // You can add a link property if needed
  }
  
  type FooterNavSection= {
    section: string;
    items: FooterNavItem[];
  }
  
  export const footerNavSections: FooterNavSection[] = [
    {
      section: "main",
      items: [
        { label: "Home", link: "#" },
        { label: "About Us", link: "#" },
        { label: "Services", link: "#" },
      ],
    },
    {
      section: "offers",
      items: [
        { label: "Offers", link: "#" },
        { label: "Location", link: "#" },
        { label: "Contact Us", link: "#" },
      ],
    },
    {
      section: "legal",
      items: [
        { label: "FAQ", link: "#" },
        { label: "Privacy Policy", link: "#" },
        { label: "Service Request", link: "#" },
      ],
    },
    {
      section: "careers",
      items: [
        { label: "Careers", link: "#" },
        { label: "Terms & Condition", link: "#" },
      ],
    },
  ];



  type NavItem = {
    label: string;
    href: string;
  };

  export const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "Offers", href: "#" },
    { label: "Career", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Locations", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Service Request", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact Us", href: "#" },
  ];


  type SocialMediaLink = {
    href: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  };
  
  export const socialMediaLinks: SocialMediaLink[] = [
    {
      href: "#",
      src: "/icons/footer/Facebookicon.svg",
      alt: "Facebook Social Media Icon",
      width: 16,
      height: 16,
      className: "imageBackgrounColorWhite",
    },
    {
      href: "#",
      src: "/icons/footer/Twiiter.svg",
      alt: "X Social Media Icon",
      width: 16,
      height: 16,
      className: "imageBackgrounColorWhite",
    },
    {
      href: "#",
      src: "/icons/footer/Instagram.svg",
      alt: "Instagram Social Media Icon",
      width: 16,
      height: 16,
      className: "imageBackgrounColorBlacK",
    },
    {
      href: "#",
      src: "/icons/footer/LinkedIn.svg",
      alt: "LinkedIn Social Media Icon",
      width: 16,
      height: 16,
      className: "imageBackgrounColorBlacK",
    },
    {
      href: "#",
      src: "/icons/footer/Youtube.svg",
      alt: "YouTube Social Media Icon",
      width: 16,
      height: 16,
      className: "imageBackgrounColorBlacK",
    },
  ];

//  an array of link items, each containing a href and text property  which tells about the fied in which the company is operated
  type LinkItem = {
    href: string;
    text: string;
  };
  
  export const links: LinkItem[] = [
    {
      href: "#",
      text: "Hospitality",
    },
    {
      href: "#",
      text: "Real Estate",
    },
    {
      href: "#",
      text: "Education",
    },
    {
      href: "#",
      text: "Publishing",
    },
    {
      href: "#",
      text: "Automotive",
    },
    {
      href: "#",
      text: "Vehicle Leasing",
    },
  ];
  