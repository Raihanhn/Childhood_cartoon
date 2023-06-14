import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Category from "@/components/Category";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import FrequentlyAskQuestion from "@/components/FrequentlyAskQuestion";
import Header from "@/components/Header";
import Ourservices from "@/components/Ourservices";
import Pricing from "@/components/Pricing";


export default function Home() {
  return (
    <>
     <Header/>
     <Category/>
     <About/>
     <Ourservices/>
     <CallToAction/>
     <Description/>
     <Pricing/>
     <FrequentlyAskQuestion/>
     <Footer/>
    </>
  )
}
