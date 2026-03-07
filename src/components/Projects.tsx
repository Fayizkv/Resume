import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "WhatsApp AI Agent (WhisAi)",
    description:
      "Multi-tenant project to automate workflows using WhatsApp Cloud API integrated with Notion, Google Sheets, Calendars, Gmail, and Gemini (via LangChain, LangGraph Node.js) and n8n for dynamic task execution. Redis BullMQ for handling large requests.",
    tags: ["Node.js", "LangChain", "LangGraph", "Redis", "BullMQ", "n8n"],
    featured: true,
  },
  {
    title: "Knowledge AI System",
    description:
      "Implemented a Retrieval-Augmented Generation (RAG) pipeline using Gemini on a structured SQL knowledge base for context-aware question answering.",
    tags: ["RAG", "Gemini", "SQL", "Python"],
    featured: true,
  },
  {
    title: "BHP Detection System",
    description:
      "CNN-based image classifier integrated with Node.js, WhatsApp API, and React.js frontend for real-time notifications.",
    tags: ["CNN", "TensorFlow", "Node.js", "WhatsApp API", "React"],
    featured: true,
  },
  {
    title: "EcoCart",
    description:
      "Full MERN stack e-commerce platform with cart management, Razorpay integration, and admin dashboard for product and order management.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Razorpay"],
    featured: true,
  },
  {
    title: "Music App",
    description:
      "MERN-based web music player supporting playlist creation, search, and real-time song streaming.",
    tags: ["MERN", "Streaming", "Playlists"],
    featured: false,
  },
  {
    title: "Interview Scheduler",
    description:
      "Full-stack scheduling system for candidates and interviewers with HR dashboard and status tracking.",
    tags: ["Django", "Python", "Full Stack"],
    featured: false,
  },
  {
    title: "Career Website",
    description:
      "PHP + MySQL job portal enabling employer listings, candidate applications, and admin management.",
    tags: ["PHP", "MySQL", "Job Portal"],
    featured: false,
  },
  {
    title: "Other Projects",
    description:
      "Resort Booking App, Weather App, Expense Tracker (MERN), and IoT projects including Arduino-based Party Light Automation and Piano Project.",
    tags: ["MERN", "Arduino", "IoT"],
    featured: false,
  },
];

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            Featured <span className="gradient-text">work</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass glow-border p-6 group hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-xl font-bold text-foreground">
                  {project.title}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-mono text-primary text-sm tracking-widest uppercase mb-6">
            Other Projects
          </h4>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {other.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass p-5 group hover:border-primary/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h5 className="text-sm font-bold text-foreground mb-2">
                {project.title}
              </h5>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground font-mono text-[10px]"
                  >
                    {tag}
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

export default Projects;
