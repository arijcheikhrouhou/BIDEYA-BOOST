import Image from "next/image";
import Nav from "./components/homePage/nav"
import Footer from "./components/homePage/footer"
import Hero from "./components/homePage/home"
import About from "./components/homePage/aboutUs";
import Categorie  from "./components/homePage/categorie";
import Info from "./components/homePage/infoSession"
import BOOKING from "./components/boocking/boock";
import Confirm from "./components/boocking/confirm"
import Hackathon  from "./components/hackaton/hackaton";
import Conference from "./components/conference/conference";


import Test2 from "./components/test2/test"

export default function Home() {
  return (
    <div >
    <Nav />
    <Hero />
    <About />
    <Categorie/>
  <Info/>
    <Footer/>
    <BOOKING/>
    <Confirm/>
    <Hackathon/>
    <Conference/>

   
    <Test2/>


    

  
    </div>
  );
}
