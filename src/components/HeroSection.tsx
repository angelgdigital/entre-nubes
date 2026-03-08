import heroImg from "@/assets/hero-glamping.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Glamping rústico Amatista Glamp en Villa de Leyva"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wood-dark/60 via-wood-dark/30 to-wood-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-warm-gold font-body text-sm tracking-[0.35em] uppercase mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
          Villa de Leyva, Boyacá
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight text-shadow-hero animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
          Amatista Glamp
        </h1>
        <p className="font-display italic text-xl md:text-2xl text-cream/90 mt-4 animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
          Donde la naturaleza abraza el romance
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "1.1s" }}>
          <a
            href="#planes"
            className="inline-block bg-warm-gold text-warm-gold-foreground font-body font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:brightness-110 transition-all"
          >
            Ver Planes
          </a>
          <a
            href="#contacto"
            className="inline-block border-2 border-cream/60 text-cream font-body text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-cream/10 transition-all"
          >
            Reservar Ahora
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cream/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
