import { Instagram, Youtube, Linkedin, Facebook, Globe } from "lucide-react";
import logo from "../assets/img/logo/topline.png";

export function Links() {
  const socialLinks = [
    { label: "Site Oficial", href: "/", icon: <Globe size={20} /> },
    { label: "Instagram", href: "https://www.instagram.com/topfusion_topflux_topfiber/", icon: <Instagram size={20} /> },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100070448310668", icon: <Facebook size={20} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chepli-topfusion-topfiber/", icon: <Linkedin size={20} /> },
    { label: "YouTube", href: "https://www.youtube.com/@TopFusion-TopLine-TopFiber", icon: <Youtube size={20} /> },
  ];

  const colors = ["var(--brand-secondary)", "var(--brand-dark)"]; // azul e preto

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      
      {/* Logo */}
      <div className="mb-6 flex items-center justify-center flex-col gap-1">
        <img src={logo} alt="Logo" className="w-16 h-auto rounded-full object-cover" />
        <h1 className="mt-3 text-2xl font-bold text-[rgb(var(--text-primary))]">TopLine NonStop</h1>
        <p className="text-[rgb(var(--text-secondary))]">Uma Conexão Forte com Você</p>
      </div>

      {/* Circulos de redes sociais */}
      <div className="flex gap-4 mb-12">
        {socialLinks.map((social, index) => (
          <a
            key={social.label}
            href={social.href}
            target="__blank"
            rel="noopener noreferrer"
            className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow hover:opacity-80 transition`}
            style={{ backgroundColor: `rgb(${colors[index % 2]})` }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Botões retangulares */}
      <div className="flex flex-col gap-3 w-full max-w-sm mb-6">
        {socialLinks.map((social, index) => (
          <a
            key={social.label}
            href={social.href}
            target="__blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-3 px-6 text-white rounded-xl shadow hover:scale-105 transform transition"
            style={{ backgroundColor: `rgb(${colors[index % 2]})` }}
          >
            {social.icon}
            <span className="font-semibold">{social.label}</span>
          </a>
        ))}
      </div>

      {/* Rodapé */}
      <div className="mt-8 text-sm text-[rgb(var(--text-secondary)/60%)] text-center">
        &copy; 2026 TopLine NonStop. Todos os direitos reservados
      </div>
    </div>
  );
}
