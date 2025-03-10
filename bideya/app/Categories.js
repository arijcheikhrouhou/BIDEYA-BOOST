import { useState } from "react";
import { Info, X } from "lucide-react";
import '../styles.css';

const Button = ({ children, onClick, variant = "default" }) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className }) => (
  <div className={`card ${className}`}>{children}</div>
);

const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

const categories = [
  {
    title: "Science & Technology",
    description:
      "Explore physics, chemistry, and biology while diving into AI, robotics, and space tech. Try experiments, coding, and projects to boost problem-solving and innovation! 🚀",
    color: "card--yellow",
  },
  {
    title: "Sports & Physical Activities",
    description:
      "Boost fitness, teamwork, and discipline through various sports, athletics, and motor skill exercises. Participate in challenges, improve coordination, and stay active for a healthier lifestyle! 💪🔥",
    color: "card--blue",
  },
  {
    title: "Arts & Creativity",
    description:
      "Unleash your imagination through painting, music, writing, and design. Explore creative expression, develop new skills, and bring ideas to life with hands-on projects! 🎨🎶",
    color: "card--pink",
  },
  {
    title: "Finance & Investment",
    description:
      "Learn budgeting, saving, and smart investing to manage money wisely. Explore financial literacy, stock market basics, and economic principles to build a secure future! 📈💰",
    color: "card--green",
  },
  {
    title: "Finance & Investment",
    description:
      "Learn budgeting, saving, and smart investing to manage money wisely. Explore financial literacy, stock market basics, and economic principles to build a secure future! 📈💰",
    color: "card--green",
  },
];

export default function Categories() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="App">
      <h2 className="text-xl font-bold mb-4">Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className={category.color}>
            <div className="flex justify-between items-center">
              <h3 className="font-bold">{category.title}</h3>
              <Button
                variant="ghost"
                onClick={() =>
                  setExpanded(expanded === index ? null : index)
                }
              >
                {expanded === index ? <X /> : <Info />}
              </Button>
            </div>
            {expanded === index && (
              <CardContent>
                {category.description}
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
