"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  ChevronLeft,
  Share2,
  Heart,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Discografia() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);

  const discography = [
    {
      id: 1,
      title: "Elevate",
      year: "2025",
      cover:"https://images.unsplash.com/photo-1657122610346-5a74283f8736?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGFsYnVtJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D",
      type: "Álbum",
      tracks: [
        {
          id: 1,
          title: "Elevate",
          duration: "3:45",
          isExplicit: false,
          isPopular: true,
        },
        {
          id: 2,
          title: "Midnight Sky",
          duration: "4:20",
          isExplicit: false,
          isPopular: false,
        },
        {
          id: 3,
          title: "Electric Soul",
          duration: "3:18",
          isExplicit: false,
          isPopular: true,
        },
        {
          id: 4,
          title: "Neon Dreams",
          duration: "5:12",
          isExplicit: false,
          isPopular: false,
        },
        {
          id: 5,
          title: "Heartbeat",
          duration: "3:55",
          isExplicit: false,
          isPopular: true,
        },
        {
          id: 6,
          title: "Summer Nights",
          duration: "4:32",
          isExplicit: false,
          isPopular: false,
        },
        {
          id: 7,
          title: "Ocean Waves",
          duration: "3:29",
          isExplicit: false,
          isPopular: true,
        },
        {
          id: 8,
          title: "Sunrise",
          duration: "6:15",
          isExplicit: false,
          isPopular: false,
        },
      ],
    },
    {
      id: 2,
      title: "Horizons",
      year: "2023",
      cover: "https://source.unsplash.com/random/800x800/?edm",
      type: "EP",
      tracks: [
        {
          id: 1,
          title: "New Horizons",
          duration: "4:15",
          isExplicit: false,
          isPopular: true,
        },
        {
          id: 2,
          title: "Skyfall",
          duration: "3:48",
          isExplicit: false,
          isPopular: false,
        },
        {
          id: 3,
          title: "Beyond the Stars",
          duration: "5:22",
          isExplicit: false,
          isPopular: true,
        },
        {
          id: 4,
          title: "Infinity",
          duration: "4:05",
          isExplicit: false,
          isPopular: false,
        },
      ],
    },
    {
      id: 3,
      title: "First Light",
      year: "2021",
      cover: "https://source.unsplash.com/random/800x800/?electronic",
      type: "Álbum Debut",
      tracks: [
        {
          id: 1,
          title: "Awakening",
          duration: "3:55",
          isExplicit: false,
          isPopular: true,
        },
        {
          id: 2,
          title: "First Light",
          duration: "4:30",
          isExplicit: false,
          isPopular: false,
        },
        {
          id: 3,
          title: "Dawn",
          duration: "3:28",
          isExplicit: false,
          isPopular: true,
        },
        {
          id: 4,
          title: "Daybreak",
          duration: "5:15",
          isExplicit: false,
          isPopular: false,
        },
        {
          id: 5,
          title: "Morning Haze",
          duration: "4:42",
          isExplicit: false,
          isPopular: true,
        },
        {
          id: 6,
          title: "Sunlight",
          duration: "3:37",
          isExplicit: false,
          isPopular: false,
        },
      ],
    },
  ];

  const togglePlay = (trackId = null) => {
    if (trackId !== null) {
      setCurrentTrack(trackId);
    }
    setIsPlaying(!isPlaying);
  };

  const selectedAlbum = discography[currentAlbum];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header con navegación - debe ser consistente con la página principal */}
      <header className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/next.svg"
              alt="Rodrigo"
              width={120}
              height={30}
              className="dark:invert"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/#music"
              className="hover:text-primary transition-colors"
            >
              MÚSICA
            </Link>
            <Link
              href="/#events"
              className="hover:text-primary transition-colors"
            >
              EVENTOS
            </Link>
            <Link
              href="/#about"
              className="hover:text-primary transition-colors"
            >
              SOBRE MÍ
            </Link>
            <Link
              href="/#merch"
              className="hover:text-primary transition-colors"
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

      {/* Contenido principal - con espacio para el header fijo */}
      <main className="flex-1 pt-24">
        {/* Breadcrumb y título */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span>Discografía</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Discografía</h1>
          </div>
        </div>

        {/* Selección de álbumes */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex overflow-x-auto pb-4 gap-4 md:flex-wrap md:justify-center">
            {discography.map((album, index) => (
              <button
                key={album.id}
                onClick={() => setCurrentAlbum(index)}
                className={cn(
                  "flex-shrink-0 text-center group transition-transform hover:scale-105",
                  currentAlbum === index
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-100"
                )}
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 mb-2 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={album.cover}
                    alt={album.title}
                    objectFit="cover"
                    width={128}
                    height={128}
                    className={cn(
                      "transition-transform duration-300 group-hover:scale-110",
                      currentAlbum === index ? "scale-105" : ""
                    )}
                  />
                  {currentAlbum === index && (
                    <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                      <div className="bg-white rounded-full p-1">
                        <ChevronLeft className="h-4 w-4 text-primary rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-sm font-medium truncate max-w-[120px] mx-auto">
                  {album.title}
                </h3>
                <p className="text-xs text-muted-foreground">{album.year}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Detalles del álbum seleccionado */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Portada y detalles del álbum */}
            <div className="md:w-1/3 xl:w-1/4 flex flex-col items-center md:items-start">
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={selectedAlbum.cover}
                  alt={selectedAlbum.title}
                  objectFit="cover"
                  width={400}
                  height={400}
                />
              </div>

              <h2 className="mt-6 text-2xl font-bold">{selectedAlbum.title}</h2>
              <p className="text-muted-foreground">
                {selectedAlbum.type} • {selectedAlbum.year}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  onClick={() => togglePlay()}
                  className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  <span>{isPlaying ? "PAUSAR" : "REPRODUCIR"}</span>
                </button>

                <button className="flex items-center space-x-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors">
                  <Heart size={18} />
                </button>

                <button className="flex items-center space-x-2 bg-secondary text-secondary-foreground px-4 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors">
                  <Share2 size={18} />
                </button>
              </div>

              <div className="w-full mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-3">
                <a
                  href="#"
                  className="flex items-center space-x-2 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/globe.svg"
                      alt="Spotify"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </div>
                  <span className="text-sm">Spotify</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-2 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/globe.svg"
                      alt="Apple Music"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </div>
                  <span className="text-sm">Apple Music</span>
                </a>

                <a
                  href="#"
                  className="flex items-center space-x-2 p-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Image
                      src="/globe.svg"
                      alt="YouTube"
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
                  </div>
                  <span className="text-sm">YouTube</span>
                </a>
              </div>
            </div>

            {/* Lista de canciones */}
            <div className="md:w-2/3 xl:w-3/4">
              <div className="bg-card rounded-xl p-6">
                <div className="border-b border-border pb-3 flex items-center text-sm text-muted-foreground">
                  <div className="w-10 text-center">#</div>
                  <div className="flex-1">TÍTULO</div>
                  <div className="w-16 flex justify-end">
                    <Clock size={16} />
                  </div>
                </div>

                <div className="divide-y divide-border/50">
                  {selectedAlbum.tracks.map((track, index) => (
                    <div
                      key={track.id}
                      className={cn(
                        "flex items-center py-3 hover:bg-muted/30 rounded-md group px-2",
                        currentTrack === track.id && isPlaying
                          ? "bg-muted/50"
                          : ""
                      )}
                    >
                      <div className="w-10 text-center relative">
                        <span className="group-hover:hidden">{index + 1}</span>
                        <button
                          onClick={() => togglePlay(track.id)}
                          className="hidden group-hover:flex absolute top-0 left-0 w-10 h-full items-center justify-center"
                        >
                          {currentTrack === track.id && isPlaying ? (
                            <Pause size={16} className="text-primary" />
                          ) : (
                            <Play size={16} className="text-primary" />
                          )}
                        </button>
                      </div>

                      <div className="flex-1 flex items-center">
                        <div>
                          <h4 className="font-medium">{track.title}</h4>
                          {track.isExplicit && (
                            <span className="text-xs bg-muted-foreground/20 text-muted-foreground px-1.5 py-0.5 rounded">
                              E
                            </span>
                          )}
                        </div>
                        {track.isPopular && (
                          <span className="ml-2 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                            Popular
                          </span>
                        )}
                      </div>

                      <div className="w-16 text-right text-muted-foreground text-sm">
                        {track.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Créditos y detalles adicionales */}
              <div className="mt-8 bg-card rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Créditos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      Producción
                    </h4>
                    <p>Rodrigo</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      Colaboradores
                    </h4>
                    <p>David Guitar (Guitarras en &quot;Electric Soul&quot;)</p>
                    <p>Maria Voice (Vocales en &quot;Heartbeat&quot;)</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      Sello
                    </h4>
                    <p>Independent</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">
                      Fecha de lanzamiento
                    </h4>
                    <p>15 de marzo, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - debe ser consistente con la página principal */}
      <footer className="bg-card text-card-foreground py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <Image
                src="/next.svg"
                alt="Rodrigo"
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
                      href="/#music"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Música
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#events"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Eventos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#about"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Sobre Mí
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#merch"
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
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Spotify
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rodrigo. Todos los derechos
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
    </div>
  );
}
