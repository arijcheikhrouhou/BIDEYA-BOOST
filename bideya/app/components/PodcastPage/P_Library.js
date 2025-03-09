import React from 'react';
import { MdOutlineLibraryMusic } from 'react-icons/md'; // Import de l'icône de bibliothèque
import { CiCirclePlus } from 'react-icons/ci'; // Import de l'icône CiCirclePlus
import { FaArrowRight } from 'react-icons/fa'; // Import de l'icône FaArrowRight
import { GiMagnifyingGlass } from 'react-icons/gi'; // Import de l'icône GiMagnifyingGlass
import { RiPlayList2Fill } from 'react-icons/ri'; // Import de l'icône RiPlayList2Fill
import { MdFavoriteBorder } from 'react-icons/md'; // Import de l'icône MdFavoriteBorder
import { MdOutlinePushPin } from 'react-icons/md'; // Import de l'icône MdOutlinePushPin

const Rectangle = () => {
  return (
    <div
      style={{
        position: 'absolute', // Position absolue pour placer le rectangle
        bottom: '100px', // En bas de la page
        left: '50px', // À gauche de la page
        width: '367px', // Largeur du rectangle
        height: '700px', // Hauteur du rectangle
        backgroundColor: 'white', // Couleur de fond
        border: '2px solid #2F40C4', // Bordure de couleur #2F40C4
        borderRadius: '20px', // Coins arrondis
        padding: '20px', // Espacement intérieur pour l'icône
      }}
    >
      {/* Bouton "Playlists" en haut à gauche */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le bouton
          top: '80px', // En haut du rectangle
          left: '80px', // À gauche du rectangle
          width: '77px', // Largeur du bouton
          height: '37px', // Hauteur du bouton
          backgroundColor: '#D4D3DC', // Couleur de fond du bouton
          borderRadius: '30px', // Coins arrondis
          display: 'flex',
          justifyContent: 'center', // Centre horizontalement
          alignItems: 'center', // Centre verticalement
        }}
      >
        {/* Texte "Playlists" */}
        <div
          style={{
            color: '#013069', // Couleur du texte
            fontSize: '14px', // Taille du texte
            fontWeight: 'bold', // Texte en gras
            width: '74px', // Largeur du texte
            height: '29px', // Hauteur du texte
            display: 'flex',
            justifyContent: 'center', // Centre horizontalement
            alignItems: 'center', // Centre verticalement
            cursor: 'pointer', // Curseur en forme de main au survol
          }}
        >
          Playlists
        </div>
      </div>

      {/* Bouton "GiMagnifyingGlass" juste en dessous de "Playlists" */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le bouton
          top: '120px', // En dessous de "Playlists"
          left: '5px', // Aligné à gauche avec "Playlists"
          width: '77px', // Largeur du bouton
          height: '37px', // Hauteur du bouton
          display: 'flex',
          justifyContent: 'center', // Centre horizontalement
          alignItems: 'center', // Centre verticalement
          cursor: 'pointer', // Change le curseur au survol
        }}
      >
        {/* Icône GiMagnifyingGlass */}
        <GiMagnifyingGlass
          style={{
            color: '#013069', // Couleur de l'icône
            fontSize: '24px', // Taille de l'icône
          }}
        />
      </div>

      {/* Texte "Recents" */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le bouton
          top: '130px', // En dessous de "Playlists"
          left: '250px', // Aligné à gauche avec "Playlists"
          color: '#013069', // Couleur du texte
          fontSize: '17px', // Taille du texte
          fontWeight: 'bold', // Texte en gras
          width: '70px', // Largeur du texte
          height: '9px', // Hauteur du texte
          display: 'flex',
          alignItems: 'center', // Centre verticalement
          cursor: 'pointer', // Change le curseur au survol
        }}
      >
        Recents
      </div>

      {/* Icône RiPlayList2Fill */}
      <RiPlayList2Fill
        style={{
          position: 'absolute', // Position absolue pour placer le bouton
          top: '120px', // En dessous de "Playlists"
          left: '325px', // Aligné à gauche avec "Playlists"
          color: '#013069', // Couleur de l'icône
          fontSize: '24px', // Taille de l'icône
          cursor: 'pointer', // Change le curseur au survol
        }}
      />

      {/* Conteneur pour le texte "Liked Podcasts" et le bouton avec l'icône MdFavoriteBorder */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le conteneur
          bottom: '440px', // En bas du rectangle
          left: '125px', // À gauche du rectangle
          display: 'flex', // Disposition en ligne
          alignItems: 'center', // Centre verticalement
          gap: '10px', // Espace entre le texte et le bouton
        }}
      >
        {/* Texte "Liked Podcasts" */}
        <div
          style={{
            color: '#013069', // Couleur du texte
            fontSize: '18px', // Taille du texte
            fontWeight: 'bold', // Texte en gras
            cursor: 'pointer', // Change le curseur au survol
          }}
        >
          Liked Podcasts
        </div>
      </div>

      {/* Bouton avec l'icône MdFavoriteBorder en bas à gauche */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le bouton
          bottom: '400px', // En bas du rectangle
          left: '20px', // À gauche du rectangle
          width: '88px', // Largeur du bouton
          height: '72px', // Hauteur du bouton
          backgroundColor: '#E8D2F2', // Couleur de fond du bouton
          borderRadius: '15px', // Coins arrondis
          display: 'flex',
          justifyContent: 'center', // Centre horizontalement
          alignItems: 'center', // Centre verticalement
          cursor: 'pointer', // Change le curseur au survol
        }}
      >
        {/* Icône MdFavoriteBorder */}
        <MdFavoriteBorder
          style={{
            color: '#013069', // Couleur de l'icône
            fontSize: '32px', // Taille de l'icône
          }}
        />
      </div>

      {/* Conteneur pour l'icône MdOutlinePushPin et le texte "Playlist 3 Podcasts" */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le conteneur
          bottom: '420px', // En dessous de "Liked Podcasts"
          left: '120px', // Aligné à gauche avec "Liked Podcasts"
          display: 'flex', // Disposition en ligne
          alignItems: 'center', // Centre verticalement
          gap: '8px', // Espace entre l'icône et le texte
        }}
      >
        {/* Bouton avec l'image "Les Brown.png" sous le bouton MdFavoriteBorder */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le bouton
          bottom: '-110px', // En dessous du bouton MdFavoriteBorder
          left: '-100px', // Aligné à gauche avec le bouton MdFavoriteBorder
          width: '88px', // Largeur du bouton
          height: '72px', // Hauteur du bouton
          backgroundColor: '#E8D2F2', // Couleur de fond du bouton
          borderRadius: '15px', // Coins arrondis
          display: 'flex',
          justifyContent: 'center', // Centre horizontalement
          alignItems: 'center', // Centre verticalement
          cursor: 'pointer', // Change le curseur au survol
        }}
      >
        {/* Image "Les Brown.png" */}
        <img
          src="/Les Brown.png" // Chemin de l'image dans le dossier public
          alt="Les Brown"
          style={{
            width: '100%', // Largeur de l'image
            height: '100%', // Hauteur de l'image
            borderRadius: '15px', // Coins arrondis pour correspondre au bouton
            objectFit: 'cover', // Ajuste l'image pour couvrir le bouton
          }}
        />
      </div>
      {/* Bouton avec l'image "tech.png" sous le bouton "Les Brown.png" */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le bouton
          bottom: '-200px', // En dessous du bouton "Les Brown.png"
          left: '-100px', // Aligné à gauche avec le bouton "Les Brown.png"
          width: '88px', // Largeur du bouton
          height: '72px', // Hauteur du bouton
          backgroundColor: '#E8D2F2', // Couleur de fond du bouton
          borderRadius: '15px', // Coins arrondis
          display: 'flex',
          justifyContent: 'center', // Centre horizontalement
          alignItems: 'center', // Centre verticalement
          cursor: 'pointer', // Change le curseur au survol
        }}
      >
        {/* Image "tech.png" */}
        <img
          src="/tech.png" // Chemin de l'image dans le dossier public
          alt="Algorithm Governance Technology"
          style={{
            width: '100%', // Largeur de l'image
            height: '100%', // Hauteur de l'image
            borderRadius: '15px', // Coins arrondis pour correspondre au bouton
            objectFit: 'cover', // Ajuste l'image pour couvrir le bouton
          }}
        />
      </div>

      {/* Conteneur pour le texte "Algorithm Governance Technology" et "Karin Collville" */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le conteneur
          bottom: '-230px', // Aligné avec le bouton de l'image
          left: '-5px', // À droite du bouton de l'image
          display: 'flex', // Disposition en colonne
          flexDirection: 'column', // Alignement vertical
          gap: '4px', // Espace entre les textes
        }}
      >
        {/* Titre "Algorithm Governance Technology" */}
        <div
          style={{
            color: '#013069', // Couleur du texte
            fontSize: '18px', // Taille du texte
            fontWeight: 'bold', // Texte en gras
            cursor: 'pointer', // Change le curseur au survol
          }}
        >
          Algorithm Governance Technology
        </div>

        {/* Sous-titre "Karin Collville" */}
        <div
          style={{
            color: '#817A7A', // Couleur du texte
            fontSize: '14px', // Taille du texte
            cursor: 'pointer', // Change le curseur au survol
          }}
        >
          Karin Collville
        </div>
      </div>
        {/* Icône MdOutlinePushPin */}
        <MdOutlinePushPin
          style={{
            color: '#817A7A', // Couleur de l'icône
            fontSize: '18px', // Taille de l'icône
          }}
        />

        {/* Texte "Playlist 3 Podcasts" */}
        <div
          style={{
            color: '#817A7A', // Couleur du texte
            fontSize: '14px', // Taille du texte
            width: '136px', // Largeur du texte
            height: '11px', // Hauteur du texte
            display: 'flex',
            alignItems: 'center', // Centre verticalement
          }}
        >
          Playlist 3 Podcasts
        </div>
      </div>

      {/* Icône en haut à gauche */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center', // Centre verticalement
        }}
      >
        <MdOutlineLibraryMusic
          style={{
            color: '#2F40C4', // Couleur de l'icône
            fontSize: '32px', // Taille de l'icône
            marginRight: '10px', // Espacement à droite de l'icône
          }}
        />

        {/* Titre "Your library" */}
        <div
          style={{
            color: '#013069', // Couleur du texte
            fontSize: '24px', // Taille du texte
            fontWeight: 'bold', // Texte en gras
            width: '194px', // Largeur du texte
            height: '40px', // Hauteur du texte
            display: 'flex',
            alignItems: 'center', // Centre verticalement
          }}
        >
          Your library
        </div>
        {/* Conteneur pour le texte "Words on Leadership" et "Les Brown" */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer le conteneur
          bottom: '325px', // Aligné avec le bouton de l'image
          left: '125px', // À droite du bouton de l'image
          display: 'flex', // Disposition en colonne
          flexDirection: 'column', // Alignement vertical
          gap: '4px', // Espace entre les textes
        }}
      >
        {/* Titre "Words on Leadership" */}
        <div
          style={{
            color: '#013069', // Couleur du texte
            fontSize: '18px', // Taille du texte
            fontWeight: 'bold', // Texte en gras
            cursor: 'pointer', // Change le curseur au survol
          }}
        >
          Words on Leadership
        </div>

        {/* Sous-titre "Les Brown" */}
        <div
          style={{
            color: '#817A7A', // Couleur du texte
            fontSize: '14px', // Taille du texte
            cursor: 'pointer', // Change le curseur au survol
          }}
        >
          Les Brown
        </div>
      </div>

        {/* Conteneur pour les icônes CiCirclePlus et FaArrowRight */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Icône CiCirclePlus */}
          <CiCirclePlus
            style={{
              color: '#2F40C4', // Couleur de l'icône
              fontSize: '32px', // Taille de l'icône
              cursor: 'pointer', // Change le curseur au survol
            }}
          />

          {/* Icône FaArrowRight */}
          <FaArrowRight
            style={{
              color: '#2F40C4', // Couleur de l'icône
              fontSize: '24px', // Taille de l'icône
              cursor: 'pointer', // Change le curseur au survol
            }}
          />
        </div>
      </div>
      {/* Image "droite.png" en bas du rectangle de la bibliothèque */}
      <div
        style={{
          position: 'absolute', // Position absolue pour placer l'image
          bottom: '20px', // En bas du rectangle
          left: '50%', // Centrée horizontalement
          transform: 'translateX(-50%)', // Centrage précis
          width: '420px', // Largeur de l'image
          height: '100px', // Hauteur de l'image
          display: 'flex',
          justifyContent: 'center', // Centre horizontalement
          alignItems: 'center', // Centre verticalement
        }}
      >
        {/* Image "droite.png" */}
        <img
          src="/droite.png" // Chemin de l'image dans le dossier public
          alt="Droite"
          style={{
            width: '100%', // Largeur de l'image
            height: '100%', // Hauteur de l'image
            borderRadius: '10px', // Coins arrondis
            objectFit: 'cover', // Ajuste l'image pour couvrir l'espace
          }}
        />
      </div>
    </div>
  );
};

export default Rectangle;