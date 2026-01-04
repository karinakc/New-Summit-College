import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["01-4620522", "01-4620523"],
      link: "tel:01-4620522"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@newsummit.edu.np", "admission@newsummit.edu.np"],
      link: "mailto:info@newsummit.edu.np"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Shantinagar, Tinkune", "Kathmandu, Nepal"],
      link: "https://maps.app.goo.gl/RmNu737uysFtZCDS8"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Friday: 6:30 AM - 5:00 PM", "Saturday: Closed"],
      link: null
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about admissions, programs, or campus life? We're here to help. 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information Cards */}
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      info.link ? (
                        <a
                          key={idx}
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      )
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-6xl font-bold mb-10 text-center">Send us a <span className="text-primary">Message</span></h2>
              <Card className="p-8 border-2 border-primary shadow-lg">
                <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="+977 98XXXXXXXX" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    rows={6}
                    required 
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-[hsl(0,60%,35%)] text-white">
                <h2 className="font-heading text-2xl font-bold mb-4">Visit Our Campus</h2>
                <p className="text-white/90 mb-6">
                  We welcome visitors to our campus. Schedule a tour to experience our 
                  facilities, meet our faculty, and see what makes New Summit College special.
                </p>
                <Button variant="outline" size="lg" className="w-full bg-white text-[hsl(0,60%,35%)] hover:bg-white/90 hover:text-black border-white">
                  Schedule Campus Tour
                </Button>
              </Card>

              {/* Map */}
              <Card className="overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7848756!2d85.34867!3d27.69444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d849c6e54f%3A0x8e8c8d8e8e8e8e8e!2sShantinagar%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New Summit College Location"
                />
              </Card>

              {/* Social Media */}
              <Card className="p-6 bg-[hsl(0,60%,35%)] text-white">
                <h3 className="font-heading font-bold text-lg mb-4 text-center">Follow Us</h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-[hsl(0,60%,35%)] transition-colors text-white"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
