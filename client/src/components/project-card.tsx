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
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Link href={`/project/${project.id}`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </Link>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                {project.category}
              </span>
              <h3 className="text-4xl md:text-6xl font-display font-medium tracking-tight">
                {project.title}
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-light">
              Designing impactful solutions that bridge the gap between user needs and business goals.
            </p>

            <Link href={`/project/${project.id}`}>
              <a className="inline-flex items-center gap-4 group">
                <span className="text-sm font-bold uppercase tracking-widest border-b border-foreground/20 group-hover:border-foreground pb-1 transition-all">
                  View Case Study
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
