import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Top Left - Pink */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-400/30 rounded-full blur-[120px]"
      />
      
      {/* Top Right - Orange/Yellow Gradient */}
      <motion.div
        animate={{
          x: [0, -150, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[5%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-orange-400/30 to-yellow-300/20 rounded-full blur-[140px]"
      />

      {/* Middle Left - Purple */}
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 150, -100, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] left-[10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]"
      />

      {/* Center - Multi-color mesh */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[30%] w-[800px] h-[800px] bg-gradient-to-tr from-pink-300/10 via-purple-300/10 to-orange-300/10 rounded-full blur-[160px] opacity-50"
      />

      {/* Bottom Right - Orange/Pink */}
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, -200, 100, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-orange-400/30 to-pink-400/20 rounded-full blur-[150px]"
      />

      {/* Bottom Left - Yellow/Purple */}
      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-gradient-to-tr from-yellow-400/20 to-purple-400/20 rounded-full blur-[110px]"
      />
    </div>
  );
}

import { Navigation, Footer } from "./layout-parts";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <div className="fixed inset-0 bg-noise z-50 pointer-events-none opacity-[0.18]"></div>
      <FloatingShapes />
      <Navigation />
      <main className="pt-32 pb-12 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
