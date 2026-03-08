import cabinImg from "@/assets/cabin-interior.jpg";
import jacuzziImg from "@/assets/jacuzzi.jpg";

const features = [
  {
    icon: "🏡",
    title: "Cabañas en Madera",
    description: "Construcciones rústicas artesanales con acabados en madera natural, techos altos y ventanales panorámicos.",
  },
  {
    icon: "🌄",
    title: "Vista Privilegiada",
    description: "Panorámica inigualable de Villa de Leyva y sus montañas desde cada rincón del glamping.",
  },
  {
    icon: "🛁",
    title: "Jacuzzi Privado",
    description: "Relájate en nuestro jacuzzi al aire libre con vista a las montañas y al atardecer boyacense.",
  },
  {
    icon: "🔥",
    title: "Fogata & Estrellas",
    description: "Noches mágicas junto al fuego bajo uno de los cielos estrellados más claros de Colombia.",
  },
];

const AccommodationSection = () => {
  return (
    <section id="alojamiento" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-warm-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Alojamiento
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Tu hogar en la montaña
          </h2>
        </div>

        {/* Images grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <img
            src={cabinImg}
            alt="Interior de cabaña rústica en Amatista Glamp"
            className="w-full h-[400px] object-cover rounded-sm shadow-xl"
          />
          <img
            src={jacuzziImg}
            alt="Jacuzzi privado con vista a las montañas"
            className="w-full h-[400px] object-cover rounded-sm shadow-xl"
          />
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="text-center p-6 bg-background rounded-sm shadow-md hover:shadow-xl transition-shadow"
            >
              <span className="text-4xl mb-4 block">{f.icon}</span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
