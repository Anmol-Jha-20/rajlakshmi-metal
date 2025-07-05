import React, { useState } from "react";
import HeaderImage from "../../assets/HeaderImage.png";
import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
              {/* Home */}
              <Link
                to={"/"}
                className="font-bold text-xl hover:text-cyan-400 transition-colors"
              >
                Home
              </Link>
              <HashLink
                smooth
                to="/#about"
                className="font-bold text-xl hover:text-cyan-400 transition-colors"
              >
                About Us
              </HashLink>

              {/* Your Project */}
              <div className="relative group">
                <span className="flex items-center space-x-1 font-bold text-xl hover:text-cyan-400 transition-colors cursor-pointer">
                  <Link to={"/our-products"}>Our Products</Link>{" "}
                  <ChevronDown className="w-4 h-4" />
                </span>
                <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out bg-black/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl z-20">
                  <Link
                    to={"/brass-sheet"}
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Brass Sheet
                  </Link>
                  <Link
                    to={"/brass-pipe"}
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Brass Pipe
                  </Link>
                  <Link
                    to={"/brass-scrap"}
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Brass Scrap
                  </Link>
                  <Link
                    to={"/brass-fitting"}
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Brass Fitting
                  </Link>
                  <Link
                    to={"/brass-rod"}
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Brass Rod
                  </Link>
                  <Link
                    to={"/stainless-steel-sheet"}
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Stainless Steel Sheet
                  </Link>
                  <Link
                    to={"/stainless-steel-pipe"}
                    className="block px-5 py-3 hover:bg-gray-800 transition-colors"
                  >
                    Stainless Steel Pipe
                  </Link>
                </div>
              </div>

              <Link
                to="/gallery"
                className="font-bold text-xl hover:text-cyan-400 transition-colors"
              >
                Gallery
              </Link>
              <Link
                to={"/contact-us"}
                className="font-bold text-xl hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>
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
              <Link
                to={"/#about"}
                className="block py-2 hover:text-cyan-400 transition-colors"
              >
                About Us
              </Link>
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

// import React, { useState } from "react";
// import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
// import { motion } from "framer-motion";

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const galleryItems = [
//     {
//       id: 1,
//       src: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=600&fit=crop",
//       alt: "Modern Metal Art Installation",
//       category: "installations",
//       title: "Contemporary Metal Sculpture",
//     },
//     {
//       id: 2,
//       src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
//       alt: "Decorative Metal Screen",
//       category: "screens",
//       title: "Geometric Metal Screen",
//     },
//     {
//       id: 3,
//       src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
//       alt: "Custom Metal Furniture",
//       category: "furniture",
//       title: "Designer Metal Table",
//     },
//     {
//       id: 4,
//       src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
//       alt: "Artistic Metal Wall Panel",
//       category: "panels",
//       title: "Textured Wall Panel",
//     },
//     {
//       id: 5,
//       src: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=600&fit=crop",
//       alt: "Metal Lighting Fixture",
//       category: "lighting",
//       title: "Custom Metal Chandelier",
//     },
//     {
//       id: 6,
//       src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
//       alt: "Architectural Metal Work",
//       category: "architectural",
//       title: "Building Facade Element",
//     },
//     {
//       id: 7,
//       src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
//       alt: "Decorative Metal Gate",
//       category: "gates",
//       title: "Ornate Entry Gate",
//     },
//     {
//       id: 8,
//       src: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=600&fit=crop",
//       alt: "Metal Art Sculpture",
//       category: "sculptures",
//       title: "Abstract Metal Art",
//     },
//     {
//       id: 9,
//       src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
//       alt: "Industrial Metal Design",
//       category: "industrial",
//       title: "Industrial Metal Component",
//     },
//   ];

//   const categories = [
//     { id: "all", name: "All Works" },
//     { id: "installations", name: "Installations" },
//     { id: "screens", name: "Screens" },
//     { id: "furniture", name: "Furniture" },
//     { id: "panels", name: "Panels" },
//     { id: "lighting", name: "Lighting" },
//     { id: "architectural", name: "Architectural" },
//   ];

//   const filteredItems =
//     activeCategory === "all"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === activeCategory);

//   const openModal = (item, index) => {
//     setSelectedImage(item);
//     setCurrentIndex(index);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//   };

//   const nextImage = () => {
//     const nextIndex = (currentIndex + 1) % filteredItems.length;
//     setCurrentIndex(nextIndex);
//     setSelectedImage(filteredItems[nextIndex]);
//   };

//   const prevImage = () => {
//     const prevIndex =
//       (currentIndex - 1 + filteredItems.length) % filteredItems.length;
//     setCurrentIndex(prevIndex);
//     setSelectedImage(filteredItems[prevIndex]);
//   };

//   return (
//     <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our <span className="text-blue-600">Gallery</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Discover the artistry and craftsmanship behind our metal creations.
//             Each piece tells a story of innovation, precision, and timeless
//             design.
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
//                 activeCategory === category.id
//                   ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
//                   : "bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
//             >
//               <div className="aspect-w-4 aspect-h-3 overflow-hidden">
//                 <img
//                   src={item.src}
//                   alt={item.alt}
//                   className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                   loading="lazy"
//                 />
//               </div>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <h3 className="text-white font-bold text-lg mb-2">
//                     {item.title}
//                   </h3>
//                   <button
//                     onClick={() => openModal(item, index)}
//                     className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300"
//                   >
//                     <ZoomIn className="w-4 h-4" />
//                     View Details
//                   </button>
//                 </div>
//               </div>

//               {/* Quick view button */}
//               <button
//                 onClick={() => openModal(item, index)}
//                 className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
//               >
//                 <ZoomIn className="w-5 h-5 text-gray-700" />
//               </button>
//             </motion.div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="text-center mt-12">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//             Load More Projects
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="relative max-w-4xl max-h-full">
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
//             >
//               <X className="w-6 h-6" />
//             </button>

//             {/* Navigation Buttons */}
//             <button
//               onClick={prevImage}
//               className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>

//             <button
//               onClick={nextImage}
//               className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-10"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>

//             {/* Image */}
//             <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src={selectedImage.src}
//                 alt={selectedImage.alt}
//                 className="w-full h-auto max-h-[80vh] object-contain"
//               />
//               <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                   {selectedImage.title}
//                 </h3>
//                 <p className="text-gray-600">{selectedImage.alt}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Gallery;
