import romanticImg from "@/assets/romantic-plan.jpg";

const plans = [
  {
    name: "Plan Romántico",
    price: "Desde $350.000",
    perNight: "por noche / pareja",
    features: [
      "Cabaña privada en madera",
      "Cena romántica con velas",
      "Botella de vino",
      "Desayuno artesanal",
      "Decoración con pétalos de rosa",
    ],
    highlight: true,
  },
  {
    name: "Plan Relax",
    price: "Desde $280.000",
    perNight: "por noche / pareja",
    features: [
      "Cabaña privada en madera",
      "Acceso a jacuzzi",
      "Desayuno artesanal",
      "Fogata nocturna",
      "Late checkout",
    ],
    highlight: false,
  },
  {
    name: "Plan Aventura",
    price: "Desde $320.000",
    perNight: "por noche / pareja",
    features: [
      "Cabaña privada en madera",
      "Ruta de senderismo guiada",
      "Desayuno artesanal",
      "Fogata con marshmallows",
      "Vista panorámica 360°",
    ],
    highlight: false,
  },
];

const PlansSection = () => {
  return (
    <section id="planes" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={romanticImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-wood-dark/85" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-warm-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Planes
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Experiencias inolvidables
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm p-8 flex flex-col transition-transform hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-warm-gold text-warm-gold-foreground shadow-2xl scale-105"
                  : "bg-background/95 text-foreground shadow-xl"
              }`}
            >
              <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`font-display text-3xl font-bold mb-1 ${plan.highlight ? "" : "text-primary"}`}>
                {plan.price}
              </p>
              <p className={`text-xs mb-6 ${plan.highlight ? "text-warm-gold-foreground/70" : "text-muted-foreground"}`}>
                {plan.perNight}
              </p>
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/573001234567?text=Hola%2C%20quiero%20reservar%20el%20" 
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-body text-sm uppercase tracking-widest py-3 rounded-sm transition-all ${
                  plan.highlight
                    ? "bg-wood-dark text-cream hover:bg-wood-medium"
                    : "bg-primary text-primary-foreground hover:brightness-110"
                }`}
              >
                Reservar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
