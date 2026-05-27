import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "WhatsApp, IG AI Agent",
    description:
      "Built a multi-tenant automation platform using Meta WhatsApp Cloud API (Flows, Business API), Instagram Graph API, integrated with Notion, Google Sheets, Calendars, Gmail, and Gemini via LangChain and LangGraph. Used Redis and BullMQ for scalable task processing.",
    tags: ["Node.js", "LangChain", "LangGraph", "Redis", "BullMQ", "WhatsApp API"],
    featured: true,
  },
  {
    title: "ERP System",
    description:
      "Developed a Multi Tenant ERP solution using Node.js, PostgreSQL, and React with GST compliance, inventory management, accounting, and CRM modules.",
    tags: ["Node.js", "PostgreSQL", "React", "ERP"],
    featured: true,
  },
  {
    title: "Custom CRM",
    description:
      "Designed a CRM system with lead tracking, communication logging, and automation workflows.",
    tags: ["CRM", "Node.js", "React"],
    featured: true,
  },
  {
    title: "WhatsApp Broadcasting System",
    description:
      "Developed a real-time bulk messaging system using Baileys (WebSockets) for automation workflows.",
    tags: ["WebSockets", "Baileys", "Node.js"],
    featured: true,
  },
  {
    title: "Knowledge AI System",
    description:
      "Built a RAG-based system using Gemini on structured SQL data for context-aware question answering.",
    tags: ["RAG", "Gemini", "SQL", "Python"],
    featured: true,
  },
  {
    title: "EcoCart (E-Commerce)",
    description:
      "MERN-based platform with cart, payments (Razorpay), and admin dashboard.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Razorpay"],
    featured: true,
  },
  {
    title: "BHP Detection System",
    description:
      "CNN-based image classification system integrated with Node.js and WhatsApp notifications.",
    tags: ["CNN", "TensorFlow", "Node.js", "WhatsApp API", "React"],
    featured: false,
  },
  {
    title: "Music App",
    description:
      "MERN-based streaming platform with playlists and search.",
    tags: ["MERN", "Streaming", "Playlists"],
    featured: false,
  },
  {
    title: "Career Website",
    description:
      "PHP + MySQL job portal with admin and user workflows.",
    tags: ["PHP", "MySQL", "Job Portal"],
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
