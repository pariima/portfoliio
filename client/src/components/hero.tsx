import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 relative">
        
        <div className="relative z-20 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium leading-[0.95] tracking-tight mb-8">
              Parima <br />
              <span className="text-muted-foreground italic font-light">Bajracharya</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              Product Designer crafting thoughtful, high-fidelity digital experiences. Based in Tokyo, working globally.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Expertise</span>
              <p className="text-sm font-medium">UX/UI • Interaction</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Contact</span>
              <p className="text-sm font-medium">hello@parima.design</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="relative w-full md:w-1/3 aspect-square"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
        >
          <div className="absolute inset-0 border border-foreground/5 rounded-full backdrop-blur-[1px] bg-white/5 animate-spin-slow" />
          <div className="absolute inset-[10%] bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-2xl" />
        </motion.div>

      </div>
    </section>
  );
}
