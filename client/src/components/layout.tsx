import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-display font-bold tracking-tight hover:opacity-70 transition-opacity">
            Parima.
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/"><a className="text-sm font-medium hover:text-muted-foreground transition-colors">Work</a></Link>
          <Link href="/about"><a className="text-sm font-medium hover:text-muted-foreground transition-colors">About</a></Link>
          <a href="#" className="text-sm font-medium hover:text-muted-foreground transition-colors">Resume</a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-background border-b border-border p-6 md:hidden flex flex-col gap-6"
        >
          <Link href="/"><a className="text-lg font-medium" onClick={() => setIsOpen(false)}>Work</a></Link>
          <Link href="/about"><a className="text-lg font-medium" onClick={() => setIsOpen(false)}>About</a></Link>
          <a href="#" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Resume</a>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="py-24 border-t border-border mt-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4 max-w-md">
            <h3 className="text-3xl font-display font-bold">Let's build something together.</h3>
            <p className="text-muted-foreground">
              Currently open for new opportunities.
              <br />
              hello@parima.design
            </p>
          </div>
          
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Socials</span>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Read.cv</a>
              <a href="#" className="hover:underline">Dribbble</a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border flex justify-between text-sm text-muted-foreground">
          <span>© 2026 Parima Bajracharya</span>
          <span>Designed in Replit</span>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black relative">
      <div className="absolute inset-0 bg-noise z-0 opacity-40 fixed"></div>
      <Navigation />
      <main className="pt-32 pb-12 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
