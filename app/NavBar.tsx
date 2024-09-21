'use client'
import React from 'react'
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Logo from './Logo'




const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className=" top-0 left-0 right-0 z-50 px-4 lg:px-6 h-20 flex items-center sticky bg-foreground transition ease-in">
        <Link className="flex items-center justify-center border-16 border-primary" href="/">
          <Logo  />

        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button
            className="lg:hidden text-background"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-20 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-background lg:bg-transparent p-4 lg:p-0 space-y-2 lg:space-y-0 lg:space-x-4 rounded-b-lg lg:rounded-none animate-out`}>
            {["Features", "Pricing", "About", "Contact"].map((item) => (
              <Button key={item} variant="ghost" className="text-primary md:text-background" asChild>
                <Link href={item}>{item}</Link>
              </Button>
            ))}
          </div>
        </nav>
      </header>
  )
}  
export default NavBar

// function MountainIcon(props) {
//     return (
//       <svg
//         {...props}
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        
//       </svg>
//       >
     
//     )
  Logo()


