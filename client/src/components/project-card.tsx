import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ProjectProps {
  id: string;
  title: string;
  category: string;
  image: string;
  color: string;
}

export function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section className="py-24 md:py-48 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
          
          {/* Large Editorial Image */}
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ opacity: 0, scale: 0.9, rotate: isEven ? -2 : 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href={`/project/${project.id}`}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl cursor-pointer shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] group">
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10"
                  style={{ backgroundColor: project.color }}
                />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Floating Category Tag */}
                <div className="absolute top-8 left-8 z-20">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-sm">
                    {project.category.split(' • ')[1]}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Minimal Editorial Text */}
          <motion.div 
            className="w-full md:w-2/5 space-y-8"
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-foreground/20"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
                  Project 0{index + 1}
                </span>
              </div>
              <h3 className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-none">
                {project.title}
              </h3>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Crafting a seamless digital identity through thoughtful interaction and visual storytelling.
            </p>

            <Link href={`/project/${project.id}`}>
              <a className="inline-flex items-center group/link">
                <span className="text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-foreground/10 group-hover/link:border-foreground pb-2 transition-all duration-300">
                  Explore Case Study
                </span>
                <motion.div 
                  className="ml-4 w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover/link:bg-foreground group-hover/link:text-background transition-colors duration-500"
                  whileHover={{ x: 10 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </a>
            </Link>
          </motion.div>

        </div>
      </div>
      
      {/* Background Decorative Accent */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent z-[-1]"
        style={{ top: `${40 + index * 10}%` }}
      />
    </section>
  );
}
