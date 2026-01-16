import { motion } from "framer-motion";
import { Navigation, Footer } from "./layout-parts";

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[5%] w-96 h-96 bg-pink-300/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] right-[30%] w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"
      />
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div className="fixed inset-0 bg-noise z-50 pointer-events-none opacity-[0.15]"></div>
      <FloatingShapes />
      <Navigation />
      <main className="pt-32 pb-12 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
