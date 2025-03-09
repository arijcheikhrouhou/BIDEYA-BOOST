 // pour le docier guide : 
 import React from 'react';
import Navi from '@/app/components/LeGuide/G_Navigateur';
import Rguide from '@/app/components/LeGuide/G_Rguide';
import BRech from '@/app/components/LeGuide/G_BRech';
import LesRectangle from '@/app/components/LeGuide/G_LesRectangles';
import Bande from '@/app/components/LeGuide/G_Bande';

const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Composant Navigateur (En-tête, liste et bouton "Get Started") */}
      <Navi>
        /</Navi>

      {/* Composant R_guide (Rectangle "Guide" et texte "Guide") */}
      <Rguide>

      </Rguide>

      {/* Composant BRech (Barre de recherche, phrase centrée et ligne "SUGGESTION") */}
      <BRech>
      </BRech>

      {/* Composant LesRectangle (4 rectangles avec leur contenu) */}
      <LesRectangle>

      </LesRectangle>

      {/* Composant Bande (Bande en bas de la page) */}
      <Bande>

      </Bande>
    </div>
  );
};
export default Page;



// pour la medcine 
import React from 'react';
import Navi from '@/app/components/MedcinePage/M_Navigateur';
import Parag from '@/app/components/MedcinePage/M_Parag';
import Titre from './components/MedcinePage/Titre';
import Bande from './components/MedcinePage/Bande';
import LesCarreau from './components/MedcinePage/LesCarreau';


const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
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

export default Page;





//Pour l'ingenieurie 
import React from 'react';
import Bande from './components/EngineeringPage/Bande';
import Cadre from '@/app/components/EngineeringPage/EN_LesCarreeaux';
import Navi from '@/app/components/EngineeringPage/EN_Navigateur';
import Parag from '@/app/components/EngineeringPage/EN_Paragraphe';
import Titre from '@/app/components/EngineeringPage/En_Titre';


const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* La bordure en bas */}
      <Bande>

      </Bande>
      {/* Le navigateur en haut */}
      <Navi>

      </Navi>
      {/*Le cadre avec la paragraphe */}
      <Parag>

      </Parag>
      {/*Le titre*/}
      <Titre>

      </Titre>
      {/*les 4 carré avec leur contenu*/}
      <Cadre>
        
      </Cadre>



      
    </div>
  );
};

export default Page;






// education page
import React from 'react';
import Bande from './components/EducationPage/ED_Bande';
import Navi from '@/app/components/EducationPage/ED_Navigateur';
import Parag from '@/app/components/EducationPage/ED_Parag';
import Titre from '@/app/components/EducationPage/ED_Titre';
import Cadre from '@/app/components/EducationPage/ED_LesCadres';


const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* La bordure en bas */}
      <Bande>

      </Bande>
      {/* Le navigateur en haut */}
      <Navi>

      </Navi>
      {/*Le cadre avec la paragraphe */}
      <Parag>

      </Parag>
      {/*Le titre*/}
      <Titre>

      </Titre>
      {/* les 4 cadres et leur contenu */}
      <Cadre>
        
      </Cadre>

      
    </div>
  );
};

export default Page;





// biseness page
import React from 'react';
import Bande from '@/app/components/BusinessPage.js/B_Bande';
import Navi from '@/app/components/BusinessPage.js/B_Navigateur';
import Parag from "@/app/components/BusinessPage.js/B_Parag";
import Titre from '@/app/components/BusinessPage.js/B_Titre';
import Cadre from '@/app/components/BusinessPage.js/B_LesCadres';

const Page = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>


      {/* Composant Bande (Bande en bas de la page) */}
      <Bande>

      </Bande>
      {/* Composant Navigateur (En-tête, liste et bouton "Get Started") */}
      <Navi>

      </Navi>
      {/* la paragraphe de business */}
      <Parag>

      </Parag>
      {/* Le titre */}
      <Titre>

      </Titre>
      {/* les 4 cadres */}
      <Cadre>
        
      </Cadre>

    </div>
  );
};
export default Page;