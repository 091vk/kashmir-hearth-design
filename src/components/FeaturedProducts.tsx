import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";

const products = [
  {
    id: 1,
    name: "Royal Dining Collection",
    category: "Dining Room",
    price: "₹4,50,000",
    image: product1,
    description: "Handcrafted walnut dining set with intricate Kashmiri patterns",
  },
  {
    id: 2,
    name: "Heritage Bedroom Suite",
    category: "Bedroom",
    price: "₹6,25,000",
    image: product2,
    description: "Luxurious bedroom furniture with traditional carved details",
  },
  {
    id: 3,
    name: "Artisan Wall Panel",
    category: "Décor",
    price: "₹1,75,000",
    image: product3,
    description: "Exquisite wooden wall art showcasing Kashmir craftsmanship",
  },
  {
    id: 4,
    name: "Modern Luxury Sofa Set",
    category: "Living Room",
    price: "₹5,75,000",
    image: product4,
    description: "Contemporary walnut sofa with traditional carved accents",
  },
  {
    id: 5,
    name: "Designer Coffee Table",
    category: "Living Room",
    price: "₹1,25,000",
    image: product5,
    description: "Elegant modern coffee table with intricate wooden patterns",
  },
  {
    id: 6,
    name: "Contemporary Bookshelf",
    category: "Study",
    price: "₹2,85,000",
    image: product6,
    description: "Modular bookshelf with geometric Kashmiri design elements",
  },
  {
    id: 7,
    name: "Premium TV Console",
    category: "Living Room",
    price: "₹3,25,000",
    image: product7,
    description: "Modern entertainment unit with handcrafted wooden details",
  },
  {
    id: 8,
    name: "Signature Lounge Chair",
    category: "Living Room",
    price: "₹1,95,000",
    image: product8,
    description: "Luxurious accent chair blending modern comfort with tradition",
  },
  {
    id: 9,
    name: "Elegant Sideboard",
    category: "Dining Room",
    price: "₹3,75,000",
    image: product9,
    description: "Contemporary storage cabinet with geometric carved patterns",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="collections" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-sm font-medium text-accent">Featured Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4">
            Masterpiece Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece tells a story of heritage, crafted with passion and precision by master artisans
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden bg-card border-2 border-border hover:border-accent transition-all duration-500 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                  <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300 shadow-sm"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-accent hover:text-accent hover:bg-accent/10"
                  >
                    Learn More →
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
