import NavBar  from "../homePage/nav";
export default function Home() {
    return (
        <>
        <NavBar/>
      <div className="flex flex-col items-center justify-center  bg-white p-6">
        {/* Titre principal */}
        <h1 className="bg-yellow-500 text-blue-900 font-bold text-2xl px-6 py-2 rounded-md shadow-md">
          Practical workshops
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 text-center mt-4 max-w-2xl">
          Explore our interactive workshops to develop your key skills and build your confidence.
          Participate in hands-on activities tailored to your needs.
        </p>
        
        {/* Section interactive */}
        <div className="bg-blue-200 rounded-lg p-6 mt-8 w-full max-w-4xl shadow-lg">
          <h2 className="text-black font-bold text-xl">Interactive activity area</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Workshops designed to provide you with hands-on experience in technology, art, science, and more.
          </p>
          
          {/* Carrousel d'images (simulé) */}
          <div className="flex items-center mt-4 space-x-4 overflow-x-auto">
            <button className="bg-black text-white rounded-full p-2">❮</button>
            <div className="flex space-x-4">
              <div className="bg-blue-200 p-2 rounded-lg shadow-md">
                <img src="/sport.png" alt="Workshop 1" className="w-32 h-32" />
              </div>
              <div className="bg-blue-200 p-2 rounded-lg shadow-md">
                <img src="/art.png" alt="Workshop 2" className="w-32 h-32" />
              </div>
              <div className="bg-blue-200 p-2 rounded-lg shadow-md">
                <img src="/finance.png" alt="Workshop 3" className="w-32 h-32" />
              </div>
            </div>
            <button className="bg-black text-white rounded-full p-2">❯</button>
          </div>
        </div>
      </div>
      </>
    );
  }
  