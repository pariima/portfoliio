import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 relative z-10 overflow-hidden">
      <div className="flex flex-col md:flex-row items-end gap-12 relative">
        
        {/* The Artistic Headline */}
        <div className="relative z-20 flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[12vw] md:text-[8vw] font-display font-medium leading-[0.85] tracking-tighter text-balance uppercase">
              Parima <br />
              <span className="flex items-center gap-4">
                <motion.span 
                  className="h-[2px] w-[15vw] bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 hidden md:block"
                  initial={{ width: 0 }}
                  animate={{ width: "15vw" }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
                Bajracharya
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-24"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground block">Specialization</span>
              <p className="text-xl font-light">Product & Interaction Design</p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground block">Philosophy</span>
              <p className="text-xl font-light max-w-sm">Crafting clarity in a world of digital complexity.</p>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <motion.div 
          className="relative w-full md:w-1/3 aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* A large, semi-transparent circle with glassmorphism */}
          <div className="absolute inset-0 border border-white/20 rounded-full backdrop-blur-[2px] bg-white/5 shadow-2xl animate-spin-slow overflow-hidden">
             {/* Inner gradient sweep */}
             <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-pink-400/10 to-purple-400/10 opacity-30" />
          </div>
          
          {/* An abstract "orb" that reacts to mouse/animation */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-orange-400/40 via-pink-500/40 to-purple-600/40 rounded-full blur-3xl shadow-[0_0_100px_rgba(236,72,153,0.3)]"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 90, 0],
              x: [0, 30, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-[8px] font-bold uppercase tracking-[1em] text-foreground/60 rotate-90 origin-center whitespace-nowrap">
                Tokyo • remote • {new Date().getFullYear()}
             </div>
          </div>
        </motion.div>

      </div>
      
      {/* Background Large Text (Watermark) */}
      <div className="absolute top-0 right-0 -z-10 select-none pointer-events-none opacity-[0.03]">
        <span className="text-[30vw] font-display font-black leading-none uppercase tracking-tighter bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          UXUI
        </span>
      </div>
    </section>
  );
}
