'use client'
import { motion } from 'motion/react'
// import { useEffect, useState } from 'react'
import React from 'react'
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import imageAdd from "../Images/background.jpg"

const AnimatedHero = () => {
  return (
    <motion.div ><section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.div initial={{scale: 1}}
    whileFocus={{scale: 2}} 
    whileInView={{scale: 1.1}} 
    transition={{ duration: 2, ease: "easeInOut"  }}
    viewport={{ once: true  }}
    className="absolute inset-0 z-0">
        <Image src={imageAdd} alt="Background" layout="fill" objectFit="cover" className="object-cover " />
      </motion.div>
      <div className="relative z-10 text-center text-white p-4">
        <motion.h1 initial={{scale:1}}
        whileHover={{scale:1.1}} transition={{duration:2} } className="md:text-9xl font-bold mb-4">Welcome to the Future</motion.h1>
        <p className="text-4xl mb-8">Experience Web like never before!</p>
        <Button className="flex items-center justify-center hover:scale-95 transition-transform duration-300 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600">
          Get Started <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section></motion.div>
  )
}

export default AnimatedHero