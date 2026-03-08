import logoAmatista from "@/assets/logo-amatista.png";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-cream/80 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-3">
            <img src={logoAmatista} alt="Amatista Glamp" className="h-8 w-8" />
            <span className="font-display text-xl text-cream">Amatista Glamp</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/amatista.glamp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1HbjjAkDCo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-warm-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-wood-medium/30 pt-8 text-center text-sm text-cream/50">
          <p>© {new Date().getFullYear()} Amatista Glamp. Villa de Leyva, Boyacá, Colombia.</p>
          <p className="mt-1">Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
