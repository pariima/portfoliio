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
  return (
    <Link href={`/project/${project.id}`}>
      <motion.div
        className="group cursor-pointer relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 50 }}
      >
        <div 
          className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-secondary mb-6 relative"
        >
          {/* Background color overlay that appears on hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"
            style={{ backgroundColor: project.color }}
          />
          
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Floating 'View' button that appears on hover */}
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
              <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-display font-medium mb-1 group-hover:underline decoration-1 underline-offset-4 decoration-muted-foreground/50">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-lg">{project.category}</p>
          </div>
          {/* Optional Year or Tag could go here */}
        </div>
      </motion.div>
    </Link>
  );
}
