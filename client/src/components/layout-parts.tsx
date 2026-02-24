import { motion } from "framer-motion";
import { Link } from "wouter";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <Link href="/">
          <a className="text-2xl font-black tracking-tighter uppercase group flex items-center gap-2">
            <span className="bg-primary text-white px-2 py-1">P</span>
            <span className="hidden md:inline">Parima</span>
          </a>
        </Link>
      </div>
      
      <div className="flex gap-8 pointer-events-auto bg-white/80 backdrop-blur-md px-6 py-3 border-2 border-primary rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Link href="/projects"><a className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Projects</a></Link>
        <Link href="/about"><a className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">About</a></Link>
        <Link href="/contact"><a className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Contact</a></Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white py-24 px-6 md:px-12 border-t-2 border-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="space-y-8">
          <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">
            Let's <br /> Talk
          </h2>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 border-2 border-white flex items-center justify-center font-bold hover:bg-white hover:text-primary transition-all">TW</a>
            <a href="#" className="w-12 h-12 border-2 border-white flex items-center justify-center font-bold hover:bg-white hover:text-primary transition-all">LI</a>
            <a href="#" className="w-12 h-12 border-2 border-white flex items-center justify-center font-bold hover:bg-white hover:text-primary transition-all">IG</a>
          </div>
        </div>
        
        <div className="text-right space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest opacity-60">© 2026 Parima Bajracharya</p>
          <p className="text-sm font-medium italic underline underline-offset-8 decoration-white/30 hover:decoration-white transition-all cursor-pointer">Back to top ↑</p>
        </div>
      </div>
    </footer>
  );
}
