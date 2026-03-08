import vistaImg from "@/assets/vista-villa.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-warm-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Bienvenidos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Un refugio entre<br />montañas y estrellas
            </h2>
            <div className="w-16 h-0.5 bg-warm-gold mb-8" />
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Amatista Glamp es un glamping rústico en madera ubicado en las montañas de Villa de Leyva, Boyacá. Con una vista privilegiada al pueblo más hermoso de Colombia, ofrecemos una experiencia única de conexión con la naturaleza sin renunciar al confort.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Nuestras cabañas en madera, rodeadas de vegetación nativa, son el escenario perfecto para planes románticos, descanso y aventura. Despierta con el sonido de los pájaros y el aroma del campo boyacense.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={vistaImg}
              alt="Vista panorámica de Villa de Leyva desde Amatista Glamp"
              className="rounded-sm shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-8 py-5 rounded-sm shadow-lg">
              <p className="font-display text-2xl font-bold">Vista</p>
              <p className="text-sm text-primary-foreground/80">Privilegiada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
