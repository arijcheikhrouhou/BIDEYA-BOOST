// components/NavBar.js
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const NavBar = () => {
  return (
    <>
    <nav className="flex items-center justify-between px-3 py-2 bg-white shadow-sm">
      {/* Logo centré */}

      <div className="text-2xl font-extrabold text-blue-900 ml-8"> {/* Taille et position de "Bideya Boost" */}
        Rel Section
      </div>
      {/* Navigation */}
      <ul className="flex space-x-12 flex-1 justify-center text-blue-700 text-l font-semibold"> {/* Modifications ici */}
      <li>
          <Link href="./infoSession.js" className="text-blue-900 hover:border-b-2">
           Home
          </Link>
        </li>
        <li>
          <Link href="/" className="text-blue-900 hover:border-b-2">
          Booking
          </Link>
        </li>
        <li>
          <Link href="/" className="text-blue-900 hover:border-b-2">
           Podcast
          </Link>
        </li>
        <li>
          <Link href="/" className="text-blue-900 hover:border-b-2 ">
          Reels
          </Link>
        </li>
      
        <li>
          <Link href="/" className="text-blue-700  hover:border-b-2 border-blue-500">
            Features
          </Link>
        </li>
      </ul>

      {/* Icône et bouton alignés à droite */}
      <button className="px-4 py-3 text-blue-900  hover:border-b-2  border-blue-900 rounded-full text-l font-semibold transition-all"
  style={{
    background: 'linear-gradient(to right, #FFC107, #002F6C)', // Dégradé de jaune à bleu
    color: 'black', // Texte noir pour une meilleure lisibilité
  }}
>
  Explore Premium
</button>
    </nav>
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-yellow-500 text-blue-900 font-semibold text-xl px-42 py-20 rounded-lg shadow-lg">
        en cours
      </div>
    </div>
    </>
  );
};

export default NavBar;