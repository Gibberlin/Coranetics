import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 flex justify-items-center">
  {/* <aside>
    <Logo />
    <p>
      Coranetics Industries Ltd.
      <br />
      
    </p>
  </aside>
  <div className='flex justify-items-center w-full'>
  <nav className='flex 1 justify-between'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div>
   */}
   <div>
   <Logo />
   <p>Established in 2024</p>
   </div>
   

     <footer className="w-full py-6  text-white">
        <div className="container px-4 md:px-6 mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Features</Link></li>
                <li><Link href="#" className="hover:underline">Pricing</Link></li>
                <li><Link href="#" className="hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About</Link></li>
                <li><Link href="#" className="hover:underline">Careers</Link></li>
                <li><Link href="#" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <ul className="space-y-2 flex-row">
                <li className='flex-1'><Link href="https://www.instagram.com/coranetics/" className="hover:scale-105"><InstagramLogoIcon className="m-2 h-9 w-9" />Instagram</Link></li>
                <li className='flex-2'><Link href="#" className="hover:underline"><LinkedInLogoIcon className='m-2 h-9 w-9 '/>LinkedIn</Link></li>
                <li><Link href="#" className="hover:underline"><GitHubLogoIcon className='m-2 h-9 w-9'/>Github</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm">© 2024 Coranetics Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
</footer>
  )
}

export default Footer
