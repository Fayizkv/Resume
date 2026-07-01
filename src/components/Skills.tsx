import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript/TypeScript", "Go", "Python", "C/C++", "Java", "PHP"],
    span: "md:col-span-1",
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "React Native", "HTML", "CSS"],
    span: "md:col-span-1",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Go", "REST APIs", "WebSockets", "Microservices"],
    span: "md:col-span-1",
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQLite", "SQL"],
    span: "md:col-span-1",
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3)", "Render", "Docker", "CI/CD"],
    span: "md:col-span-1",
  },
  {
    title: "Integrations & APIs",
    items: ["Twilio", "Google OAuth", "Salesforce", "WhatsApp Cloud API", "Instagram Graph API", "Razorpay"],
    span: "md:col-span-1",
  },
  {
    title: "Real-Time Systems",
    items: ["Redis", "BullMQ", "Message Queues", "Event-Driven Architecture", "WebSockets"],
    span: "md:col-span-1",
  },
  {
    title: "AI & Automation",
    items: ["RAG", "LangChain", "LangGraph", "FAISS", "n8n", "AI Agents"],
    span: "md:col-span-1",
  },
  {
    title: "Tools",
    items: ["Git", "Jira", "Notion", "Postman", "Linux"],
    span: "md:col-span-1",
  },
  {
    title: "Systems Programming",
    items: ["POSIX APIs", "Linux Kernel", "QNX RTOS"],
    span: "md:col-span-1",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            Skills
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            Tech <span className="gradient-text">stack</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className={`glass glow-border p-6 ${group.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h4 className="font-mono text-primary text-sm mb-4 tracking-wide">
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
