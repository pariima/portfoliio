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
      
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
      
      {/* Marquee-like section / CTA */}
      <section className="border-y border-border py-12 bg-card/50 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-display text-muted-foreground flex justify-between items-center opacity-50">
            <span>Interface Design</span>
            <span>User Experience</span>
            <span>Prototyping</span>
            <span>Motion</span>
          </h2>
        </div>
      </section>
    </Layout>
  );
}
