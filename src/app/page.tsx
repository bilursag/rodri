/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, ExternalLink, Calendar, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const artist = {
    name: "Rodrigo",
    latestRelease: "Elevate",
    bio: "DJ y productor de música electrónica con influencias de EDM, house y melodic techno. Conocido por sus energéticas actuaciones en vivo y emocionantes producciones que combinan beats potentes con melodías emotivas.",
    featuredImage: "/vercel.svg",
    logo: "/next.svg",
    socialLinks: [
      { name: "Spotify", url: "https://spotify.com" },
      { name: "YouTube", url: "https://youtube.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "Twitter", url: "https://twitter.com" },
    ],
    upcomingEvents: [
      {
        date: "12 JUN",
        venue: "Club Atmosphere",
        location: "Valdivia, CL",
        ticketUrl: "#",
      },
      {
        date: "18 JUN",
        venue: "Festival Electro",
        location: "Santiago, CL",
        ticketUrl: "#",
      },
      {
        date: "25 JUN",
        venue: "Beach Party",
        location: "Viña del Mar, CL",
        ticketUrl: "#",
      },
    ],
    featuredTracks: [
      { title: "Elevate", cover: "/globe.svg", streamUrl: "#" },
      { title: "Midnight Dreams", cover: "/window.svg", streamUrl: "#" },
      { title: "Summer Vibes", cover: "/file.svg", streamUrl: "#" },
    ],
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={artist.logo}
              alt={artist.name}
              width={120}
              height={30}
              className="dark:invert"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="#music"
              className={cn(
                "hover:text-primary transition-colors",
                activeSection === "music" ? "text-primary" : ""
              )}
            >
              MÚSICA
            </Link>
            <Link
              href="#events"
              className={cn(
                "hover:text-primary transition-colors",
                activeSection === "events" ? "text-primary" : ""
              )}
            >
              EVENTOS
            </Link>
            <Link
              href="#about"
              className={cn(
                "hover:text-primary transition-colors",
                activeSection === "about" ? "text-primary" : ""
              )}
            >
              SOBRE MÍ
            </Link>
            <Link
              href="#merch"
              className={cn(
                "hover:text-primary transition-colors",
                activeSection === "merch" ? "text-primary" : ""
              )}
            >
              MERCH
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors">
              CONTACTO
            </button>
            <button className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/1920x1080/?concert')",
            transform: `translateY(${scrollY * 0.2}px)`,
            filter: "brightness(0.6)",
          }}
        />

        <div className="container relative z-10 px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
            {artist.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/80 mb-8 max-w-2xl">
            {artist.bio}
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              onClick={togglePlay}
              className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium transition-all hover:bg-primary/90"
            >
              {isPlaying ? (
                <>
                  <Pause size={18} />
                  <span>PAUSE</span>
                </>
              ) : (
                <>
                  <Play size={18} />
                  <span>ESCUCHAR AHORA</span>
                </>
              )}
            </button>

            <button className="flex items-center justify-center space-x-2 bg-background/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-full font-medium transition-all hover:bg-white/20">
              <Calendar size={18} />
              <span>VER PRÓXIMOS EVENTOS</span>
            </button>
          </div>
          <div className="flex items-center space-x-6 mt-12">
            {artist.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">{link.name}</span>
                <ExternalLink size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/50 text-sm mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div
              className="w-2 h-2 bg-white rounded-full"
              style={{
                animation: "scroll 1.5s ease-in-out infinite",
              }}
            ></div>
          </div>
        </div>
      </section>
      <section id="music" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-xl uppercase tracking-wider mb-2 text-primary">
                Último lanzamiento
              </h2>
              <h3 className="text-4xl font-bold mb-6">
                {artist.latestRelease}
              </h3>
              <p className="text-muted-foreground mb-8">
                Explora el último lanzamiento con su mezcla única de beats
                energéticos y melodías emotivas que te transportarán a otro
                nivel. Disponible ahora en todas las plataformas.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <Play size={18} />
                  <span>ESCUCHAR</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors"
                >
                  <ShoppingBag size={18} />
                  <span>COMPRAR AHORA</span>
                </a>
              </div>
            </div>

            <div className="flex-1 order-1 md:order-2">
              <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://source.unsplash.com/random/800x800/?album-cover"
                  alt={artist.latestRelease}
                  objectFit="cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Tracks Destacados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {artist.featuredTracks.map((track, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={track.cover}
                      alt={track.title}
                      objectFit="cover"
                      width={400}
                      height={400}
                      className="dark:invert"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                      <button
                        onClick={togglePlay}
                        className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center"
                      >
                        <Play size={24} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{track.title}</h3>
                    <div className="flex items-center space-x-3 mt-3">
                      <a
                        href={track.streamUrl}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Spotify
                      </a>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                      <a
                        href={track.streamUrl}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Apple Music
                      </a>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                      <a
                        href={track.streamUrl}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <a
                href="#"
                className="text-primary border border-primary px-6 py-3 rounded-full font-medium hover:bg-primary/10 transition-colors"
              >
                VER DISCOGRAFÍA COMPLETA
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="events" className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Próximos Eventos
          </h2>
          <p className="text-center text-accent-foreground/80 mb-12 max-w-2xl mx-auto">
            No te pierdas la oportunidad de vivir la experiencia en vivo.
            Consulta las fechas y lugares de los próximos eventos.
          </p>

          <div className="max-w-3xl mx-auto">
            {artist.upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 mb-4 bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-6">
                  <div className="font-mono text-xl font-bold whitespace-nowrap">
                    {event.date}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{event.venue}</h3>
                    <p className="text-muted-foreground">{event.location}</p>
                  </div>
                </div>

                <a
                  href={event.ticketUrl}
                  className="mt-4 md:mt-0 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  COMPRAR TICKETS
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="#"
              className="text-accent-foreground border border-accent-foreground px-6 py-3 rounded-full font-medium hover:bg-accent-foreground/10 transition-colors"
            >
              VER TODOS LOS EVENTOS
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://source.unsplash.com/random/600x800/?dj"
                  alt={artist.name}
                  objectFit="cover"
                  width={600}
                  height={800}
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Sobre {artist.name}</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="mb-4">
                  {artist.name} es un DJ y productor emergente de la escena de
                  música electrónica de Chile, cuyo sonido único mezcla las
                  raíces de la música house con influencias modernas del EDM y
                  toques de melodic techno.
                </p>
                <p className="mb-4">
                  Con actuaciones en los principales clubes y festivales de
                  Latinoamérica, {artist.name} ha construido una base de
                  seguidores leales gracias a sus energéticas presentaciones en
                  vivo y a su capacidad para conectar con el público a través de
                  melodías emotivas y beats potentes.
                </p>
                <p>
                  Su último lanzamiento &quot;{artist.latestRelease}&quot; ha recibido
                  apoyo de importantes DJs internacionales y marca un nuevo
                  capítulo en su carrera musical, explorando sonidos más
                  profundos y emocionales mientras mantiene la energía que
                  caracteriza sus producciones.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  LEER BIO COMPLETA →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Mantente Conectado</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Suscríbete para recibir las últimas noticias, fechas de eventos y
            lanzamientos exclusivos directamente en tu bandeja de entrada.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground"
              required
            />
            <button
              type="submit"
              className="bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors"
            >
              SUSCRIBIRSE
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-card text-card-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <Image
                src={artist.logo}
                alt={artist.name}
                width={150}
                height={40}
                className="dark:invert mb-4"
              />
              <p className="text-sm text-muted-foreground max-w-xs">
                Música electrónica que conecta con las emociones y energiza el
                alma.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-bold uppercase mb-4">Navegación</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#music"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Música
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#events"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Eventos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Sobre Mí
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#merch"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Merch
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Términos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase mb-4">Social</h3>
                <ul className="space-y-2 text-sm">
                  {artist.socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {artist.name}. Todos los derechos
              reservados.
            </p>

            <div className="mt-4 sm:mt-0">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Diseñado por Your Studio
              </a>
            </div>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
