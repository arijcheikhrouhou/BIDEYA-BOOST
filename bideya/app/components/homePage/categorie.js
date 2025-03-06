const Categories = () => {
  const categories = [
    {
      title: "Sports",
      description:
        "Free sports education. This is the first step towards a career in sports writing. You have to be well acquainted with the rules.",
      image: "/sport.png",
      bgColor: "bg-[#AAC6FC]",
      borderColor: "border-white"
    },
    {
      title: "Finance",
      description:
        "Financial free education content can help fill your sales funnel with qualified leads, but only when it's considered strategically.",
      image: "/finance.png",
      bgColor: "bg-[#7FD7C2]",
      borderColor: "border-white"
    },
    {
      title: "Science",
      description:
        "Dive into science education to explore innovative ideas and enhance your knowledge.",
      image: "/medecin.png",
      bgColor: "bg-[#FBCE01]",
      borderColor: "border-white"
    },
    {
      title: "Design",
      description:
        "Learn the basics of design and improve your creativity with free educational content.",
      image: "/image-design.png",
      bgColor: "bg-[#EFBED3]",
      borderColor: "border-white"
    }
  ];

  return (
    <section className="flex justify-center items-center bg-white p-6">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4">
        
        {/* Sidebar Categories */}
        <div className="bg-yellow-500 text-black font-bold text-2xl p-2 rounded-lg flex items-center md:w-1/6 justify-center">
          <span className="rotate-90 md:rotate-0">Categories</span>
        </div>
        
        {/* Grid des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {categories.map((item, index) => (
            <div key={index} className={`flex items-center p-6 rounded-xl shadow-md ${item.bgColor}`}>
              
              {/* Image avec cadre plus grand et bordure blanche */}
              <div className="w-60 h-60 rounded-lg border-4 border-white p-3 shadow-md mr-6 flex justify-center items-center">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-md" />
              </div>

              {/* Texte */}
              <div>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="text-black text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
