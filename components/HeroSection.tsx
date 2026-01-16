'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-24 py-20 border-b border-charcoal">
      <div className="max-w-7xl mx-auto w-full">
        {/* Asymmetric Layout: Name Left, Hook Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left: Name */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center"
          >
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-serif font-bold text-charcoal leading-tight">
              Andrew C
            </h1>
          </motion.div>

          {/* Right: Hook */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-base sm:text-lg font-mono text-charcoal">
              Dartmouth '25+2 | CS & Quantitative Social Science
            </p>
            <p className="text-2xl sm:text-3xl font-serif font-medium text-charcoal leading-relaxed">
              Bridging technical innovation with market strategy.
            </p>
          </motion.div>
        </div>

        {/* Bio Data Feed */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-3 border-t border-b border-charcoal py-8"
        >
          <div className="font-mono text-sm sm:text-base text-charcoal space-y-2">
            <div>
              <span className="font-semibold">[LEADERSHIP]</span> :: KDIC Squad Leader & Army Sergeant
            </div>
            <div>
              <span className="font-semibold">[INDUSTRY]</span> :: VC Intern at DTCP (Growth Equity) | CFA Level 1 Passed
            </div>
            <div>
              <span className="font-semibold">[PERSONAL]</span> :: Boxing Instructor & Home Cook
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}