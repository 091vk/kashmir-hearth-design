import { Hammer, Award, Users, TreePine } from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "Authentic Materials",
    description: "Premium walnut and deodar wood sourced sustainably from Kashmir valleys",
  },
  {
    icon: Hammer,
    title: "Master Craftsmanship",
    description: "Generations of expertise in traditional Kashmiri woodworking techniques",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized nationally for excellence in interior design and craftsmanship",
  },
  {
    icon: Users,
    title: "Custom Designs",
    description: "Personalized solutions tailored to your unique vision and space",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-right">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-sm font-medium text-accent">Our Story</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
              Crafting Heritage,
              <br />
              <span className="text-accent">Creating Legacies</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                For over 25 years, Chenab Valley Designers has been the epitome of luxury wooden interiors, 
                blending traditional Kashmiri artistry with contemporary design excellence.
              </p>
              <p className="text-lg leading-relaxed">
                Every piece we create is a testament to our commitment to preserving centuries-old woodworking 
                traditions while meeting the sophisticated needs of modern living spaces.
              </p>
              <p className="text-lg leading-relaxed">
                Our master artisans pour their heart and soul into each handcrafted creation, 
                ensuring that your space reflects timeless elegance and unparalleled quality.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="italic text-primary font-serif text-xl">
                "Where tradition meets innovation, and every grain tells a story."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Master Artisan, Chenab Valley</p>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border-2 border-border hover:border-accent transition-all duration-500 hover:shadow-xl group animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
