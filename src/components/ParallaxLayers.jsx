import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxLayers() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '-35%'])

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden bg-[#1f1f1f]">
      {/* Background mountains */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-80"
      >
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop"
          alt="Distant mountains"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Midground forest */}
      <motion.div
        style={{ y: midY }}
        className="absolute inset-0 mix-blend-screen"
      >
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
          alt="Bamboo forest"
          className="h-full w-full object-cover opacity-70"
          loading="lazy"
        />
      </motion.div>

      {/* Foreground elements */}
      <motion.div style={{ y: fgY }} className="absolute inset-0">
        <div className="absolute left-8 bottom-10 bg-black/40 backdrop-blur-sm text-white px-4 py-3 rounded-lg ring-1 ring-white/10 max-w-sm">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37]">Parallax Journey</p>
          <h3 className="text-xl font-semibold">Depth that moves with you</h3>
          <p className="mt-1 text-white/80">Foreground, midground, and background glide at different speeds for a serene 3D feel.</p>
        </div>
      </motion.div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-transparent to-transparent" />
    </section>
  )
}
