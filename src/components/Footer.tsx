import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const academicLinks = [
    { label: "B.Sc. CSIT", href: "#" },
    { label: "BCA", href: "#" },
    { label: "BBM", href: "#" },
    { label: "BBS", href: "#" },
    { label: "Plus 2", href: "https://plus2.newsummit.edu.np/" },
  ];

  const admissionsLinks = [
    { label: "How to Apply", href: "#" },
    { label: "Eligibility", href: "#" },
    { label: "Scholarships", href: "#" },
    { label: "Fee Structure", href: "#" },
    { label: "FAQs", href: "#" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Shantinagar, Tinkune, Kathmandu" },
    { icon: Phone, text: "01-4620522/23/24" },
    { icon: Mail, text: "info@newsummit.edu.np" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground relative z-40">
      {/* Accent top border */}
      <div className="h-1 bg-accent w-full" />
      
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-16 border-b border-primary-foreground/10">
            {/* Academic Column */}
            <div>
              <h4 className="font-heading font-bold text-lg text-primary-foreground mb-6 uppercase tracking-wide">
                Academic
              </h4>
              <ul className="space-y-4">
                {academicLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary transition-colors text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admissions Column */}
            <div>
              <h4 className="font-heading font-bold text-lg text-primary-foreground mb-6 uppercase tracking-wide">
                Admissions
              </h4>
              <ul className="space-y-4">
                {admissionsLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary transition-colors text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-heading font-bold text-lg text-primary-foreground mb-6 uppercase tracking-wide">
                Contact
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-foreground/70">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-base">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us Column */}
            <div>
              <h4 className="font-heading font-bold text-lg text-primary-foreground mb-6 uppercase tracking-wide">
                Follow Us
              </h4>
              <p className="text-primary-foreground/70 text-base mb-6 leading-relaxed">
                Stay connected with the latest news and updates from New Summit College.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <img 
                src="https://imgs.search.brave.com/-fM1AV_XalzOaNAvSyK6aNc4Wjl1OkoOSoP-VmIinmA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5lZHVzYW5qYWwu/Y29tL19fc2l6ZWRf/Xy9sb2dvcy9uZXdf/c3VtbWl0X2NvbGxl/Z2VfbG9nby10aHVt/Ym5haWwtMjAweDIw/MC03MC5qcGc"
                alt="New Summit College Logo"
                className="h-14 w-auto object-contain bg-white rounded-lg p-1"
              />
              <div>
                <span className="font-heading font-bold text-xl text-primary-foreground">New Summit</span>
                <span className="block text-sm text-primary-foreground/70">College</span>
              </div>
            </a>
            
            <p className="text-sm text-primary-foreground/50">
              © 2025 New Summit College. All rights reserved. Affiliated with Tribhuvan University.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
