import { motion } from "framer-motion";

const experiences = [
  {
    company: "Amdrodd Technologies",
    role: "Software Engineer",
    period: "Jan 2026 – Present",
    bullets: [
      "AI Automation: Built specialized AI agents to search profiles and predict risks using historical data.",
      "Telegram AI Agent: Specialized AI agents to collect lead data into Salesforce application conveniently.",
    ],
  },
  {
    company: "Datahex Digital Solutions",
    role: "MERN Stack Developer",
    period: "Nov 2024 – 2026",
    bullets: [
      "School Management System: Built a MERN app managing mentors, students, finances, and diaries across schools.",
      "Gamified LMS With Chat: Built backend/admin panel for materials, payments, mentors, teams, notifications, scoring and complete chat functionalities with multimedia support. Integrated Firebase notifications and payment gateways.",
      "AI-Powered Event Management: Contributed to a MERN platform with speaker/session management, badge builder, WhatsApp campaigns, and AI agent integration. Implemented vector-based recommendations and search via MongoDB.",
      "Live Transcription & Translation (Next.js): Developed multilingual real-time system using various providers and WebSockets.",
      "Visa & Finance Systems: Built Node.js + React apps for visa workflows and finance tracking.",
      "Photo Retrieval & Exhibitor Apps: Next.js systems for facial-based photo retrieval and event exhibitor dashboards.",
    ],
  },
  {
    company: "Acsia Technologies",
    role: "Software Engineer",
    period: "Jul 2023 – 2024",
    bullets: [
      "Optimized QNX RTOS for improved boot time, memory usage, and CPU performance.",
      "Contributed to Adaptive AUTOSAR applications and performance tuning.",
      "Developed Android Infotainment apps with Mapbox SDK and system service integration.",
      "Worked on Linux Audio drivers, POSIX APIs, and kernel-level programming for embedded stability.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            Experience
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            Where I've <span className="gradient-text">worked</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[14px] top-2 w-[11px] h-[11px] rounded-full bg-primary border-2 border-background" />

                <div className="glass p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h4 className="text-lg font-bold text-foreground">
                      {exp.company}
                    </h4>
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-mono text-sm mb-3">
                    {exp.role}
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
