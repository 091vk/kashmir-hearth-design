import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-sm font-medium text-amber-300">Handcrafted Excellence from Kashmir</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white drop-shadow-lg mb-6 leading-tight">
            Timeless
            <br />
            <span className="text-amber-300">Wooden</span> Artistry
          </h1>
          
          <p className="hidden md:block text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Discover the finest handcrafted wooden interiors and premium décor, 
            where traditional Kashmiri craftsmanship meets contemporary elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white text-black hover:bg-white hover:text-black"
            >
              Custom Design
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-border/50">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">25+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/80">Handcrafted</div>
            </div>
          </div>
        </div>
      </div>

  {/* Decorative Element removed to show image clearly */}
    </section>
  );
};

export default Hero;
