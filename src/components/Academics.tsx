import { ArrowUpRight, BookOpen, FlaskConical, Briefcase, Palette, GraduationCap, X, Laptop, Award } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import csit from "@/assets/csit.jpeg";
import bca from "@/assets/bca.jpeg";
import bbm from "@/assets/bbm.jpeg";
import bbs from "@/assets/bbs.jpeg";


const Academics = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  const programs = [
    {
      icon: BookOpen,
      title: "B.Sc. CSIT",
      description: "Bachelor of Science in Computer Science and Information Technology is a 4-year/8-semester course designed to provide sound theoretical and practical knowledge on Computer Science and Information Technology.",
      featured: true,
      image: csit,
      duration: "4 Years (8 Semesters)",
      affiliation: "Tribhuvan University",
      eligibility: "Minimum D grade in all subjects of Grade 11 and 12 with 100 marks in Mathematics or Biology",
      details: [
        "Comprehensive curriculum covering programming, algorithms, databases, networking, and software engineering",
        "State-of-the-art computer labs with latest technology",
        "Project-based learning with real-world applications",
        "Internship opportunities with leading IT companies",
        "Strong foundation in both theoretical and practical aspects"
      ],
      careers: [
        "Software Developer/Engineer",
        "Web Developer",
        "Database Administrator",
        "System Analyst",
        "Network Administrator",
        "IT Consultant",
        "Cybersecurity Specialist",
        "Data Scientist/Analyst"
      ]
    },
    {
      icon: BookOpen,
      title: "BCA",
      description: "Bachelor of Computer Application (BCA) is a highly demanded 4-year/8-semester program affiliated to Tribhuvan University, Faculty of Humanities and Social Sciences. It covers 126 credit hours.",
      featured: true,
      image: bca,
      duration: "4 Years (8 Semesters)",
      affiliation: "Tribhuvan University",
      eligibility: "Minimum D grade in all subjects of Grade 11 and 12",
      details: [
        "Focus on application development and software solutions",
        "Hands-on training in web and mobile app development",
        "Industry-relevant curriculum with latest programming languages",
        "Regular workshops and seminars by industry experts",
        "Career opportunities in software development, system administration, and IT consulting"
      ],
      careers: [
        "Application Developer",
        "Mobile App Developer",
        "Frontend/Backend Developer",
        "Software Tester",
        "System Administrator",
        "Technical Support Engineer",
        "Web Designer",
        "IT Project Manager"
      ]
    },
    {
      icon: Briefcase,
      title: "BBM",
      description: "Bachelor of Business Management (BBM) is a 4-year/8-semester course affiliated to Tribhuvan University, focusing on management, marketing, finance, and entrepreneurship.",
      featured: false,
      image: bbm,
      duration: "4 Years (8 Semesters)",
      affiliation: "Tribhuvan University",
      eligibility: "Minimum D grade in all subjects of Grade 11 and 12",
      details: [
        "Comprehensive business education covering all management aspects",
        "Focus on leadership, strategic thinking, and decision making",
        "Practical exposure through case studies and business simulations",
        "Guest lectures from successful entrepreneurs and managers",
        "Prepares students for careers in management, marketing, and entrepreneurship"
      ],
      careers: [
        "Business Manager",
        "Marketing Executive",
        "Human Resource Manager",
        "Entrepreneur/Business Owner",
        "Project Manager",
        "Business Analyst",
        "Operations Manager",
        "Sales Manager"
      ]
    },
    {
      icon: Briefcase,
      title: "BBS",
      description: "Bachelor of Business Studies is a four year degree program conducted by Tribhuvan University, Faculty of Management, designed for business and management education.",
      featured: false,
      image: bbs,
      duration: "4 Years (8 Semesters)",
      affiliation: "Tribhuvan University",
      eligibility: "Minimum D grade in all subjects of Grade 11 and 12",
      details: [
        "Strong foundation in business principles and practices",
        "Emphasis on accounting, finance, and business economics",
        "Develops analytical and critical thinking skills",
        "Practical training through internships and projects",
        "Career paths in banking, finance, accounting, and business management"
      ],
      careers: [
        "Accountant/Financial Analyst",
        "Banking Officer",
        "Finance Manager",
        "Auditor",
        "Tax Consultant",
        "Investment Analyst",
        "Business Consultant",
        "Administrative Officer"
      ]
    },
  ];

  return (
    <section id="academics" className="py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          {/* Subtle Academic Background Icon */}
          <GraduationCap className="hidden lg:block absolute -top-20 left-1/3 w-[420px] h-[420px] text-primary/5 pointer-events-none" />

          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-semibold text-xs uppercase tracking-widest">
                Academic Programs
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Explore Your <br />
              <span className="text-primary">Educational Opportunities</span>
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              New Summit College offers TU affiliated programs in Management,
              Science and Information Technology including B.Sc. CSIT, BCA,
              BBM & BBS — designed for academic depth and career readiness.
            </p>
          </div>

          {/* RIGHT CARD */}
          {/* RIGHT SIDE - Program Highlights */}
          <div className="relative grid grid-cols-1 gap-6 max-w-2xl ml-auto">
            {[
              { icon: BookOpen, title: "Expert Faculty" },
              { icon: Laptop, title: "Modern Labs" },
              { icon: Award, title: "Scholarships Available" },
              { icon: FlaskConical, title: "Hands-On Learning" },
            ].map((highlight, i) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-6 px-8 py-5 rounded-3xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300"
                >
                  <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 text-primary">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h4 className="text-lg font-semibold text-foreground">{highlight.title}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Broken Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large Featured Cards */}
          {programs.filter(p => p.featured).map((program, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500 h-[450px]"
            >
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-10">
                {/* Accent line */}
                <div className="w-12 h-1 bg-primary mb-6" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-5">
                      <program.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                      {program.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-base line-clamp-2 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProgram(index)}
                    className="flex-shrink-0 w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-all duration-300"
                  >
                    <ArrowUpRight className="w-6 h-6 text-primary-foreground group-hover:text-primary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Smaller Offset Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:ml-16 md:mr-16 lg:ml-32 lg:mr-32">
          {programs.filter(p => !p.featured).map((program, idx) => {
            const index = programs.indexOf(program);
            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500 h-[350px] hover:-translate-y-2"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

                {/* Accent line */}
                <div className="absolute left-0 top-10 w-1 h-12 bg-primary rounded-r-full" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="pl-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-5">
                        <program.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mb-3">
                        {program.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-base leading-relaxed line-clamp-3">
                        {program.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProgram(index)}
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary-foreground group-hover:text-primary transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedProgram(null)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-3xl shadow-2xl animate-scale-in overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="max-h-[90vh] overflow-y-auto">
              {/* Header with Image */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src={programs[selectedProgram].image}
                    alt={programs[selectedProgram].title}
                    className="w-full h-full object-cover scale-105 blur-[2px] opacity-40"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/50 to-primary/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center hover:bg-background transition-colors shadow-lg z-10"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                <div className="relative h-full flex items-end p-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-3xl bg-primary shadow-xl flex items-center justify-center flex-shrink-0">
                      {(() => {
                        const Icon = programs[selectedProgram].icon;
                        return <Icon className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                        {programs[selectedProgram].title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-primary border-b-2 border-accent pb-1">{programs[selectedProgram].affiliation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {programs[selectedProgram].description}
                </p>

                {/* Program Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                    <div className="text-sm text-muted-foreground mb-2">Duration</div>
                    <div className="text-lg font-semibold text-foreground">{programs[selectedProgram].duration}</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                    <div className="text-sm text-muted-foreground mb-2">Eligibility</div>
                    <div className="text-lg font-semibold text-foreground">{programs[selectedProgram].eligibility}</div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-foreground mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {programs[selectedProgram].details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Opportunities */}
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-4">Career Opportunities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {programs[selectedProgram].careers.map((career, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <p className="text-sm font-medium text-foreground">{career}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-border">
                  <Link to="/apply">
                    <button className="w-full md:w-auto px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
                      Apply Now
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


export default Academics;
