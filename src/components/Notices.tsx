import { AlertCircle, Calendar, FileText, Bell } from "lucide-react";

const Notices = () => {
  const notices = [
    {
      date: "Dec 28",
      year: "2025",
      title: "Semester Registration Opens",
      description: "Online registration for Spring 2026 begins. Check your eligibility and register early.",
      type: "important",
      icon: AlertCircle,
    },
    {
      date: "Dec 20",
      year: "2025",
      title: "Winter Break Schedule",
      description: "College will be closed from December 24 to January 2. Library access available online.",
      type: "info",
      icon: Calendar,
    },
    {
      date: "Dec 15",
      year: "2025",
      title: "Form Submission Deadline",
      description: "Final date to submit forms for the semester exams.",
      type: "deadline",
      icon: FileText,
    },
    {
      date: "Dec 10",
      year: "2025",
      title: "Annual Sports Week",
      description: "Join us for a week of exciting sporting events, competitions, and athletic activities for all students.",
      type: "info",
      icon: Bell,
    },
    {
      date: "Dec 5",
      year: "2025",
      title: "Scholarship Application Results",
      description: "Merit scholarship results for the academic year 2025-26 have been announced.",
      type: "important",
      icon: AlertCircle,
    },
  ];

  return (
    <section id="notices" className="py-32 bg-gradient-subtle relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Latest Updates</span>
              <div className="w-16 h-1 bg-[hsl(0,60%,35%)] mt-4 mb-4"></div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Notices & Announcements
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed mb-10">
                Stay informed about important dates, deadlines, and campus news.
              </p>
              <button className="text-primary font-semibold text-base hover:underline inline-flex items-center gap-2 group">
                View All Notices
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[70px] md:left-[90px] top-0 bottom-0 w-0.5 bg-border" />

              {/* Notices */}
              <div className="space-y-8">
                {notices.map((notice, index) => (
                  <div key={index} className="relative flex gap-6 md:gap-8 group">
                    {/* Date Column */}
                    <div className="flex-shrink-0 w-14 md:w-[70px] text-right">
                      <div className={`font-heading font-bold text-2xl md:text-3xl ${
                        notice.type === "important" ? "text-accent" : "text-foreground"
                      }`}>
                        {notice.date.split(" ")[1]}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">{notice.date.split(" ")[0]}</div>
                    </div>

                    {/* Timeline Dot */}
                    <div className={`relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      notice.type === "important"
                        ? "bg-accent text-accent-foreground shadow-lg ring-4 ring-accent/20"
                        : notice.type === "deadline"
                        ? "bg-primary text-primary-foreground shadow-md ring-4 ring-primary/20"
                        : "bg-background border-2 border-border text-foreground group-hover:border-primary"
                    }`}>
                      <notice.icon className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-background rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        {notice.type === "important" && (
                          <span className="text-xs font-bold text-accent bg-accent/10 px-4 py-1.5 rounded-full uppercase tracking-wide">
                            Important
                          </span>
                        )}
                        {notice.type === "deadline" && (
                          <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-wide">
                            Deadline
                          </span>
                        )}
                        <span className="text-sm text-muted-foreground">
                          {notice.year}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {notice.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {notice.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notices;
