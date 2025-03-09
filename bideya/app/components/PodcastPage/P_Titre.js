import React from 'react';

const TitrePrincipal = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '806px',
        height: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Titre "Bideya Boost Podcast" */}
      <div
        style={{
          color: '#013069',
          fontSize: '64px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Bideya Boost Podcast
      </div>

      {/* Sous-titre "Listen, Explore, Evolve!" */}
      <div
        style={{
          color: '#013069',
          fontSize: '32px',
          fontWeight: 'normal',
          textAlign: 'center',
          marginTop: '5px',
        }}
      >
        Listen, Explore, Evolve!
      </div>
      
    </div>
  );
};

export default TitrePrincipal;