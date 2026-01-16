import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps {
  id: string;
  title: string;
  category: string;
  image: string;
  color: string;
}

export function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
  // Use index to create an asymmetrical layout effect
  const isEven = index % 2 === 0;

  return (
    <Link href={`/project/${project.id}`}>
      <motion.div
        className={`group cursor-pointer relative ${isEven ? 'md:mt-0' : 'md:mt-32'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-secondary shadow-sm transition-all duration-500 group-hover:shadow-2xl">
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"
            style={{ backgroundColor: project.color }}
          />
          
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[4/5] md:aspect-[3/4] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between items-center text-white"
            >
              <div>
                <p className="text-sm font-medium opacity-80 mb-1">{project.category}</p>
                <h3 className="text-3xl font-display font-bold leading-tight">{project.title}</h3>
              </div>
              <div className="bg-white text-black p-3 rounded-full">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between items-center md:hidden">
           <h3 className="text-xl font-display font-medium">{project.title}</h3>
           <span className="text-sm text-muted-foreground">{project.category}</span>
        </div>
      </motion.div>
    </Link>
  );
}
