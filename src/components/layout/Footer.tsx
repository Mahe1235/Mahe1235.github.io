import { Linkedin, Twitter, Instagram, Mail, Heart } from "lucide-react";
import { personal } from "@/data/personal";

const stats = [
  { label: "Products Shipped", value: "12+" },
  { label: "Cups of Coffee", value: "∞" },
  { label: "Podcasts Binged", value: "500+" },
];

export default function Footer() {
  return (
    <footer className="bg-section-alt border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-8" />

        {/* Social links */}
        <div className="flex justify-center gap-3 mb-8">
          {[
            { href: personal.social.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: personal.social.twitter, icon: Twitter, label: "Twitter" },
            { href: personal.social.instagram, icon: Instagram, label: "Instagram" },
            { href: `mailto:${personal.social.email}`, icon: Mail, label: "Email" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="p-2.5 rounded-xl text-muted hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label={link.label}
            >
              <link.icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-muted/70">
          Built with <Heart size={12} className="inline text-primary mx-0.5" fill="currentColor" /> curiosity and lots of coffee. &copy; {new Date().getFullYear()} Mahendra B.
        </p>
      </div>
    </footer>
  );
}
