import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin, Phone } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto w-full">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-6">
              &lt;full-stack-dev /&gt;
            </p>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="text-foreground">Muhammed</span>
            <br />
            <span className="gradient-text">Fayiz K V</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Full Stack Developer (MERN) & AI Automation Engineer specializing in
            real-time systems and agentic AI.
          </motion.p>

          <motion.div
            className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              Kochi, India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-primary" />
              +91-9562981771
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              download="Muhammed_Fayiz_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg glass border-glass-border text-foreground font-semibold hover:bg-card/80 transition-all"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Glow ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-lg" />
            {/* Border ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/60 to-primary/10" />
            <img
              src={profileImg}
              alt="Muhammed Fayiz K V"
              className="relative w-full h-full rounded-full object-cover object-top border-2 border-background"
            />
          </div>
          {/* Status badge */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass px-4 py-1.5 rounded-full border border-primary/20 flex items-center gap-2"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">Available for work</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
