import heroImg from "@/assets/hero-glamping.jpg";
import cabinImg from "@/assets/cabin-interior.jpg";
import jacuzziImg from "@/assets/jacuzzi.jpg";
import vistaImg from "@/assets/vista-villa.jpg";
import romanticImg from "@/assets/romantic-plan.jpg";

const images = [
  { src: heroImg, alt: "Glamping exterior al atardecer" },
  { src: cabinImg, alt: "Interior acogedor de cabaña" },
  { src: jacuzziImg, alt: "Jacuzzi privado con vista" },
  { src: vistaImg, alt: "Vista panorámica de Villa de Leyva" },
  { src: romanticImg, alt: "Cena romántica en la cabaña" },
  { src: heroImg, alt: "Terraza del glamping de noche" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-warm-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Galería
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Momentos que inspiran
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-sm group ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i === 0 ? "h-full min-h-[300px] md:min-h-[500px]" : "h-[250px] md:h-[300px]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
