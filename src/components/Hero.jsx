import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const img1 = {
    scale: useTransform(scrollYProgress, [0, 0.6], [1, 1.2]),
    opacity: useTransform(scrollYProgress, [0, 0.3], [0.2, 1])
  }
  const img2 = {
    scale: useTransform(scrollYProgress, [0, 0.6], [0.9, 1.15]),
    opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.9])
  }
  const img3 = {
    scale: useTransform(scrollYProgress, [0, 0.6], [0.85, 1.1]),
    opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.8])
  }

  return (
    <section ref={ref} className="relative min-h-[90vh] overflow-hidden bg-[#2C2C2C]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
      {/* Parallax gold glow */}
      <motion.div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[#D4AF37]/10 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <motion.h1
          style={{ y: titleY }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]"
        >
          Old Japan heritage
          <span className="block text-[#D4AF37]">meets modern travel</span>
        </motion.h1>
        <motion.p
          style={{ opacity: subtitleOpacity }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80"
        >
          Immerse yourself in serene temples, neon skylines, and timeless landscapes with immersive scroll animations.
        </motion.p>

        {/* Stacking destination images */}
        <div className="relative mt-12 h-[340px] sm:h-[420px] md:h-[520px]">
          <motion.img
            src="https://images.unsplash.com/photo-1518544801976-3e188ea7c6f8?q=80&w=1800&auto=format&fit=crop"
            alt="Kyoto temple at dusk"
            className="absolute inset-0 m-auto h-full w-auto max-w-none rounded-xl shadow-2xl ring-1 ring-white/10 object-cover"
            style={{ ...img1 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1505066836043-7dda2aa1aa16?q=80&w=1800&auto=format&fit=crop"
            alt="Tokyo skyline with tower"
            className="absolute left-6 top-6 h-[70%] w-auto max-w-none rounded-xl shadow-xl ring-1 ring-white/10 object-cover"
            style={{ ...img2 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1505069890684-7cc1f2c0cb31?q=80&w=1800&auto=format&fit=crop"
            alt="Torii gate with water reflections"
            className="absolute right-6 bottom-6 h-[65%] w-auto max-w-none rounded-xl shadow-xl ring-1 ring-white/10 object-cover"
            style={{ ...img3 }}
          />
        </div>
      </div>
    </section>
  )
}
