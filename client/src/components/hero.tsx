import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.05] tracking-tight mb-8 text-balance">
          Hi, I'm Parima. <br />
          <span className="text-muted-foreground">Product Designer</span> focusing on human-centered digital experiences.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
          I craft intuitive interfaces that blend aesthetic precision with functional depth. Currently building for the future of fintech and spatial computing.
        </p>
      </motion.div>
    </section>
  );
}
