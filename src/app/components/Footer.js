'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white px-6 py-12 mt-auto border-t"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold">John Doe</h4>
          <p className="text-sm text-gray-500">Développeur web & designer basé à Paris.</p>
        </div>
        <div className="flex space-x-6 text-gray-500 text-sm">
          <a href="#">LinkedIn</a>
          <a href="#">Github</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} John Doe. Portfolio personnel.
      </div>
    </motion.footer>
  )
}
