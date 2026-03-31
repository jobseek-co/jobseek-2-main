import { Star, ArrowRight, ArrowLeft } from "lucide-react";
import goggle from "../../assets/google (2).png";
import { useRef } from "react";

const SCROLL_AMOUNT = 320; // ⭐ define scroll distance

const Customer = [
  {
    name: "Aiko Tanaka",
    rating: 5,
    review:
      "I had a fantastic experience from start to finish. The interface is intuitive, the process was smooth, and everything worked exactly as expected. I would absolutely recommend this to anyone looking for something reliable and easy to use.",
  },
  {
    name: "Kenji Sato",
    rating: 4,
    review:
      "Overall I'm very happy with the service. It was simple to set up and the performance has been great so far. There was a small delay at one point, but it wasn't a big issue and support handled it quickly.",
  },
  {
    name: "Yuki Nakamura",
    rating: 5,
    review:
      "This exceeded my expectations in so many ways. The attention to detail is impressive and the overall experience feels very polished. I've already recommended it to a few friends.",
  },
  {
    name: "Haruto Suzuki",
    rating: 3,
    review:
      "It's a decent product and does what it promises, but I think there's still room for improvement in terms of speed and customization. I'll keep using it to see how it evolves.",
  },
  {
    name: "Mei Kobayashi",
    rating: 4,
    review:
      "Really good experience overall. The design is clean and modern, and I especially appreciated how easy it was to navigate. A few extra features would make it perfect.",
  },
  {
    name: "Riku Yamamoto",
    rating: 5,
    review:
      "Everything worked flawlessly. Setup was quick, performance is fast, and I love how responsive the interface feels. Definitely one of the better experiences I've had with a product like this.",
  },
  {
    name: "Sora Ito",
    rating: 2,
    review:
      "Unfortunately it didn't fully meet my expectations. Some features felt limited and I ran into a couple of minor bugs. It's not terrible, but I hope future updates improve stability.",
  },
  {
    name: "Hina Watanabe",
    rating: 4,
    review:
      "Very user-friendly and visually appealing. I was able to get started without any confusion, which is a big plus. With a bit more flexibility it would easily be a five-star experience.",
  },
  {
    name: "Takumi Mori",
    rating: 5,
    review:
      "Super impressed with how fast and reliable everything is. The workflow feels natural and efficient, and it saved me a lot of time compared to other options I've tried.",
  },
  {
    name: "Nanami Kato",
    rating: 3,
    review:
      "It's a solid option if you need something simple and functional. I didn't encounter major problems, but it didn't stand out in any particular way either.",
  },
  {
    name: "Daiki Yoshida",
    rating: 4,
    review:
      "Great value for what you get. Performance has been consistent and the overall experience is smooth. I'd love to see more advanced settings in future updates.",
  },
  {
    name: "Mio Abe",
    rating: 5,
    review:
      "I absolutely love it. Everything feels thoughtfully designed and easy to use. It's rare to find something that works this well right out of the box.",
  },
  {
    name: "Kenta Hashimoto",
    rating: 4,
    review:
      "Very pleased with the experience so far. It's reliable and straightforward, and the learning curve is minimal. A few small tweaks would make it even better.",
  },
  {
    name: "Saki Fujita",
    rating: 5,
    review:
      "Fantastic experience overall. The quality and usability are top-notch, and I've had zero issues since I started using it. I'd happily recommend it to others.",
  },
];


function Rating() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-10 flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <h1 className="font-[400] text-white text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.2]">
            Our happy users say about us
          </h1>

          <div className="mt-4">
            <img
              src={goggle}
              alt="Google rating"
              className="h-16 w-auto object-contain"
            />
          </div>

          <p className="text-white/80 mt-4 text-sm sm:text-base leading-relaxed">
            We are grateful to our users for their kind words and testimonials.
            Their success stories motivate us to continually improve the
            platform and provide the best possible job search experience.
          </p>

          <div className="flex gap-3 mt-6">
            <button
              onClick={scrollLeft}
              className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] rounded-full p-3 hover:opacity-90"
            >
              <ArrowLeft size={16} className="text-white" />
            </button>

            <button
              onClick={scrollRight}
              className="bg-gradient-to-r from-[#6857F6] to-[#A549E2] rounded-full p-3 hover:opacity-90"
            >
              <ArrowRight size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-2/3 min-w-0 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {Customer.map((custom, index) => (
              <div
                key={index}
                className="bg-[#1C1E23] w-[300px] sm:w-[420px] min-h-[240px] border border-[#4A3A7680] flex-shrink-0 flex flex-col px-5 py-5 rounded-lg"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={
                        custom.rating >= star
                          ? "fill-purple-500 text-purple-500"
                          : "text-purple-500/40"
                      }
                    />
                  ))}
                </div>

                <p className="text-white/80 text-sm italic mt-3 leading-relaxed flex-1">
                  {custom.review}
                </p>

                <h3 className="text-white font-semibold text-base mt-4 pt-4 border-t border-[#4A3A7680]">
                  {custom.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Rating;