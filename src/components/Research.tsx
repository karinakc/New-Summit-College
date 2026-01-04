import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight, X } from "lucide-react";

import studentsImg from "@/assets/hack.jpg";
import inductionImg from "@/assets/induction.jpg";
import bloodImg from "@/assets/blood.jpg";
import scienceImg from "@/assets/science.jpg";
import workshopImg from "@/assets/tech.png";

const Research = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedArea, setSelectedArea] = useState<any | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  const researchAreas = [
    {
      title: "Project-Based Learning in IT",
      badge: "Student Innovation",
      image: studentsImg,
      description:
        "Students actively engage in hands-on projects covering web development, databases, software engineering, and programming fundamentals.",
      objectives: [
        "Bridge theory with real-world implementation",
        "Encourage collaborative problem-solving",
        "Develop industry-relevant technical skills",
      ],
      involvement:
        "Students work individually and in teams under faculty mentorship, presenting projects during internal evaluations and exhibitions.",
      outcomes:
        "Graduates demonstrate stronger practical skills, confidence in project development, and readiness for internships and industry roles.",
    },
    {
      title: "Indigenous Knowledge & Local Technology Award",
      badge: "National Recognition",
      image: scienceImg,
      description:
        "New Summit College students were nationally recognized at the 10th Young Scientists Summit–2025 for integrating indigenous knowledge with modern technology.",
      objectives: [
        "Promote research rooted in local context",
        "Encourage culturally relevant innovation",
        "Support interdisciplinary thinking",
      ],
      involvement:
        "Students collaborated with faculty to research, document, and present indigenous practices aligned with modern scientific approaches.",
      outcomes:
        "National recognition strengthened the institution’s academic reputation and inspired students to pursue socially meaningful research.",
    },
    {
      title: "Technology Workshops & Seminars",
      badge: "Skill Development",
      image: workshopImg,
      description:
        "Regular workshops and expert-led seminars expose students to emerging technologies and evolving industry practices.",
      objectives: [
        "Introduce current industry tools and trends",
        "Connect students with professionals",
        "Enhance practical and soft skills",
      ],
      involvement:
        "Students participate in hands-on sessions, live demonstrations, and interactive discussions with industry experts.",
      outcomes:
        "Improved technical awareness, professional networking, and practical exposure beyond classroom learning.",
    },
    {
      title: "Blood Donation & Community Outreach",
      badge: "Community Initiative",
      image: bloodImg,
      description:
        "The college organizes blood donation drives and outreach programs in collaboration with healthcare institutions.",
      objectives: [
        "Promote social responsibility",
        "Encourage civic engagement",
        "Build leadership and teamwork",
      ],
      involvement:
        "Students volunteer, coordinate events, and participate actively in awareness campaigns and donation programs.",
      outcomes:
        "Strengthened sense of social ethics, leadership development, and positive community impact.",
    },
    {
      title: "Student Induction & Academic Orientation",
      badge: "Institutional Program",
      image: inductionImg,
      description:
        "Structured induction programs introduce students to academic culture, ethics, institutional values, and learning methodologies.",
      objectives: [
        "Ease transition into higher education",
        "Clarify academic expectations",
        "Build institutional belonging",
      ],
      involvement:
        "Faculty members, senior students, and administrators guide new students through interactive orientation sessions.",
      outcomes:
        "Improved academic adjustment, student confidence, and early engagement with institutional culture.",
    },
  ];

  return (
    <section
      id="research"
      className="py-32 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Research, Innovation & Academic Recognition
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Practice-Driven Learning, <span className="text-primary">Social Impact & Scholarly Excellence</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            At New Summit College, research is embedded within the learning process and extended through
            academic recognition, community engagement, and institutional initiatives. Students actively
            participate in projects, workshops, national-level research forums, and social programs that
            cultivate innovation, responsibility, and professional competence.
          </p>
        </div>
      </div>

      {/* Cards with Side Navigation */}
      <div className="relative container mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full border-2 border-primary/20 bg-background/90 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 items-center justify-center transition-all shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full border-2 border-primary/20 bg-background/90 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 items-center justify-center transition-all shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto px-4 lg:px-8 snap-x snap-mandatory pb-6 scrollbar-hide"
        >
        {researchAreas.map((area, index) => (
          <div
            key={index}
            className="w-[360px] flex-shrink-0 bg-card border border-border rounded-2xl overflow-hidden shadow-card snap-start"
          >
            <div className="relative h-48">
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                {area.badge}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-heading text-xl font-bold mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                {area.description}
              </p>

              <button
                onClick={() => setSelectedArea(area)}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Explore Details <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        </div>

        {/* Scroll Progress Indicator */}
        <div className="max-w-6xl mx-auto mt-8 px-4 lg:px-8">
          <div className="h-1 bg-border/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedArea && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedArea(null)}
        >
          <div 
            className="bg-card border border-border rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted flex items-center justify-center transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            <div className="grid md:grid-cols-2 gap-10 p-10">
              <img
                src={selectedArea.image}
                alt={selectedArea.title}
                className="rounded-2xl w-full h-full object-cover"
              />

              <div>
                <h3 className="font-heading text-3xl font-bold mb-4">
                  {selectedArea.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {selectedArea.description}
                </p>

                <div className="space-y-5 text-sm">
                  <div>
                    <h4 className="font-semibold text-accent uppercase mb-2">
                      Academic Objectives
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {selectedArea.objectives.map((o: string, i: number) => (
                        <li key={i}>{o}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-accent uppercase mb-2">
                      Student Engagement
                    </h4>
                    <p className="text-muted-foreground">
                      {selectedArea.involvement}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-accent uppercase mb-2">
                      Outcomes & Impact
                    </h4>
                    <p className="text-muted-foreground">
                      {selectedArea.outcomes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Research;
