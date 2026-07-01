import { motion } from "framer-motion";

const experiences = [
  {
    company: "Amdrodd Technologies",
    role: "Software Engineer",
    period: "2026 – Present",
    bullets: [
      "Building a CRM platform on the MERN stack with integrated communication and workflow automation for end-to-end sales operations.",
      "Integrated Twilio (messaging), Google OAuth (email workflows), and the Fathom API (meeting insights and call tracking) into the core platform.",
      "Automated Salesforce data sync and workflow execution through custom backend services.",
      "Designed AI agents for lead enrichment, profile analysis, and risk prediction using historical data.",
    ],
  },
  {
    company: "Datahex Digital Solutions",
    role: "MERN Stack Developer",
    period: "2024 – 2026",
    bullets: [
      "Built a School Management System handling mentors, students, finances, and academic workflows for multiple institutions.",
      "Developed a gamified LMS with live chat, multimedia support, notifications, and payment integrations.",
      "Contributed to an AI-powered event platform with WhatsApp campaigns, vector search, and recommendation systems.",
      "Built real-time transcription and translation systems on WebSockets and third-party speech APIs.",
      "Shipped visa-processing and finance-tracking applications using Node.js and React.",
      "Built a facial-recognition photo retrieval system and exhibitor dashboards for event platforms.",
    ],
  },
  {
    company: "Acsia Technologies",
    role: "Software Engineer",
    period: "2023 – 2024",
    bullets: [
      "Optimized QNX RTOS boot time, memory footprint, and CPU performance for embedded automotive systems.",
      "Developed Adaptive AUTOSAR and AOSP applications; tuned system-level performance.",
      "Worked on Linux audio drivers, POSIX APIs, and kernel-level programming.",
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
