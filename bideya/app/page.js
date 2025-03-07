import Image from "next/image";
import Nav from "./components/homePage/nav"
import Footer from "./components/homePage/footer"
import Hero from "./components/homePage/home"
import About from "./components/homePage/aboutUs";
import Categorie  from "./components/homePage/categorie";

import BOOKING from "./components/boocking/boock";
import Confirm from "./components/boocking/confirm"
import Hackathon  from "./components/hackaton/hackaton";
import Conference from "./components/conference/conference";
import RelSection from "./components/RelSection/relsection"

import Test2 from "./components/test2/test"
import Workshop from "./components/workshop/workshp"
export default function Home() {
  return (
    <div >
    <Nav />
    <Hero />
    <About />
    <Categorie/>
  
    <Footer/>
    <BOOKING/>
    <Confirm/>
    <Hackathon/>
    <Conference/>

   
    <Test2/>
    <RelSection/>
    <Workshop/>


    

  
    </div>
  );
}
