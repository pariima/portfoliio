import { motion } from "framer-motion";

export function FloatingShapes() {
  return null; // Removed the soft blurs for this specific brut-minimal aesthetic
}

import { Navigation, Footer } from "./layout-parts";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-primary relative font-sans selection:bg-primary selection:text-white">
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
