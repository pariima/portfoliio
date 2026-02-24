import { motion } from "framer-motion";
import { Link } from "wouter";

interface ProjectProps {
  id: string;
  title: string;
  category: string;
  image: string;
}

export function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
  return (
    <section className="border-b-2 border-primary bg-white group hover:bg-primary transition-colors duration-500 overflow-hidden">
      <Link href={`/project/${project.id}`}>
        <div className="container mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 cursor-pointer">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest opacity-60 group-hover:text-white group-hover:opacity-100 transition-colors">
              <span>0{index + 1}</span>
              <span className="h-px w-8 bg-current"></span>
              <span>{project.category}</span>
            </div>
            
            <h2 className="text-5xl md:text-[8vw] font-display font-black leading-none uppercase tracking-tighter group-hover:text-white transition-colors">
              {project.title}
            </h2>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
               {[1,2,3].map(i => (
                 <span key={i} className="px-3 py-1 border border-white text-white text-[10px] font-bold uppercase rounded-full">Tag Label</span>
               ))}
            </div>
          </div>

          <div className="w-full md:w-1/3 aspect-[4/5] border-2 border-primary overflow-hidden relative group-hover:border-white transition-colors">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </Link>
    </section>
  );
}
