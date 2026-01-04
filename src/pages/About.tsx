import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Award,
  Users,
  BookOpen,
  Target,
  Eye,
  Heart,
  Building2,
  GraduationCap,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Users, value: "1000+", label: "Students Enrolled" },
    { icon: GraduationCap, value: "4", label: "Bachelor Programs" },
    { icon: Award, value: "1:16", label: "Student–Faculty Ratio" },
    { icon: Building2, value: "2007", label: "Established (2064 B.S.)" },
  ];

  const values = [
    {
      icon: Target,
      title: "Academic Excellence",
      description:
        "We maintain strong academic standards and continuously enhance our teaching methodologies to ensure quality education.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Inquiry",
      description:
        "We encourage curiosity, research-oriented thinking, and innovation through projects, workshops, and academic initiatives.",
    },
    {
      icon: Heart,
      title: "Ethics & Integrity",
      description:
        "We uphold honesty, discipline, and ethical responsibility in all academic and institutional practices.",
    },
    {
      icon: TrendingUp,
      title: "Holistic Growth",
      description:
        "We focus on intellectual, professional, and personal development to prepare students for real-world challenges.",
    },
  ];

  const facilities = [
    "Advanced Computer Laboratories",
    "Well-Stocked Academic Library",
    "Modern Smart Classrooms",
    "Seminar & Workshop Halls",
    "Research & Project Support",
    "Sports & Recreation Areas",
    "Canteen & Common Areas",
    "High-Speed Internet Access",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Welcome to <span className="text-primary">New Summit College</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Established in 2007 (2064 B.S.), New Summit College is a Tribhuvan University
              affiliated institution committed to quality education in Management,
              Science, and Information Technology.
            </p>
          </div>

<div className="mb-24">
  <div className="relative rounded-2xl overflow-hidden shadow-xl">
    {/* Background Image */}
    <img
      src="https://imgs.search.brave.com/nCdXZNOcQI1J1I4N9c5x4wzMJO_dHpKxnl6xAAEkiuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZW5wLmNv/bS91cGxvYWRzLzIw/MjQvMTEvbmV3LXN1/bW1pdC1jb2xsZWdl/LWJ1aWxkaW5nLnBu/Zw" // ← real NSC image here
      alt="Academic activities at New Summit College"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/65" />

    {/* Content */}
    <div className="relative z-10 p-12 text-center text-white">
      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
        Education Rooted in Practice, Research, and Responsibility
      </h2>
      <p className="max-w-3xl mx-auto text-white/90 text-lg leading-relaxed">
        Academic learning at New Summit College is strengthened through
        student-led projects, research exposure, seminars, social campaigns,
        and professional skill development.
      </p>
    </div>
  </div>
</div>


          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To deliver quality education by integrating academic knowledge with
                practical exposure, enabling students to become skilled professionals,
                responsible citizens, and lifelong learners.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[hsl(0,60%,35%)] flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be recognized as a leading academic institution in Nepal, producing
                graduates who are innovative, ethical, and capable of contributing to
                national and global development.
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const isBlue = value.title === "Academic Excellence" || value.title === "Ethics & Integrity";
                return (
                <Card
                  key={index}
                  className="relative p-6 overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,60%,35%)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 mb-4 rounded-xl ${isBlue ? 'bg-primary/10' : 'bg-[hsl(0,60%,35%)]/10'} flex items-center justify-center`}>
                      <value.icon className={`w-7 h-7 ${isBlue ? 'text-primary' : 'text-[hsl(0,60%,35%)]'}`} />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              )})}
            </div>
          </div>

          {/* Facilities */}
          <div className="mb-20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">
              Campus Facilities
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              Our facilities are designed to support academic excellence, research,
              collaboration, and student well-being.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {facilities.map((facility, index) => {
                const isBlue = facility === "Advanced Computer Laboratories" || 
                               facility === "Sports & Recreation Areas" || 
                               facility === "Modern Smart Classrooms" || 
                               facility === "High-Speed Internet Access";
                return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border hover:border-[hsl(0,60%,35%)]/40 hover:shadow-md transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg ${isBlue ? 'bg-primary/10' : 'bg-[hsl(0,60%,35%)]/10'} flex items-center justify-center`}>
                    <BookOpen className={`w-5 h-5 ${isBlue ? 'text-primary' : 'text-[hsl(0,60%,35%)]'}`} />
                  </div>
                  <span className="font-medium text-sm">{facility}</span>
                </div>
              )})}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
