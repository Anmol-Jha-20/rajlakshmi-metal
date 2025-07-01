// import React, { useState, useEffect, useRef } from "react";

// const FeaturedProducts = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.2,
//         rootMargin: "50px 0px -50px 0px",
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const products = [
//     {
//       id: 1,
//       name: "Accentuate Vent Cover – Square",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2023/3/295351766/GG/IP/EE/124968442/brass-laser-cutting-service-250x250.jpeg",
//       pattern: "geometric-squares",
//       delay: "delay-100",
//     },
//     {
//       id: 2,
//       name: "Accentuate Vent Cover– Moroccan",
//       image: "/api/placeholder/300/300",
//       pattern: "moroccan-stars",
//       delay: "delay-200",
//     },
//     {
//       id: 3,
//       name: "Elevate Bathroom Fan Cover – Square",
//       image: "/api/placeholder/300/300",
//       pattern: "geometric-squares-framed",
//       delay: "delay-300",
//     },
//   ];

//   const PatternSVG = ({ pattern }) => {
//     switch (pattern) {
//       case "geometric-squares":
//         return (
//           <svg viewBox="0 0 200 120" className="w-full h-full">
//             <defs>
//               <pattern
//                 id="squares"
//                 x="0"
//                 y="0"
//                 width="10"
//                 height="10"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <rect x="0" y="0" width="5" height="5" fill="#000" />
//                 <rect x="5" y="5" width="5" height="5" fill="#000" />
//               </pattern>
//             </defs>
//             <rect width="200" height="120" fill="url(#squares)" />
//           </svg>
//         );
//       case "moroccan-stars":
//         return (
//           <svg viewBox="0 0 200 120" className="w-full h-full">
//             <defs>
//               <pattern
//                 id="stars"
//                 x="0"
//                 y="0"
//                 width="20"
//                 height="20"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <circle
//                   cx="10"
//                   cy="10"
//                   r="8"
//                   fill="none"
//                   stroke="#000"
//                   strokeWidth="1"
//                 />
//                 <path
//                   d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z"
//                   fill="#000"
//                 />
//               </pattern>
//             </defs>
//             <rect width="200" height="120" fill="url(#stars)" />
//           </svg>
//         );
//       case "geometric-squares-framed":
//         return (
//           <svg viewBox="0 0 200 140" className="w-full h-full">
//             <rect
//               x="10"
//               y="10"
//               width="180"
//               height="120"
//               fill="none"
//               stroke="#000"
//               strokeWidth="2"
//             />
//             <defs>
//               <pattern
//                 id="squaresFramed"
//                 x="0"
//                 y="0"
//                 width="8"
//                 height="8"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <rect x="0" y="0" width="4" height="4" fill="#000" />
//                 <rect x="4" y="4" width="4" height="4" fill="#000" />
//               </pattern>
//             </defs>
//             <rect
//               x="15"
//               y="15"
//               width="170"
//               height="110"
//               fill="url(#squaresFramed)"
//             />
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="py-16 px-4 bg-gray-50 min-h-screen flex items-center"
//       aria-label="Featured Products"
//     >
//       <div className="max-w-7xl mx-auto w-full">
//         {/* SEO-friendly heading */}
//         <header className="text-center mb-16">
//           <h2
//             className={`text-4xl md:text-5xl font-light text-gray-600 tracking-wider transition-all duration-1000 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-8"
//             }`}
//           >
//             FEATURED PRODUCTS
//           </h2>
//         </header>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
//           {products.map((product, index) => (
//             <article
//               key={product.id}
//               className={`group cursor-pointer transition-all duration-700 ${
//                 product.delay
//               } ${
//                 isVisible
//                   ? "opacity-100 translate-y-0 scale-100"
//                   : "opacity-0 translate-y-12 scale-95"
//               }`}
//             >
//               {/* Product Image Container */}
//               <div className="relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
//                 <div className="aspect-square bg-gray-100 p-6">
//                   <div className="w-full h-full bg-white rounded border-2 border-gray-200 p-4 transition-all duration-300 group-hover:border-blue-300">
//                     <PatternSVG pattern={product.pattern} />
//                   </div>
//                 </div>

//                 {/* Hover overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
//               </div>

//               {/* Product Title */}
//               <header className="mt-6 text-center">
//                 <h3 className="text-lg md:text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 leading-relaxed">
//                   {product.name}
//                 </h3>
//               </header>

//               {/* Interactive elements */}
//               <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                 <button
//                   className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm font-medium shadow-md hover:shadow-lg"
//                   aria-label={`View details for ${product.name}`}
//                 >
//                   View Details
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Additional Animation Elements */}
//         <div className="mt-16 text-center">
//           <div
//             className={`inline-block transition-all duration-1000 delay-500 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-4"
//             }`}
//           >
//             <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto" />
//           </div>
//         </div>
//       </div>

//       {/* Background decorative elements */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
//         <div
//           className={`absolute top-1/4 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 transition-all duration-2000 ${
//             isVisible ? "scale-100 rotate-180" : "scale-0 rotate-0"
//           }`}
//         />
//         <div
//           className={`absolute bottom-1/4 right-10 w-24 h-24 bg-gray-200 rounded-full opacity-30 transition-all duration-2000 delay-300 ${
//             isVisible ? "scale-100 rotate-180" : "scale-0 rotate-0"
//           }`}
//         />
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;

import React, { useState, useEffect, useRef } from "react";
import BrassSheetLaser from "../../assets/BrassSheetLaserCutting.jpeg";
import BrassTPatti from "../../assets/BrassTPatti.jpeg";

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "50px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "Brass Sheet Laser",
      image: `${BrassSheetLaser}`,
      delay: "delay-100",
    },
    {
      id: 2,
      name: "Brass Round Bar",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396391691/NA/WK/PK/124968442/brass-bar-250x250.jpg",
      delay: "delay-200",
    },
    {
      id: 3,
      name: "Cylindrical Gunmetal Bush",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/3/396397141/OA/ZH/UA/124968442/cylindrical-gunmetal-bush-250x250.jpeg",
      delay: "delay-300",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 bg-gray-50 min-h-screen flex items-center"
      aria-label="Featured Products"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* SEO-friendly heading */}
        <header className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-light text-gray-600 tracking-wider transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            FEATURED PRODUCTS
          </h2>
        </header>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <article
              key={product.id}
              className={`group cursor-pointer transition-all duration-700 ${
                product.delay
              } ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105">
                <div className="aspect-square bg-gray-100 p-6">
                  <div className="w-full h-full bg-white rounded border-2 border-gray-200 p-0 overflow-hidden transition-all duration-300 group-hover:border-blue-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover rounded"
                      onError={(e) =>
                        (e.currentTarget.src = "/fallback-image.jpg")
                      }
                    />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>

              {/* Product Title */}
              <header className="mt-6 text-center">
                <h3 className="text-lg md:text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 leading-relaxed">
                  {product.name}
                </h3>
              </header>

              {/* Interactive elements */}
              <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm font-medium shadow-md hover:shadow-lg"
                  aria-label={`View details for ${product.name}`}
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Animation Elements */}
        <div className="mt-16 text-center">
          <div
            className={`inline-block transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto" />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className={`absolute top-1/4 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 transition-all duration-2000 ${
            isVisible ? "scale-100 rotate-180" : "scale-0 rotate-0"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-10 w-24 h-24 bg-gray-200 rounded-full opacity-30 transition-all duration-2000 delay-300 ${
            isVisible ? "scale-100 rotate-180" : "scale-0 rotate-0"
          }`}
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
