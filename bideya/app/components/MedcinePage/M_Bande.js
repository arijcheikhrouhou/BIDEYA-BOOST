import React from 'react';
import { FaBookOpen, FaClipboardList, FaHandshake } from 'react-icons/fa'; // Import des icônes
import { AiOutlineBulb } from 'react-icons/ai'; // Import de l'icône AiOutlineBulb
import { BsPcDisplay } from 'react-icons/bs'; // Import de l'icône BsPcDisplay
import { IoChatbubblesOutline } from 'react-icons/io5'; // Import de l'icône IoChatbubblesOutline
import { GiTeacher } from 'react-icons/gi'; // Import de l'icône GiTeacher

const WorkshopFooter = () => {
  return (
    <footer
      style={{
        width: '100%', // Full width of the screen
        height: '70px', // Height of the footer
        backgroundColor: '#013069', // Background color
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center content horizontally
        boxSizing: 'border-box', // Ensure padding and border are included in the element's total width and height
        overflowX: 'hidden', // Prevent horizontal scrolling
        position: 'fixed', // Fix the footer at the bottom of the page
        bottom: '0', // Position at the bottom
        left: '0', // Align to the left
        zIndex: '1000', // Ensure the footer is above other content
      }}
    >
      {/* Carré blanc sur la bordure */}
      <div
        style={{
          position: 'absolute', // Position absolue pour le placer sur la bordure
          top: '-30px', // Déplace le carré vers le haut (moitié hors de la bande)
          right: '698px', // Déplace le carré vers la droite
          width: '100px', // Largeur du carré
          height: '90px', // Hauteur du carré
          backgroundColor: 'white', // Couleur de fond
          borderRadius: '12px', // Coins arrondis
        }}
      ></div>

      
      {/* Conteneur pour les icônes */}
      <div
        style={{
          display: 'flex', // Disposition en ligne
          gap: '225px', // Espace entre les icônes (augmenté pour plus d'espace)
          maxWidth: '100%', // Largeur maximale de la ligne d'icônes
          padding: '10px', // Espace autour des icônes
          position: 'relative', // Add relative positioning for absolute children
        }}
      >
        {/* Icône GiTeacher */}
        <div
          style={{
            width: '50px', // Largeur de l'icône
            height: '50px', // Hauteur de l'icône
            color: '#F9C85D', // Couleur de l'icône
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
          }}
        >
          <GiTeacher style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
        </div>

        {/* Icône FaHandshake */}
        <div
          style={{
            width: '50px', // Largeur de l'icône
            height: '50px', // Hauteur de l'icône
            color: '#F9C85D', // Couleur de l'icône
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
          }}
        >
          <FaHandshake style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
        </div>

        {/* Icône IoChatbubblesOutline */}
        <div
          style={{
            width: '50px', // Largeur de l'icône
            height: '50px', // Hauteur de l'icône
            color: '#F9C85D', // Couleur de l'icône
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
          }}
        >
          <IoChatbubblesOutline style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
        </div>

        {/* Icône BsPcDisplay */}
        <div
          style={{
            width: '50px', // Largeur de l'icône
            height: '50px', // Hauteur de l'icône
            color: '#F9C85D', // Couleur de l'icône
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
          }}
        >
          <BsPcDisplay style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
        </div>

        {/* Icône FaBookOpen */}
        <div
          style={{
            width: '50px', // Largeur de l'icône
            height: '50px', // Hauteur de l'icône
            color: '#013069', // Couleur de l'icône
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
          }}
        >
          <FaBookOpen style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
        </div>
        {/* Icon AiOutlineBulb on the border */}
      <div
        style={{
          
         
          right: '508px', // Ajustez cette valeur pour centrer l'icône sur le carré blanc
          width: '50px', // Largeur de l'icône
          height: '50px', // Hauteur de l'icône
          color: '#F9C85D', // Couleur de l'icône
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
        }}
      >
        <AiOutlineBulb style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
      </div>


        {/* Icône FaClipboardList */}
        <div
          style={{
            width: '50px', // Largeur de l'icône
            height: '50px', // Hauteur de l'icône
            color: '#F9C85D', // Couleur de l'icône
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
          }}
        >
          <FaClipboardList style={{ fontSize: '40px' }} /> {/* Taille de l'icône */}
        </div>
      </div>
    </footer>
  );
};

export default WorkshopFooter;