import Image from "next/image";
import Nav from "./components/homePage/nav"
import Footer from "./components/homePage/footer"
import Hero from "./components/homePage/home"
import About from "./components/homePage/aboutUs";
import Categorie  from "./components/homePage/categorie";
import InfoSession from "./components/homePage/infoSession"
import BOOKING from "./components/boocking/boock";
import Confirm from "./components/boocking/confirm"
import Hackathon  from "./components/hackaton/hackaton";
import Conference from "./components/conference/conference";
import RelSection from "./components/RelSection/relsection"

import Test2 from "./components/test2/test"
import Workshop from "./components/workshop/workshp"
import React from 'react';
import Navi from '@/app/components/MedcinePage/M_Navigateur';
import Parag from '@/app/components/MedcinePage/M_Parag';
import Titre from './components/MedcinePage/M_Titre';
import Bande from './components/MedcinePage/M_Bande';
import LesCarreau from './components/MedcinePage/M_LesCarreau';
export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
    <Nav />
    <Hero />
    <About />
    <Categorie/>
  
    <Footer/>
    <BOOKING/>
    <Confirm/>
    <Hackathon/>
    <Conference/>
    <InfoSession/>

   
    <Test2/>
    <RelSection/>
    <Workshop/>
      {/* Composant Navigateur (En-tête, liste et bouton "Get Started") */}
      <Navi>
        /</Navi>

      {/* La paragraphe de medecine avec le rectangle */}
      <Parag>

      </Parag>

      {/* Le titre de cette page */}
      <Titre>

      </Titre>

      {/* La bordure en bas */}
      <Bande>

      </Bande>
      
      {/* Les 4 rectangle avec leur continue */}
      <LesCarreau>

      </LesCarreau>
    </div>
  );
};

