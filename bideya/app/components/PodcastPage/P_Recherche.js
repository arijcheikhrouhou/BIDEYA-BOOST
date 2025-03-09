import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6'; // Import de l'icône FaMagnifyingGlass

const BRech = () => {
  return (
    <>
      {/* Barre de recherche */}
      <div
        style={{
          position: 'absolute',
          top: '25%', // Position verticale
          left: 'calc(20% + 350px)', // Position à droite du rectangle "GUIDE"
          width: '1000px', // Largeur de la barre de recherche
          height: '58px', // Hauteur de la barre de recherche
          backgroundColor: 'white', // Fond blanc
          border: '2px solid #013069', // Bordure de couleur #013069
          borderRadius: '12px', // Coins arrondis
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px', // Espace interne pour le texte
        }}
      >
        {/* Champ de saisie */}
        <input
          type="text"
          placeholder="What do you want to play?"
          style={{
            width: '100%', // Prend toute la largeur disponible
            border: 'none', // Pas de bordure
            outline: 'none', // Pas de contour lors du focus
            fontSize: '24px', // Taille du texte
            backgroundColor: 'transparent', // Fond transparent
          }}
        />

        {/* Icône FaMagnifyingGlass */}
        <div
          style={{
            color: '#013069', // Couleur de l'icône
            cursor: 'pointer', // Curseur en forme de main pour indiquer un bouton
            marginLeft: '16px', // Espace entre le champ de saisie et l'icône
          }}
        >
          <FaMagnifyingGlass style={{ fontSize: '24px' }} /> {/* Taille de l'icône */}
        </div>
      </div>
    </>
  );
};

export default BRech;