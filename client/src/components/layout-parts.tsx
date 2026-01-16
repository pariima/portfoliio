import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-border/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-display font-bold tracking-tight hover:opacity-70 transition-opacity">
            Parima.
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/"><a className="text-sm font-medium hover:opacity-60 transition-opacity">Work</a></Link>
          <Link href="/about"><a className="text-sm font-medium hover:opacity-60 transition-opacity">About</a></Link>
          <a href="#" className="text-sm font-medium hover:opacity-60 transition-opacity">Resume</a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

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
    <footer className="py-24 border-t border-border/20 mt-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4 max-w-md">
            <h3 className="text-4xl font-display font-bold tracking-tighter">Let's build something together.</h3>
            <p className="text-muted-foreground text-lg">
              Currently open for new opportunities.
              <br />
              <a href="mailto:hello@parima.design" className="text-foreground font-medium hover:underline transition-all">hello@parima.design</a>
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Socials</span>
              <a href="#" className="text-sm hover:opacity-60 transition-opacity">LinkedIn</a>
              <a href="#" className="text-sm hover:opacity-60 transition-opacity">Read.cv</a>
              <a href="#" className="text-sm hover:opacity-60 transition-opacity">Dribbble</a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-border/10 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
          <span>© 2026 Parima Bajracharya</span>
          <span>Tokyo / Remote</span>
        </div>
      </div>
    </footer>
  );
}
