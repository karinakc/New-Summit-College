import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import collegeImg from "@/assets/college.jpg";

const Hero = () => {
  const stats = [
    { icon: Award, value: "1:16", label: "Faculty Ratio" },
    { icon: Users, value: "1000+", label: "Happy Students" },
    { icon: BookOpen, value: "4", label: "Top Programs" },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="max-w-2xl space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full text-primary text-xs font-bold tracking-wider uppercase backdrop-blur-sm border border-primary/20 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Affiliated with Tribhuvan University
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                Educating{" "}
                <span className="text-primary inline-block relative">
                  Innovators
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 animate-pulse"></span>
                </span>
                <br />
                for the Future
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                Established in 2007, we provide world-class education with up-to-date technology, empowering students to become global leaders.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
              <Link to="/apply">
                <Button size="lg" className="h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold border-2 border-border hover:border-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Integrated Stats Row */}
            <div className="pt-10 border-t border-border/60 grid grid-cols-3 gap-8 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2 group cursor-default">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                    <stat.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Clean Image Presentation */}
          <div className="relative animate-scale-in hidden lg:block">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 aspect-[4/5] max-h-[800px] w-full">
              <img
                src={collegeImg}
                alt="New Summit College Campus"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Decorative Frame Element */}
            <div className="absolute -inset-4 border-2 border-primary/10 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
