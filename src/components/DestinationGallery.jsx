import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

const destinations = [
  {
    name: 'Tokyo',
    img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2000&auto=format&fit=crop',
    description: 'Neon nights, quiet shrines, cutting-edge culture.'
  },
  {
    name: 'Kyoto',
    img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=2000&auto=format&fit=crop',
    description: 'Historic temples, tea houses, and serene gardens.'
  },
  {
    name: 'Osaka',
    img: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2000&auto=format&fit=crop',
    description: 'Vibrant street food and lively canal district.'
  },
  {
    name: 'Hiroshima',
    // Respectful imagery: Peace Memorial / Itsukushima Shrine (Miyajima) in Hiroshima Prefecture
    img: 'https://images.unsplash.com/photo-1555993539-1732c7a13a05?q=80&w=2000&auto=format&fit=crop',
    description: 'Peace Memorial and the iconic floating torii at Miyajima.'
  },
  {
    name: 'Nara',
    img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2000&auto=format&fit=crop',
    description: 'Ancient temples and friendly park deer.'
  },
  {
    name: 'Mount Fuji',
    img: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=2000&auto=format&fit=crop',
    description: 'Japan’s most iconic peak over mirror lakes.'
  }
]

function DestinationCard({ d, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px -20% 0px' })

  return (
    <section ref={ref} className="relative min-h-[90vh] grid place-items-center bg-[#2C2C2C]">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="relative"
        >
          <img
            src={d.img}
            alt={`${d.name} destination`}
            className="h-[360px] sm:h-[420px] w-full object-cover rounded-2xl ring-1 ring-white/10 shadow-2xl"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#C41E3A]/10 via-transparent to-transparent rounded-2xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{d.name}</h3>
          <p className="mt-4 text-white/80 leading-relaxed">{d.description}</p>
          <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
            <span className="inline-block h-2 w-2 rounded-full bg-[#D4AF37]" />
            Immersive scroll reveal, optimized for performance
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function DestinationGallery() {
  const wrapRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  return (
    <div ref={wrapRef} className="relative">
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(212,175,55,0.12),transparent_60%)]"/>
      {destinations.map((d, i) => (
        <DestinationCard key={d.name} d={d} index={i} />
      ))}
    </div>
  )
}
