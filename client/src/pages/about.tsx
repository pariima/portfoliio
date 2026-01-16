import { Layout } from "@/components/layout";
import { CustomCursor } from "@/components/custom-cursor";
import { profile } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <CustomCursor />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] bg-secondary rounded-lg overflow-hidden"
          >
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-medium mb-8">
                Designing for clarity in a complex world.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {profile.bio}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 5 years of experience, I've worked with startups and Fortune 500 companies to ship digital products that users love. My process is deeply rooted in user research and rapid prototyping.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Currently Reading</h2>
              <ul className="space-y-4">
                {profile.currentlyReading.map((book, i) => (
                  <li key={i} className="text-lg border-b border-border pb-4 flex items-center justify-between group">
                    <span>{book}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Experience</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-medium">Senior Product Designer</h3>
                    <span className="text-muted-foreground">2023 — Present</span>
                  </div>
                  <p className="text-muted-foreground">TechCorp Inc.</p>
                </div>
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-medium">UX Designer</h3>
                    <span className="text-muted-foreground">2020 — 2023</span>
                  </div>
                  <p className="text-muted-foreground">Creative Studio</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
