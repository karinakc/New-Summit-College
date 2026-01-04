const FeatureStatement = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Big Number */}
            <div className="md:col-span-4 text-center md:text-left">
              <div className="inline-block">
                <span className="font-heading font-bold text-8xl md:text-9xl text-primary">25</span>
                <span className="font-heading font-bold text-4xl md:text-5xl text-primary align-top">+</span>
              </div>
              <p className="text-lg font-medium text-foreground mt-2">Years of Excellence</p>
            </div>

            {/* Quote */}
            <div className="md:col-span-8 space-y-6">
              <blockquote className="relative">
                <span className="absolute -top-6 -left-4 text-6xl text-primary/20 font-serif">"</span>
                <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed">
                  Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
                </p>
              </blockquote>
              <p className="text-muted-foreground text-lg max-w-2xl">
                At New Summit College, we believe in nurturing not just students, but future leaders, innovators, and changemakers who will shape the world of tomorrow.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-0.5 bg-primary" />
                <p className="text-sm text-muted-foreground">Our Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStatement;
