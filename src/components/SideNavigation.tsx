import { useState, useEffect } from "react";
import { Home, GraduationCap, Layout, FlaskConical, Bell } from "lucide-react";

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "academics", label: "Academics", icon: GraduationCap },
    { id: "research", label: "Research", icon: FlaskConical },
    { id: "notices", label: "Notices", icon: Bell },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }

      // Hide navigation when footer is in view
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsVisible(footerRect.top > windowHeight * 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="bg-background/80 backdrop-blur-md rounded-2xl border border-border/50 shadow-card p-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              aria-label={item.label}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              
              {/* Tooltip */}
              <span className={`absolute left-full ml-4 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap
                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200
                ${isActive ? "bg-primary text-primary-foreground" : "bg-foreground text-background"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
      
      {/* Active indicator line */}
      <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-border rounded-full">
        <div 
          className="w-full bg-primary rounded-full transition-all duration-300"
          style={{
            height: `${100 / navItems.length}%`,
            transform: `translateY(${navItems.findIndex(item => item.id === activeSection) * 100}%)`,
          }}
        />
      </div>
    </nav>
  );
};

export default SideNavigation;
