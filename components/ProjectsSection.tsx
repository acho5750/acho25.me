'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
}

export default function ProjectsSection() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-24 py-20 border-b border-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mb-12"
        >
          The Archive
        </motion.h2>

        {/* Table of Contents Style List */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="border border-charcoal divide-y divide-charcoal"
        >
          {projects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <motion.div
                className="p-6 font-mono text-sm sm:text-base group cursor-pointer transition-colors duration-200 hover:bg-charcoal hover:text-paper"
                whileHover={{ x: 4 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-start gap-4">
                    <span className="text-charcoal/40 group-hover:text-paper/60 font-medium min-w-[3ch]">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="group-hover:text-paper text-charcoal">
                      {project.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 ml-7 sm:ml-0">
                    <span className="text-charcoal/60 group-hover:text-paper/80">
                      {project.date}
                    </span>
                    {project.techStack && project.techStack.length > 0 && (
                      <span className="text-charcoal/40 group-hover:text-paper/60">
                        [{project.techStack.join(', ')}]
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}