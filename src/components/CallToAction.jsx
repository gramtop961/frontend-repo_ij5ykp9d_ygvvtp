import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section className="bg-[#2C2C2C] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-[#1f1f1f] via-[#2a2a2a] to-[#1a1a1a] ring-1 ring-white/10 overflow-hidden relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_10%,rgba(196,30,58,0.2),transparent_50%)]" />
          <div className="relative px-8 py-12 sm:px-12 sm:py-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">Your Journey Awaits</p>
              <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Craft an elegant escape to Old Japan</h3>
              <p className="mt-3 text-white/80">Bespoke itineraries with culture-forward experiences — all showcased in a modern, immersive scroll design.</p>
            </div>
            <div className="flex md:justify-end">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-[#C41E3A] text-white font-semibold px-6 py-3 shadow-lg shadow-[#C41E3A]/30 hover:bg-[#aa1a33] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#2C2C2C] focus:ring-[#D4AF37]"
              >
                Start Planning
                <span className="inline-block h-2 w-2 rounded-full bg-[#D4AF37]" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
