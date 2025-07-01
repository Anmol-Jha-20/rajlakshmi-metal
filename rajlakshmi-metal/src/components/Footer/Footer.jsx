import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  User,
  Shield,
  FileText,
  Eye,
  Newspaper,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white text-black px-3 py-2 font-bold text-sm uppercase tracking-wide">
                RAJLAKSHMI
                <br />
                METAL
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Rajlakshmi Metal Designs
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span> Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a
                    href="tel:5105167713"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    (+91) 890 416 2990
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-cyan-500 hover:bg-cyan-600 p-2 rounded-full transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors"
              >
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">P</span>
                </div>
                <span className="sr-only">Pinterest</span>
              </a>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-colors"
              >
                <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-blue-500 text-xs font-bold">in</span>
                </div>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Products Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide">
              Products
            </h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                What We Make
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Rajlakshmi Metal Lookbook
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Our Products
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Ready to Ship
              </a>
              <a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Request a Quote
              </a>
            </nav>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide">
              Company
            </h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
              {/* <a
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <User className="w-4 h-4" />
                <span>My Account</span>
              </a> */}
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Terms of Use</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Web Accessibility</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Newspaper className="w-4 h-4" />
                <span>Press</span>
              </a>
            </nav>
          </div>

          {/* Certification Badge */}
          {/* <div className="flex justify-center lg:justify-end">
            <div className="bg-gray-800 border-2 border-gray-600 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center p-4">
              <div className="text-xs font-semibold text-gray-300 mb-1">
                AUTHENTIC DESIGN
              </div>
              <div className="text-lg font-bold text-white">BE</div>
              <div className="text-lg font-bold text-white">/ORIGINAL/</div>
              <div className="text-xs text-gray-300 mt-1">MEMBER ADVOCATE</div>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mx-1"></div>
                <div className="text-xs text-gray-300">AMERICA'S</div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full mx-1"></div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Rajlakshmi Metal Designs</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
