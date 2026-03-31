import { Images, Plus } from "lucide-react";
import img1 from "../../assets/Group-458.jpg.png";
import img2 from "../../assets/Group-464.jpg.png";
import img3 from "../../assets/picture.jpg";
import img4 from "../../assets/Background.png";
const cards = [
  {
    id: 1,
    author: "John",
    Images: img3,
    role: "Web Developer",
  },
  { id: 2, author: "Francis", Images: img1, role: "Designer" },
  {
    id: 3,

    author: "Alice",
    Images: img2,
    role: "Backend Engineer",
  },
  {
    id: 4,

    author: "Mike",
    Images: img1,
    role: "Product Designer",
  },
];

export default function ZigZagSlider() {
  return (
    <div className="w-full overflow-x-auto py-16 no-scrollbar">
      <div className="flex gap-8 px-8">
        {cards.map((card, index) => (
          <div
            key={card.id}
            style={{
              backgroundImage: `url(${card.Images})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={`
    relative min-w-[320px] h-[380px] rounded-3xl p-6 flex flex-col justify-between
    shadow-xl transition-transform duration-300 overflow-hidden
    ${index % 2 === 0 ? "translate-y-6" : "-translate-y-6"}
  `}
          >
            {/* Top */}
            <div className="flex justify-end z-10">
              <button className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6857F6] to-[#A549E2] flex items-center justify-center">
                <Plus size={16} className="text-white" />
              </button>
            </div>

            {/* Footer (BOTTOM LEFT) */}
            <div
              className="absolute bottom-0 left-0 w-full p-2 flex flex-col items-start justify-end"
              style={{
                backgroundImage: `url(${img4})`,
                backgroundSize: "250px",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p className="text-white text-sm">{card.author}</p>
              <p className="text-white/50 text-xs">{card.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
