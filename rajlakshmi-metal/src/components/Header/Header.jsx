// import React, { useState } from "react";
// import HeaderImage from "../../assets/HeaderImage.png";
// import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isWhatWeMenuOpen, setIsWhatWeMenuOpen] = useState(false);
//   const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
//   return (
//     <>
//       <header className="relative z-50">
//         {/* Top Navigation Bar */}
//         <nav className="hidden md:flex justify-end items-center px-6 py-3 bg-black/30 text-sm">
//           <div className="space-x-6">
//             <a href="#about" className="hover:text-cyan-400 transition-colors">
//               About
//             </a>
//             <a href="#press" className="hover:text-cyan-400 transition-colors">
//               Press
//             </a>
//             <a
//               href="#happenings"
//               className="hover:text-cyan-400 transition-colors"
//             >
//               Happenings
//             </a>
//           </div>
//         </nav>

//         {/* Main Navigation */}
//         <nav
//           style={{
//             backgroundImage: `url(${HeaderImage})`,
//             backgroundPosition: "center",
//           }}
//           className="relative px-4 md:px-6 py-4 bg-black/50 backdrop-blur-sm"
//         >
//           <div className="flex items-center justify-between max-w-7xl mx-auto">
//             <div className="flex-shrink-0">
//               <div className="border-4 border-white px-4 py-2">
//                 <div className="text-lg md:text-xl font-medium tracking-wider">
//                   RAJLAKSHMI
//                   <br />
//                   METAL
//                 </div>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center space-x-8">
//               <div className="relative">
//                 <button
//                   onClick={() => setIsWhatWeMenuOpen(!isWhatWeMenuOpen)}
//                   className="flex items-center space-x-1 hover:text-cyan-400 transition-colors font-bold text-xl"
//                 >
//                   <span>What We Make</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </button>
//                 {isWhatWeMenuOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl">
//                     <a
//                       href="#kitchens"
//                       className="block px-4 py-3 hover:bg-gray-800 transition-colors"
//                     >
//                       Kitchen Cabinets
//                     </a>
//                     <a
//                       href="#bathrooms"
//                       className="block px-4 py-3 hover:bg-gray-800 transition-colors"
//                     >
//                       Bathroom Vanities
//                     </a>
//                     <a
//                       href="#custom"
//                       className="block px-4 py-3 hover:bg-gray-800 transition-colors"
//                     >
//                       Custom Metalwork
//                     </a>
//                   </div>
//                 )}
//               </div>

//               <div className="relative">
//                 <button
//                   onClick={() => setIsProjectMenuOpen(!isProjectMenuOpen)}
//                   className="flex items-center space-x-1 hover:text-cyan-400 transition-colors font-bold text-xl"
//                 >
//                   <span>Your Project</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </button>
//                 {isProjectMenuOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl">
//                     <a
//                       href="#consultation"
//                       className="block px-4 py-3 hover:bg-gray-800 transition-colors"
//                     >
//                       Free Consultation
//                     </a>
//                     <a
//                       href="#gallery"
//                       className="block px-4 py-3 hover:bg-gray-800 transition-colors"
//                     >
//                       Project Gallery
//                     </a>
//                     <a
//                       href="#process"
//                       className="block px-4 py-3 hover:bg-gray-800 transition-colors"
//                     >
//                       Our Process
//                     </a>
//                   </div>
//                 )}
//               </div>

//               <a
//                 href="#store"
//                 className="hover:text-cyan-400 transition-colors font-bold text-xl"
//               >
//                 Online Store
//               </a>
//               <a
//                 href="#contact"
//                 className="hover:text-cyan-400 transition-colors font-bold text-xl"
//               >
//                 Contact
//               </a>
//             </div>

//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-700 z-40">
//             <div className="px-4 py-6 space-y-4">
//               <a
//                 href="#what-we-make"
//                 className="block py-2 hover:text-cyan-400 transition-colors"
//               >
//                 What We Make
//               </a>
//               <a
//                 href="#your-project"
//                 className="block py-2 hover:text-cyan-400 transition-colors"
//               >
//                 Your Project
//               </a>
//               <a
//                 href="#store"
//                 className="block py-2 hover:text-cyan-400 transition-colors"
//               >
//                 Online Store
//               </a>
//               <a
//                 href="#contact"
//                 className="block py-2 hover:text-cyan-400 transition-colors"
//               >
//                 Contact
//               </a>
//               <a
//                 href="#about"
//                 className="block py-2 hover:text-cyan-400 transition-colors"
//               >
//                 About
//               </a>
//               <a
//                 href="#press"
//                 className="block py-2 hover:text-cyan-400 transition-colors"
//               >
//                 Press
//               </a>
//               <a
//                 href="#happenings"
//                 className="block py-2 hover:text-cyan-400 transition-colors"
//               >
//                 Happenings
//               </a>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

import React, { useState } from "react";
import HeaderImage from "../../assets/HeaderImage.png";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="relative z-50">
        {/* Top Navigation Bar */}
        {/* <nav className="hidden md:flex justify-end items-center px-6 py-3 bg-black/30 text-sm">
          <div className="space-x-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#press" className="hover:text-cyan-400 transition-colors">
              Press
            </a>
            <a
              href="#happenings"
              className="hover:text-cyan-400 transition-colors"
            >
              Happenings
            </a>
          </div>
        </nav> */}

        {/* Main Navigation */}
        <nav
          style={{
            backgroundImage: `url(${HeaderImage})`,
            backgroundPosition: "center",
          }}
          className="relative px-4 md:px-6 py-4 bg-black/50 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex-shrink-0">
              <div className="border-4 border-white px-4 py-2">
                <div className="text-lg md:text-xl font-medium tracking-wider">
                  RAJLAKSHMI
                  <br />
                  METAL
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {/* What We Make */}
              {/* <div className="relative group">
                <span className="flex items-center space-x-1 font-bold text-xl hover:text-cyan-400 transition-colors cursor-pointer">
                  What We Make <ChevronDown className="w-4 h-4" />
                </span>
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl z-20">
                  <a
                    href="#kitchens"
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Kitchen Cabinets
                  </a>
                  <a
                    href="#bathrooms"
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Bathroom Vanities
                  </a>
                  <a
                    href="#custom"
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Custom Metalwork
                  </a>
                </div>
              </div> */}

              {/* Home */}
              <a
                href="#home"
                className="font-bold text-xl hover:text-cyan-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#store"
                className="font-bold text-xl hover:text-cyan-400 transition-colors"
              >
                About Us
              </a>

              {/* Your Project */}
              <div className="relative group">
                <span className="flex items-center space-x-1 font-bold text-xl hover:text-cyan-400 transition-colors cursor-pointer">
                  Our Products <ChevronDown className="w-4 h-4" />
                </span>
                <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl z-20">
                  <a
                    href="#consultation"
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Brass Sheet
                  </a>
                  <a
                    href="#gallery"
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Brass Pipe
                  </a>
                  <a
                    href="#process"
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Brass Scrap
                  </a>
                  <a
                    href="#process"
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Brass Fitting
                  </a>
                  <a
                    href="#process"
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Brass Rod
                  </a>
                  <a
                    href="#process"
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Stainless Steel Sheet
                  </a>
                  <a
                    href="#process"
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Stainless Steel Pipe
                  </a>
                </div>
              </div>

              <a
                href="#store"
                className="font-bold text-xl hover:text-cyan-400 transition-colors"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="font-bold text-xl hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-700 z-40">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#what-we-make"
                className="block py-2 hover:text-cyan-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block py-2 hover:text-cyan-400 transition-colors"
              >
                About Us
              </a>
              <a
                href="#your-project"
                className="block py-2 hover:text-cyan-400 transition-colors"
              >
                Our Products
              </a>
              <a
                href="#press"
                className="block py-2 hover:text-cyan-400 transition-colors"
              >
                Gallery
              </a>
              {/* <a
                href="#store"
                className="block py-2 hover:text-cyan-400 transition-colors"
              >
                Online Store
              </a> */}
              <a
                href="#contact"
                className="block py-2 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
