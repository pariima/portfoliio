import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Intense Top Left - Pink/Purple */}
      <motion.div
        animate={{
          x: [-100, 150, -100],
          y: [-100, 200, -100],
          scale: [1, 1.5, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-pink-500/40 to-purple-600/40 rounded-full blur-[100px] mix-blend-screen"
      />
      
      {/* Intense Top Right - Orange/Yellow */}
      <motion.div
        animate={{
          x: [100, -200, 100],
          y: [-50, 150, -50],
          scale: [1.2, 0.8, 1.2],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-15%] w-[900px] h-[900px] bg-gradient-to-br from-orange-500/40 to-yellow-400/30 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* Pulsing Center - Purple/Cyan */}
      <motion.div
        animate={{
          scale: [0.8, 1.4, 0.8],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-[1000px] h-[1000px] bg-gradient-to-tr from-purple-600/20 via-pink-400/20 to-blue-400/20 rounded-full blur-[150px] mix-blend-overlay"
      />

      {/* Floating Blobs - Yellow */}
      <motion.div
        animate={{
          x: [-200, 300, -200],
          y: [400, -100, 400],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-yellow-400/30 rounded-full blur-[90px] mix-blend-color-dodge"
      />

      {/* Deep Bottom Right - Orange/Red */}
      <motion.div
        animate={{
          x: [200, -300, 200],
          y: [100, -400, 100],
          rotate: [0, -180, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[1100px] h-[1100px] bg-gradient-to-tl from-red-500/30 via-orange-500/30 to-pink-500/30 rounded-full blur-[130px] mix-blend-screen"
      />

      {/* Animated Liquid Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.05),transparent_50%)] animate-pulse" />
    </div>
  );
}

import { Navigation, Footer } from "./layout-parts";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Highly visible Noise layer */}
      <div className="fixed inset-0 bg-noise z-50 pointer-events-none opacity-[0.25] mix-blend-overlay"></div>
      
      {/* Colorful Gradient Borders */}
      <div className="fixed inset-0 border-[20px] border-transparent bg-gradient-to-br from-orange-400/10 via-pink-500/10 to-purple-600/10 pointer-events-none z-[40]"></div>
      
      <FloatingShapes />
      <Navigation />
      <main className="pt-32 pb-12 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
