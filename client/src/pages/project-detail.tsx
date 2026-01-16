import { useRoute } from "wouter";
import { Layout } from "@/components/layout";
import { CustomCursor } from "@/components/custom-cursor";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import NotFound from "./not-found";

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const project = projects.find(p => p.id === params?.id);

  if (!project) return <NotFound />;

  return (
    <Layout>
      <CustomCursor />
      
      {/* Hero Header */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 block">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-medium mb-8">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </motion.div>
      </section>

      {/* Hero Image */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="container mx-auto px-6 mb-32"
      >
        <div className="aspect-video w-full bg-secondary rounded-xl overflow-hidden shadow-2xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </motion.section>

      {/* Project Details Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-y border-border py-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Role</h3>
            <p className="text-lg">{project.role}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Timeline</h3>
            <p className="text-lg">{project.timeline}</p>
          </div>
          <div className="col-span-1 md:col-span-2">
             <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Tools</h3>
             <div className="flex flex-wrap gap-2">
               {project.tools.map(tool => (
                 <span key={tool} className="px-3 py-1 bg-secondary rounded-full text-sm">
                   {tool}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="container mx-auto px-6 max-w-4xl space-y-32 mb-32">
        
        {/* The Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <h2 className="text-2xl font-display font-bold">The Challenge</h2>
          <div className="md:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </div>

        {/* Process Placeholders (Visuals) */}
        <div className="bg-secondary/50 rounded-lg p-12 aspect-[2/1] flex items-center justify-center border border-border">
          <p className="text-muted-foreground italic">Wireframes & User Flows Visualization</p>
        </div>

        {/* The Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <h2 className="text-2xl font-display font-bold">The Outcome</h2>
          <div className="md:col-span-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Final Mockup Placeholder */}
        <div className="bg-secondary/50 rounded-lg p-12 aspect-video flex items-center justify-center border border-border">
          <p className="text-muted-foreground italic">Interactive High-Fidelity Prototype</p>
        </div>

      </section>

    </Layout>
  );
}
