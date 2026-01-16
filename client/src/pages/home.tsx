import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { CustomCursor } from "@/components/custom-cursor";
import { projects } from "@/lib/data";

export default function Home() {
  return (
    <Layout>
      <CustomCursor />
      <Hero />
      
      <section className="mb-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>
      
      <section className="border-y border-border/10 py-16 bg-foreground/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.5em] text-muted-foreground flex justify-between items-center opacity-40 whitespace-nowrap gap-12">
            <span>Interface Design</span>
            <span className="hidden md:inline">User Experience</span>
            <span>Prototyping</span>
            <span className="hidden md:inline">Motion Design</span>
          </h2>
        </div>
      </section>
    </Layout>
  );
}
