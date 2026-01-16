import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[5%] left-[5%] w-96 h-96 bg-pink-100/30 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[120px]"
      />
    </div>
  );
}

import { Navigation, Footer } from "./layout-parts";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div className="fixed inset-0 bg-noise z-50 pointer-events-none opacity-[0.1]"></div>
      <FloatingShapes />
      <Navigation />
      <main className="pt-32 pb-12 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
