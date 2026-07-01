import { motion } from "framer-motion";
import { Code2, Brain, Cpu, Users } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, label: "MERN Stack" },
    { icon: Brain, label: "AI / ML" },
    { icon: Cpu, label: "Systems" },
    { icon: Users, label: "Team Lead" },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            About
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-8">
            Turning complexity into{" "}
            <span className="gradient-text">clean code</span>
          </h3>
          <div className="text-muted-foreground text-lg leading-relaxed mb-10 space-y-4">
            <p className="font-mono text-primary text-sm font-semibold">
              Full-Stack Developer &bull; Backend & System Design &bull; AI Automation &bull; Fast Learner
            </p>
            <p>
              3 years shipping production systems end-to-end across MERN, Go, and AI/RAG pipelines.
              Built platforms serving 600+ concurrent users and backend services benchmarked at 1,000 req/sec with a 99.75% success rate.
            </p>
            <p>
              Picks up new stacks fast; strong system-design instincts and an independent, high-velocity problem-solving style.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="glass glow-border p-6 text-center"
            >
              <h.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <span className="font-mono text-sm text-foreground">
                {h.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
