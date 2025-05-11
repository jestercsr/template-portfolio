'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="h-[80vh] flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Des idées bien conçues</h2>
          <p className="text-lg text-gray-600">Design, identité et expériences numériques.</p>
        </motion.div>
      </section>

      {/* Projets */}
      <section className="px-6 py-20 space-y-12">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Projets récents
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg h-48 animate-pulse"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
