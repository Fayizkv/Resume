import { Github, Linkedin, Mail, Phone } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com/Fayizkv", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/fayiz-k-v", label: "LinkedIn" },
  { icon: Mail, href: "mailto:fayizkvcklm2002@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+919562981771", label: "Phone" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Muhammed Fayiz K V. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
