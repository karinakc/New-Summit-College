import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { GraduationCap, FileText, CheckCircle2, ArrowRight } from "lucide-react";

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    program: "",
    previousSchool: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const programs = [
    "B.Sc. CSIT",
    "BCA - Bachelor of Computer Application",
    "BBM - Bachelor of Business Management",
    "BBS - Bachelor of Business Studies"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        address: "",
        phone: "",
        program: "",
        previousSchool: "",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-semibold text-xs uppercase tracking-widest">Admissions Open</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight whitespace-nowrap">
              Apply to <span className="text-primary">New Summit</span> College
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Take the first step towards your future. Fill out the application form below and our admissions team will contact you shortly.
            </p>
          </div>

          {/* Application Form */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Sidebar - Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Why Choose Us?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>TU Affiliated Programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Experienced Faculty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Modern Infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Scholarship Available</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-card to-card/50 border border-border">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Required Documents</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Grade 11 & 12 Transcripts</li>
                    <li>• Character Certificate</li>
                    <li>• Citizenship/ID Card</li>
                    <li>• Passport Size Photos (3)</li>
                    <li>• Migration Certificate (if applicable)</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-card to-card/50 border border-border">
                  <h3 className="font-bold text-sm text-foreground mb-3">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Contact our admissions office for assistance
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-primary font-medium">📞 01-4620522</p>
                    <p className="text-primary font-medium">✉️ admission@newsummit.edu.np</p>
                  </div>
                </Card>
              </div>

              {/* Main Form */}
              <div className="lg:col-span-3">
                <Card className="p-8 md:p-10 shadow-xl border-2 border-primary">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                        Application Submitted Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for applying. Our admissions team will contact you within 2-3 business days.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                          Application Form
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          Please fill in all required fields marked with *
                        </p>
                      </div>

                      {/* Form Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Address *
                          </label>
                          <Input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Your current address"
                            required
                            className="w-full"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Phone Number *
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+977 98XXXXXXXX"
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Select Program To Enroll *
                          </label>
                          <select
                            name="program"
                            value={formData.program}
                            onChange={handleChange}
                            required
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            <option value="">Select a program</option>
                            {programs.map((program) => (
                              <option key={program} value={program}>
                                {program}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Previous College / School Name *
                          </label>
                          <Input
                            type="text"
                            name="previousSchool"
                            value={formData.previousSchool}
                            onChange={handleChange}
                            placeholder="Your previous institution"
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message (Optional)
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Any additional information you'd like to share..."
                          rows={5}
                          className="w-full resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full md:w-auto px-8 group"
                        >
                          Submit Application
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        By submitting this form, you agree to our terms and conditions. We will process your application and contact you within 2-3 business days.
                      </p>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;
