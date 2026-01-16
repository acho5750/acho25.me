'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export default function ContactSection() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-24 py-20 bg-paper">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport="viewport"
        variants={fadeIn}
        className="max-w-7xl mx-auto"
      >
        <h2 className="font-serif text-5xl sm:text-6xl font-bold text-charcoal mb-12">
          Let's Build and Grow.
        </h2>

        <div className="space-y-4 font-mono text-base sm:text-lg text-charcoal">
          <p>
            <a
              href="mailto:[placeholder]@gmail.com"
              className="hover:underline"
            >
              [placeholder]@gmail.com
            </a>
          </p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-charcoal/40">//</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}