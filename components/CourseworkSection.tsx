'use client'

import { motion } from 'framer-motion'

interface Course {
  code: string
  name: string
  citation?: boolean
}

interface CourseCategory {
  title: string
  courses: Course[]
}

const categories: CourseCategory[] = [
  {
    title: 'Systems & Engineering',
    courses: [
      { code: 'COSC 70', name: 'Foundations of Applied Computer Science' },
      { code: 'COSC 50', name: 'Software Design and Implementation' },
      { code: 'COSC 52', name: 'Full-Stack Web Development', citation: true },
      { code: 'COSC 10', name: 'Problem Solving via OOP' },
      { code: 'COSC 30', name: 'Discrete Mathematics' },
    ],
  },
  {
    title: 'Data & Intelligence',
    courses: [
      { code: 'COSC 76', name: 'Artificial Intelligence' },
      { code: 'COSC 74', name: 'Machine Learning and Statistical Data Analysis' },
      { code: 'QSS 20', name: 'Modern Statistical Computing', citation: true },
      { code: 'MATH 50', name: 'Intro to Linear Models' },
      { code: 'MATH 22', name: 'Linear Algebra' },
      { code: 'QSS 17', name: 'Data Visualization' },
    ],
  },
  {
    title: 'Strategy & Economics',
    courses: [
      { code: 'TUCK 1', name: 'Financial Accounting' },
      { code: 'ECON 22', name: 'Macroeconomics' },
      { code: 'QSS 30.04', name: 'Evolutionary Game Theory' },
      { code: 'QSS 30.21', name: 'Social Justice & Computing' },
      { code: 'QSS 30.01', name: 'Sports Analytics' },
      { code: 'COSC 25.01', name: 'Intro to UI/UX Design' },
    ],
  },
]

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
}

export default function CourseworkSection() {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-24 py-20 border-b border-charcoal bg-paper">
      <div className="max-w-7xl mx-auto">
        {/* Terminal/Receipt Style Layout */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="border border-charcoal bg-paper"
        >
          {/* Header */}
          <div className="border-b border-charcoal p-4 bg-charcoal">
            <p className="font-mono text-sm text-paper">COURSEWORK_RECEIPT.txt</p>
          </div>

          {/* Content */}
          <div className="divide-y divide-charcoal">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="p-6">
                <h3 className="font-serif text-xl font-bold text-charcoal mb-4">
                  {category.title}
                </h3>
                <ul className="font-mono text-sm text-charcoal space-y-2">
                  {category.courses.map((course) => (
                    <li key={`${course.code}-${course.name}`} className="flex items-start">
                      <span className="text-charcoal/60 mr-3">├─</span>
                      <span>
                        <span className="font-medium">{course.code}</span> {course.name}
                        {course.citation && (
                          <span className="ml-2 text-charcoal/60">
                            [Academic Citation]
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-charcoal p-4 bg-charcoal/5">
            <p className="font-mono text-xs text-charcoal/60">
              END_OF_RECEIPT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}