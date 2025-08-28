'use client'
import { motion, Transition, Variants } from 'framer-motion'
import { ReactNode } from 'react'

type SectionProps = {
  id?: string
  title?: string
  eyebrow?: string
  children: ReactNode
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as Transition["ease"],
    },
  },
};


const childVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.4, 0, 0.2, 1] as Transition["ease"]
    },
  },
}

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      className="relative py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {title && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center">
          {eyebrow && (
            <p className="text-brand-400 text-xs sm:text-sm uppercase tracking-[0.25em] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-brand-400 via-purple-500 to-brand-600 bg-clip-text text-transparent drop-shadow-sm">
            {title}
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-brand-400 to-purple-500 mx-auto rounded-full shadow-lg" />
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8">
        {Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={childVariants}>
                {child}
              </motion.div>
            ))
          : <motion.div variants={childVariants}>{children}</motion.div>}
      </motion.div>

      {/* Subtle animated background effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-400/20 via-purple-500/10 to-transparent blur-3xl rounded-3xl"
      />
    </section>
  )
}
