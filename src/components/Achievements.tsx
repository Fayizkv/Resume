import { motion } from "framer-motion";
import { Trophy, Medal, Heart } from "lucide-react";

const achievements = [
  {
    icon: Heart,
    title: "Conducted a hackathon focused on solving real-world problems.",
  },
  {
    icon: Trophy,
    title: "1st Prize - Decipher Hackathon.",
  },
  {
    icon: Medal,
    title: "4th Rank - VAIGA Agri Hackathon (Government of Kerala).",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            Achievements
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            Recognition & <span className="gradient-text">impact</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className="glass glow-border p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <a.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <p className="text-foreground text-sm font-medium leading-relaxed">
                {a.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
