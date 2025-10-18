import { Button } from "@/components/ui/button";

const InteriorDesigner = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Interior Designer Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your space with expert guidance from our interior designers or order exclusive designer products tailored to your style.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hire Designer */}
          <div className="bg-card rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-serif font-semibold text-primary mb-2">Hire an Interior Designer</h3>
            <p className="text-muted-foreground mb-6">
              Get personalized design solutions, space planning, and expert advice for your home or office. Our designers blend Kashmiri artistry with modern trends.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
              Book a Consultation
            </Button>
          </div>
          {/* Order Designer Products */}
          <div className="bg-card rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-serif font-semibold text-primary mb-2">Order Designer Products</h3>
            <p className="text-muted-foreground mb-6">
              Shop exclusive, custom-made furniture and décor crafted by our designers. Unique pieces, premium materials, and timeless style delivered to your door.
            </p>
            <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8">
              Explore Designer Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorDesigner;