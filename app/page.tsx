import Image from "next/image";
import Page from "@/components/ui/page";
import pageStyles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import MobileBooking from "@/components/mobileVew/mobileBooking";
import Carousel from "@/components/carousel/carousel";
import PopularSection from "@/components/popularCarSection/popularSection";
import SubScribe  from "@/components/Subscribe/subScribe"
import RentalStyles  from "@/components/RentLease/rentLease"
import CompanyLocation   from "@/components/Locations/companyLocation"
import Accordian from "@/components/accordian/accordian";
import Footer from "@/components/footer/footer";
// import MobileBooking from "@/components/mobileVew/mobileBooking";
export default function Home() {
  return (
    <>
      <Page>
            <Hero/>
            {/* To display only for Mobile Version */}
             <MobileBooking/>
             <Carousel/>
             <PopularSection/>
             <SubScribe/>
             <RentalStyles/>
             <CompanyLocation/>
             <Accordian/>
             <Footer/>
      </Page>
    </> 
  );
}
