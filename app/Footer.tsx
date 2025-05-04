import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Logo and Info */}
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-2">Established in 2024</p>
          </div>

          {/* Product Links */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-2 text-center md:text-left">Product</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="#" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-2 text-center md:text-left">Company</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-2 text-center md:text-left">Legal</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-2 text-center md:text-left">Links</h3>
            <ul className="flex justify-center md:justify-start space-x-4">
              <li>
                <Link href="https://www.instagram.com/coranetics/" className="hover:scale-105">
                  <InstagramLogoIcon className="h-9 w-9" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:scale-105">
                  <LinkedInLogoIcon className="h-9 w-9" />
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:scale-105">
                  <GitHubLogoIcon className="h-9 w-9" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">© 2024 Coranetics Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
