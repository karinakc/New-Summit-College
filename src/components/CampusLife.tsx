import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import campusLifeImg from "@/assets/organization.jpeg";
import sportImg from "@/assets/sport.jpeg";
import culturalImg from "@/assets/event.png";

const CampusLife = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: number]: boolean }>({});

  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sections = [
    {
      title: "Student Clubs & Organizations",
      description: "Student clubs at New Summit College provide a platform for creativity, leadership, and collaboration beyond the classroom. These clubs encourage students to explore interests in areas such as technology, management, literature, social service, and innovation. Through regular meetings, workshops, competitions, and community activities, students develop communication skills, teamwork, and confidence while building meaningful peer networks and leadership experience.",
      image: campusLifeImg,
      stats: { label: "Active Clubs", value: "10+" },
    },
    {
      title: "Sports & Recreation",
      description: "Sports and recreational activities play an important role in promoting physical well-being and teamwork among students. The college supports indoor and outdoor sports activities, fitness programs, and inter-college competitions that encourage participation and discipline. Through sports events and recreational engagement, students balance academic life with health, motivation, and collaborative spirit. Sports and recreational activities play an important role in promoting physical well-being and teamwork among students. The college supports indoor and outdoor sports activities, fitness programs, and inter-college competitions that encourage participation and discipline. Through sports events and recreational engagement, students balance academic life with health, motivation, and collaborative spirit.",
      image: sportImg,
      stats: { label: "Sports Teams", value: "15+" },
    },
    {
      title: "Cultural Events",
      description: "Cultural programs at New Summit College celebrate creativity, diversity, and student expression. Events such as cultural festivals, talent shows, orientation programs, and social awareness campaigns provide opportunities for students to showcase skills in music, dance, art, and public speaking. These events strengthen campus unity, promote cultural appreciation, and create memorable learning experiences beyond academics.",
      image: culturalImg,
      stats: { label: "Annual Events", value: "50+" },
    },
  ];

  return (
    <section id="campus-life" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Beyond Academics</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Life at <span className="text-primary">New Summit</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            College is more than just classes. Discover the experiences that make New Summit a community.
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                </div>
                
                {/* Floating Stat */}
                <div className={`absolute -bottom-6 ${index % 2 === 1 ? "left-6" : "right-6"} bg-background rounded-xl shadow-card p-5 border border-border`}>
                  <div className="text-3xl font-heading font-bold text-accent">{section.stats.value}</div>
                  <div className="text-sm text-muted-foreground">{section.stats.label}</div>
                </div>

                {/* Decorative */}
                <div className={`absolute -z-10 w-full h-full rounded-2xl bg-primary/5 ${index % 2 === 1 ? "-left-6 -top-6" : "-right-6 -top-6"}`} />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {section.title}
                </h3>
                <div>
                  <p className={`text-muted-foreground text-lg leading-relaxed text-justify ${!expandedSections[index] ? "line-clamp-4" : ""}`}>
                    {section.description}
                  </p>
                  <button
                    onClick={() => toggleSection(index)}
                    className="mt-3 text-primary font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {expandedSections[index] ? (
                      <>
                        Read Less
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read More
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
