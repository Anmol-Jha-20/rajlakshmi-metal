// import React from "react";

// export default function Hero() {
//   return (
//     <>
//       <main className="relative">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 h-full">
//             {Array.from({ length: 128 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="border border-gray-600 aspect-square rounded-full"
//               ></div>
//             ))}
//           </div>
//         </div>

//         {/* Hero Background with Image */}
//         <div
//           className="relative min-h-screen bg-cover bg-center"
//           style={{
//             backgroundImage: `url(https://modmetaldesigns.com/wp-content/uploads/2024/09/IMG_0204-1-1536x1053.jpg)`,
//           }}
//         >
//           {/* Overlay for dark effect */}
//           <div className="absolute inset-0 bg-black opacity-50"></div>

//           {/* Text Content - EXACT bottom-left */}
//           <div className="relative z-10 flex items-center min-h-screen">
//             <div className="px-6 pb-12 text-left">
//               <h1 className="text-white font-montserrat text-5xl md:text-6xl font-light mb-4 tracking-wide">
//                 READY TO SHIP
//               </h1>
//               <p className="text-white font-montserrat text-base md:text-lg font-light mb-6 max-w-md">
//                 There’s nothing ordinary about Modern Metal’s Standard Line.
//                 It’s pretty extraordinary – including the lead time!
//               </p>
//               <button className="bg-cyan-600 font-montserrat hover:bg-cyan-700 px-6 py-3 text-white text-sm font-semibold rounded cursor-pointer">
//                 READY TO SHIP
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";

export default function ModernMetalCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "WHAT WE MAKE",
      description:
        "Modern Metal makes precision-laser cut metal grilles, panels and more for residential, hospitality and corporate environments.",
      buttonText: "WHAT WE MAKE",
      backgroundImage:
        "https://modmetaldesigns.com/wp-content/uploads/2022/05/IMG_0243-1-1536x1152.jpg",
      pattern: "orange-vertical",
    },
    {
      id: 2,
      title: "MADE TO ORDER",
      description:
        "Each piece is a custom order and every detail matters. This results in a one-of-a-kind order that's uniquely yours!",
      buttonText: "MADE TO ORDER",
      backgroundImage:
        "https://modmetaldesigns.com/wp-content/uploads/2022/04/5-Brown-Sugar-Kitchen-scaled-2048x1366-1-1536x1025.jpeg",
      pattern: "perforated-panels",
    },
    {
      id: 3,
      title: "READY TO SHIP",
      description:
        "There's nothing ordinary about Modern Metal's Standard Line. It's pretty extraordinary – including the lead time!",
      buttonText: "READY TO SHIP",
      backgroundImage:
        "https://modmetaldesigns.com/wp-content/uploads/2024/09/IMG_0204-1-1536x1053.jpg",
      pattern: "hexagonal",
    },
    {
      id: 4,
      title: "ABOUT US",
      description:
        "Annie Kantor, a.k.a. The Woman of Steel, and founder of Modern Metal shares her passion and skills with you.",
      buttonText: "ABOUT",
      backgroundImage:
        "https://modmetaldesigns.com/wp-content/uploads/2024/09/5.23.24-1177-1-1-1536x1024.jpg",
      pattern: "geometric-mix",
    },
  ];

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderPattern = (patternType) => {
    switch (patternType) {
      //   case "orange-vertical":
      //     return (
      //       <div className="absolute inset-0 opacity-30">
      //         <div className="grid grid-cols-12 md:grid-cols-16 lg:grid-cols-20 h-full gap-1">
      //           {Array.from({ length: 100 }).map((_, i) => (
      //             <div
      //               key={i}
      //               className={`${
      //                 i % 3 === 0
      //                   ? "bg-orange-500"
      //                   : i % 3 === 1
      //                   ? "bg-orange-600"
      //                   : "bg-orange-400"
      //               } rounded-sm transition-all duration-1000 transform hover:scale-105`}
      //               style={{
      //                 height: `${Math.random() * 60 + 20}%`,
      //                 marginTop: `${Math.random() * 40}%`,
      //               }}
      //             ></div>
      //           ))}
      //         </div>
      //       </div>
      //     );
      //   case "perforated-panels":
      //     return (
      //       <div className="absolute inset-0 opacity-25">
      //         <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 h-full gap-2">
      //           {Array.from({ length: 80 }).map((_, i) => (
      //             <div
      //               key={i}
      //               className="bg-gray-300 rounded-full aspect-square animate-pulse"
      //               style={{
      //                 animationDelay: `${Math.random() * 2}s`,
      //               }}
      //             ></div>
      //           ))}
      //         </div>
      //       </div>
      //     );
      case "hexagonal":
        return (
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 h-full gap-1">
              {Array.from({ length: 60 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-600 transform rotate-45 aspect-square animate-spin"
                  style={{
                    animationDuration: `${Math.random() * 10 + 5}s`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        );
      //   case "geometric-mix":
      //     return (
      //       <div className="absolute inset-0 opacity-30">
      //         <div className="grid grid-cols-10 md:grid-cols-14 lg:grid-cols-18 h-full gap-1">
      //           {Array.from({ length: 90 }).map((_, i) => (
      //             <div
      //               key={i}
      //               className={`
      //                 ${
      //                   i % 4 === 0
      //                     ? "bg-blue-500 rounded-full"
      //                     : i % 4 === 1
      //                     ? "bg-green-500 transform rotate-45"
      //                     : i % 4 === 2
      //                     ? "bg-purple-500 rounded-sm"
      //                     : "bg-yellow-500 rounded-full"
      //                 }
      //                 aspect-square transition-all duration-500 hover:scale-110
      //               `}
      //               style={{
      //                 transform: `scale(${Math.random() * 0.8 + 0.4}) rotate(${
      //                   Math.random() * 360
      //                 }deg)`,
      //               }}
      //             ></div>
      //           ))}
      //         </div>
      //       </div>
      //     );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Carousel Container */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative min-w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Pattern Overlay */}
            {renderPattern(slide.pattern)}

            {/* Content */}
            <div className="relative z-10 flex items-end h-full">
              <div className="px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24 text-left max-w-2xl">
                <h1 className="text-white font-sans text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 tracking-wide animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-white font-sans text-base md:text-lg font-light mb-6 md:mb-8 max-w-md leading-relaxed animate-fade-in-up animation-delay-300">
                  {slide.description}
                </p>
                <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 md:px-8 md:py-4 text-white text-sm md:text-base font-semibold rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-600">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Navigation Dots */}
      <div className="absolute right-6 md:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                currentSlide === index
                  ? "bg-cyan-500 shadow-lg"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-30">
        <div
          className="h-full bg-cyan-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div> */}

      {/* Slide Counter */}
      {/* <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20">
        <div className="text-white font-sans text-sm font-light bg-black bg-opacity-50 px-3 py-1 rounded-full">
          {currentSlide + 1} / {slides.length}
        </div>
      </div> */}

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
