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
      
      {/* Hero Image */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full mb-12 pt-24"
      >
        <div className="w-full aspect-[16/9] bg-muted overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </motion.section>

      {/* Title & Description */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>
      </section>

      {/* Metadata Grid */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="border-2 border-primary p-6">
            <h3 className="text-xs font-black uppercase tracking-widest mb-3 opacity-50">Role</h3>
            <p className="text-sm font-medium">{project.role}</p>
          </div>
          <div className="border-2 border-primary p-6">
            <h3 className="text-xs font-black uppercase tracking-widest mb-3 opacity-50">Tools/Skills</h3>
            <p className="text-sm font-medium">{project.tools.join(", ")}</p>
          </div>
          <div className="border-2 border-primary p-6">
            <h3 className="text-xs font-black uppercase tracking-widest mb-3 opacity-50">Team</h3>
            <p className="text-sm font-medium">Solo Designer</p>
          </div>
          <div className="border-2 border-primary p-6">
            <h3 className="text-xs font-black uppercase tracking-widest mb-3 opacity-50">Duration</h3>
            <p className="text-sm font-medium">{project.timeline}</p>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 space-y-20 mb-32">
        
        {/* Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xs font-black uppercase tracking-widest mb-6 opacity-50">BACKGROUND</h2>
          <p className="text-base leading-relaxed mb-8">
            {project.challenge}
          </p>
        </motion.div>

        {/* Goals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-muted/30 border-2 border-primary p-8 md:p-12"
        >
          <h2 className="text-xs font-black uppercase tracking-widest mb-6 opacity-50">GOALS</h2>
          <ul className="space-y-3 text-base">
            <li>• Simplify user management workflows</li>
            <li>• Create seamless progress tracking</li>
            <li>• Improve navigation and findability</li>
            <li>• Reduce administrative overhead</li>
          </ul>
        </motion.div>

        {/* Process Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xs font-black uppercase tracking-widest mb-6 opacity-50">DESIGN PROCESS</h2>
          <div className="border-2 border-primary aspect-video bg-muted flex items-center justify-center">
            <p className="text-sm font-medium opacity-50">Wireframes & User Flows</p>
          </div>
        </motion.div>

        {/* Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-xs font-black uppercase tracking-widest mb-6 opacity-50">OUTCOME</h2>
          <p className="text-base leading-relaxed">
            {project.outcome}
          </p>
        </motion.div>

        {/* Final Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-xs font-black uppercase tracking-widest mb-6 opacity-50">FINAL SOLUTION</h2>
          <div className="border-2 border-primary aspect-video bg-muted flex items-center justify-center mb-6">
            <p className="text-sm font-medium opacity-50">High-Fidelity Prototype</p>
          </div>
        </motion.div>

      </section>

    </Layout>
  );
}
