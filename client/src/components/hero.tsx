import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-20 bg-white border-b-2 border-primary">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-12 text-[12px]"
        >
          <span className="text-sm font-bold tracking-widest uppercase opacity-50">Portfolio 2026</span>
          <div className="relative inline-block">
             <h1 className="text-6xl md:text-[10vw] font-display font-black leading-none uppercase tracking-tighter text-primary">
                Product <br />
                <span className="relative">
                  Design
                  <svg className="absolute -bottom-2 left-0 w-full h-4 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
             </h1>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-3xl font-medium leading-tight max-w-xl">
              Personal portfolio of Parima Bajracharya. A Product Designer focused on <span className="italic underline decoration-primary/40 underline-offset-4">human-centered</span> digital systems.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 border-2 border-primary text-xs font-black uppercase tracking-widest bg-primary text-white">Available for work</div>
              <div className="px-4 py-2 border-2 border-primary text-xs font-black uppercase tracking-widest">Tokyo, JP</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-video bg-muted border-2 border-primary overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover grayscale contrast-125"
              alt="Hero work"
            />
            <div className="absolute top-4 left-4 bg-white border border-primary px-3 py-1 text-[10px] font-black uppercase">Selected Work 01</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
