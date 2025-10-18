import React, { useState } from "react";
import image01 from "@/assets/image01.png";
import image02 from "@/assets/image02.png";
import image03 from "@/assets/image03.png";
import image04 from "@/assets/image04.png";
import image05 from "@/assets/image05.png";

type Category = {
  label: string;
  image: string;
  href?: string;
  details?: string[];
};

const categories: Category[] = [
  {
    label: "Sofas & loungers",
    image: image01,
    href: "#collections",
    details: [
      "Sofas",
      "Recliner Sofas",
      "Sofa cum beds",
      "L shaped and corner sofas",
    ],
  },
  {
    label: "Tables",
    image: image02,
    href: "#collections",
    details: [
      "Coffee tables",
      "Side tables",
      "Console tables",
      "Dining tables",
    ],
  },
  {
    label: "Cabinets",
    image: image03,
    href: "#collections",
    details: [
      "TV cabinets",
      "Sideboards",
      "Display cabinets",
      "Wardrobes",
    ],
  },
  {
    label: "Chairs",
    image: image04,
    href: "#collections",
    details: [
      "Dining chairs",
      "Accent chairs",
      "Recliners",
      "Office chairs",
    ],
  },
  {
    label: "Soft Furnishings",
    image: image05,
    href: "#collections",
    details: [
      "Cushions",
      "Throws",
      "Rugs",
      "Curtains",
    ],
  },
];

const ShopByCategory: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
  <section id="collections" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
            Shop by category
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Choose from our range of styles and finishes to create a space that gives you the best in
            storage, comfort and quality.
          </p>
        </div>

        {/* Expanding strip on hover */}
        <div
          className="hidden md:flex gap-4 h-[460px]"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {categories.map((cat, i) => (
            <a
              key={cat.label}
              href={cat.href}
              onMouseEnter={() => setHoveredIndex(i)}
              className="relative rounded-xl overflow-hidden basis-0 min-w-[110px] bg-center bg-cover transition-[flex-grow] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              style={{
                backgroundImage: `url(${cat.image})`,
                flexGrow: hoveredIndex === null ? 1 : hoveredIndex === i ? 3 : 0.8,
              }}
            >
              {/* Dim/hover overlay */}
              <div
                className={`absolute inset-0 transition-colors ${
                  hoveredIndex === null
                    ? "bg-black/25"
                    : hoveredIndex === i
                    ? "bg-black/10"
                    : "bg-black/20"
                }`}
              />

              {/* Vertical label - shifted right */}
              <div className="absolute left-10 bottom-6 -rotate-90 origin-left">
                <span className="block text-white text-3xl xl:text-4xl font-semibold tracking-wide drop-shadow-md">
                  {cat.label}
                </span>
              </div>

              {/* Details shown on hover/expand */}
              {cat.details && (
                <div
                  className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-[70%] text-white/90 transition-all duration-500 ${
                    hoveredIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                  }`}
                >
                  <ul className="space-y-2 text-sm">
                    {cat.details.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="inline-block w-6 h-px bg-white/70" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Mobile grid fallback */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-4">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="relative rounded-xl overflow-hidden aspect-[3/4] bg-center bg-cover"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute left-6 bottom-2 -rotate-90 origin-left">
                <span className="block text-white text-lg font-semibold tracking-wide drop-shadow-md">
                  {cat.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
