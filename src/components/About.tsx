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
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Full Stack Developer who loves building things that actually work—from
            AI/ML models to real-time systems. Specialized in the MERN stack, I
            dive into system-level programming when performance matters, and enjoy
            turning complex problems into clean code. Transitioned from low-level
            systems (QNX/Linux Kernel) to high-level MERN stack and AI
            architecture. Thrive when leading teams, fast learner, clear
            communicator, and always curious about the next challenge.
          </p>
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
