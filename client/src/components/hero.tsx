import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container mx-auto px-6 pt-32 pb-20 md:pt-48 md:pb-32 relative z-10 overflow-hidden">
      <div className="flex flex-col md:flex-row items-end gap-12 relative">
        
        {/* The Artistic Headline */}
        <div className="relative z-20 flex-1">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[14vw] md:text-[10vw] font-display font-black leading-[0.8] tracking-tighter uppercase italic">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 via-purple-500 to-yellow-400 animate-gradient-x">
                Parima
              </span> <br />
              <span className="flex items-center gap-6">
                <motion.span 
                  className="h-[8px] md:h-[12px] flex-1 bg-gradient-to-r from-orange-500 via-pink-600 via-purple-600 to-yellow-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                />
                <span className="relative">
                  Bajracharya
                  <motion.span 
                    className="absolute -inset-2 bg-yellow-400/20 blur-xl rounded-full -z-10"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex flex-col md:flex-row md:items-center gap-12 md:gap-32"
          >
            <div className="space-y-4">
              <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Specialization</span>
              <p className="text-3xl font-light italic">Product & Interaction</p>
            </div>
            <div className="space-y-4">
              <span className="px-3 py-1 bg-purple-600 text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Philosophy</span>
              <p className="text-3xl font-light max-w-sm">Clarity in <span className="text-pink-500 font-medium">Chaos.</span></p>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <motion.div 
          className="relative w-full md:w-2/5 aspect-square"
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Multiple rotating rings */}
          <div className="absolute inset-0 border-[2px] border-orange-400/30 rounded-full animate-spin-slow" />
          <div className="absolute inset-4 border-[2px] border-pink-500/20 rounded-full animate-spin-slow-reverse" />
          <div className="absolute inset-8 border-[1px] border-purple-600/10 rounded-full animate-spin-slow" />
          
          {/* Large dynamic orb */}
          <motion.div 
            className="absolute inset-12 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-full shadow-[0_0_150px_rgba(236,72,153,0.5)]"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 180, 360],
              borderRadius: ["50%", "40%", "50%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-full" />
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-[12px] font-black uppercase tracking-[1.5em] text-white mix-blend-difference rotate-90 origin-center whitespace-nowrap">
                Creative Force • {new Date().getFullYear()}
             </div>
          </div>
        </motion.div>

      </div>
      
      {/* Background Large Text (Watermark) */}
      <div className="absolute -top-20 -right-20 -z-10 select-none pointer-events-none">
        <span className="text-[40vw] font-display font-black leading-none uppercase tracking-tighter opacity-[0.07] bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent italic">
          DESIGN
        </span>
      </div>
    </section>
  );
}
