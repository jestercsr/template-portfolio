'use client';
import { motion } from 'framer-motion';
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-8 py-4 flex justify-between items-center sticky top-0 z-50 bg-black text-white shadow-sm"
      >
        <Link href="/" className='text-xl font-semibold'>🎨 Mon Portfolio</Link>
        <ul className="flex space-x-6 text-sm font-medium">
            <li className="hover:underline"><Link href="/projets">Projets</Link></li>
            <li className="hover:underline">À propos</li>
            <li className="hover:underline">Contact</li>
        </ul>
    </motion.nav>
  )
}
