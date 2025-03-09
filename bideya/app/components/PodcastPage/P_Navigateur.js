// components/NavBar.js
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { CiMicrophoneOn } from 'react-icons/ci'; // Import de l'icône

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-3 py-2 bg-white shadow-sm">
      {/* Logo centré */}
      <div className="text-4xl font-extrabold text-blue-900 ml-8 flex items-center"> {/* Ajout de flex et items-center pour aligner l'icône et le texte */}
        <CiMicrophoneOn className="mr-2" /> {/* Ajout de l'icône avec une marge à droite */}
        Podcast Section
      </div>

      {/* Navigation */}
      <ul className="flex space-x-12 flex-1 justify-center text-blue-700 text-xl font-semibold"> {/* Modifications ici */}
        <li>
          <Link href="/HomePage" className="text-blue-900 hover:text-blue-700">
            Home
          </Link>
        </li>
        <li>
          <Link href="/categories" className="text-blue-900 hover:text-blue-700">
            Booking
          </Link>
        </li>
        <li>
          <Link href="/" className="text-blue-700 hover:text-blue-900 border-b-2 border-blue-500">
            Podcast
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-900 hover:text-blue-700">
            Reels
          </Link>
        </li>
        <li>
          <Link href="./infoSession.js" className="text-blue-900 hover:text-blue-700">
            Features
          </Link>
        </li>
      </ul>

      {/* Icône et bouton alignés à droite */}
      <div className="flex items-center space-x-4 ml-auto">
        <FiSearch className="text-blue-500 w-6 h-6 hover:text-blue-700 cursor-pointer" /> {/* Taille de l'icône augmentée */}
        <button className="px-6 py-3 text-blue-700 border border-blue-700 rounded-full hover:bg-blue-500 hover:text-white text-lg font-semibold"> {/* Taille du bouton augmentée */}
          Explore premium
        </button>
      </div>
    </nav>
  );
};

export default NavBar;