import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "WhatsApp & Instagram AI Agent Platform",
    description:
      "Architected a multi-tenant, multi-platform AI automation suite — web app plus a React Native mobile client — on the Meta WhatsApp Cloud API and Instagram Graph API, with support for custom/pluggable tools and integrations into Notion, Google Calendar, Gmail, and Sheets. Built advanced conversational intelligence: automated follow-ups, hot/cold lead scoring, and automatic human handoff, backed by a RAG pipeline (Gemini + LangChain/LangGraph) for context-aware expense and calendar management. Scaled to 600 concurrent users on a single AWS t4g.micro instance using Redis and BullMQ for asynchronous task processing.",
    tags: ["React Native", "WhatsApp Cloud API", "Instagram Graph API", "LangChain", "LangGraph", "Gemini", "Redis", "BullMQ", "AWS"],
    featured: true,
  },
  {
    title: "URL Shortener — Go (Backend System-Design Benchmark)",
    description:
      "Designed and built a high-throughput URL shortener in Go to stress-test backend system-design fundamentals. Load-tested at 1,000 requests/second over a continuous 5-minute run on a shared AWS t4g.micro instance running other live workloads concurrently, sustaining a 99.75% success rate with no signs of degradation — indicating headroom well beyond the test window. Used Redis for caching, SQLite for persistence, and queue-based request handling for resilience under load.",
    tags: ["Go", "Redis", "SQLite", "System Design", "AWS", "Load Testing"],
    featured: true,
  },
  {
    title: "ERP Platform + E-Commerce Microservices",
    description:
      "Built and shipped a production multi-tenant ERP (Node.js, PostgreSQL, React) that automated the company's inventory-to-sales pipeline, GST-compliant accounting, and CRM workflows — directly improving operational efficiency. Extended the platform with microservices that let a single ERP instance centrally manage multiple e-commerce storefronts.",
    tags: ["Node.js", "PostgreSQL", "React", "Microservices"],
    featured: true,
  },
  {
    title: "Salesman Route Tracking App",
    description:
      "Built a React Native field-force app where admins define and assign geo-routes to salesmen; salesmen check in and mark visits in real time. Integrated with the company ERP for unified sales and route analytics.",
    tags: ["React Native", "ERP", "Analytics", "Geo-routes"],
    featured: true,
  },
  {
    title: "WhatsApp Broadcasting System",
    description:
      "Real-time bulk messaging engine built on Baileys/WebSockets for large-scale outbound automation workflows.",
    tags: ["Baileys", "WebSockets", "Node.js", "Automation"],
    featured: true,
  },
  {
    title: "Knowledge AI System",
    description:
      "RAG-based Q&A system using Gemini over structured SQL data for context-aware enterprise knowledge retrieval.",
    tags: ["RAG", "Gemini", "SQL", "Enterprise Q&A"],
    featured: true,
  },
  {
    title: "Custom CRM",
    description:
      "Lead tracking, communication logging, and sales automation workflows.",
    tags: ["CRM", "Sales Automation", "Workflow"],
    featured: false,
  },
  {
    title: "EcoCart",
    description:
      "MERN e-commerce platform with Razorpay payments and admin dashboard.",
    tags: ["MERN", "Razorpay", "E-Commerce"],
    featured: false,
  },
  {
    title: "Music App",
    description:
      "MERN streaming platform with playlists and search.",
    tags: ["MERN", "Streaming", "Playlists"],
    featured: false,
  },
  {
    title: "Career Portal",
    description:
      "PHP/MySQL job portal with admin and user workflows.",
    tags: ["PHP", "MySQL", "Job Portal"],
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
