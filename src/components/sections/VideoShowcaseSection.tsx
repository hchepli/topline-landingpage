import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  Volume2,
  VolumeX,
  X,
} from "lucide-react"

import { SectionTitle } from "../ui/layout/SectionTitle"
import { VideoItem } from "../../data/videos"

const SLIDE_DURATION = 6000

interface VideoShowcaseSectionProps {
  videos: VideoItem[]
  title?: string
  description?: string
  sectionId?: string
}

interface MediaElementProps {
  item: VideoItem
  className?: string
  refCallback?: (element: HTMLVideoElement | null) => void
  muted?: boolean
  preload?: "auto" | "metadata"
  controls?: boolean
  autoPlay?: boolean
}

/*
 * Renderiza <video> ou <img> conforme o tipo do item.
 * Para imagens, o ref do vídeo fica sempre null.
 */
function MediaElement({
  item,
  className,
  refCallback,
  muted,
  preload,
  controls,
  autoPlay,
}: MediaElementProps) {
  if (item.type === "image") {
    return (
      <img
        ref={() => refCallback?.(null)}
        src={item.src}
        alt=""
        draggable={false}
        className={className}
      />
    )
  }

  return (
    <video
      ref={refCallback}
      src={item.src}
      poster={item.poster}
      muted={muted}
      playsInline
      preload={preload}
      controls={controls}
      autoPlay={autoPlay}
      className={className}
    />
  )
}

export function VideoShowcaseSection({
  videos,
  title = "Conheça a CHP Smart em Vídeos",
  description = "Confira alguns vídeos que mostram de perto nosso trabalho e nossa essência.",
  sectionId = "videos",
}: VideoShowcaseSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const fullscreenVideoRef = useRef<HTMLVideoElement | null>(null)

  /*
   * Guarda o ponto onde o vídeo do modal parou, porque quando o
   * modal fecha o elemento já foi removido do DOM.
   */
  const lastFullscreenTimeRef = useRef(0)

  const activeItem = videos[activeIndex]
  const isActiveVideo = activeItem?.type !== "image"

  /*
   * Necessário para o createPortal funcionar corretamente
   * apenas depois que o componente estiver montado no navegador.
   */
  useEffect(() => {
    setIsMounted(true)
  }, [])

  /*
   * Navegação.
   */
  const goTo = (index: number) => {
    setActiveIndex((index + videos.length) % videos.length)
  }

  const next = () => {
    goTo(activeIndex + 1)
  }

  const previous = () => {
    goTo(activeIndex - 1)
  }

  /*
   * Carrossel automático.
   *
   * Quando o item está em foco (modal), o timer fica parado.
   */
  useEffect(() => {
    if (isFullscreen || videos.length <= 1) {
      return
    }

    const timer = window.setTimeout(() => {
      next()
    }, SLIDE_DURATION)

    return () => {
      window.clearTimeout(timer)
    }
  }, [activeIndex, isFullscreen])

  /*
   * Controle dos vídeos do carrossel.
   *
   * Somente o vídeo ativo toca. Imagens não possuem ref de vídeo,
   * então o "if (!video) return" ignora elas.
   */
  useEffect(() => {
    if (isFullscreen) {
      return
    }

    videoRefs.current.forEach((video, index) => {
      if (!video) return

      if (index === activeIndex) {
        video.muted = isMuted

        const playPromise = video.play()

        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay pode ser bloqueado pelo navegador.
          })
        }
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [activeIndex, isMuted, isFullscreen])

  /*
   * Abre o item em foco.
   */
  const openFullscreen = () => {
    const currentVideo = videoRefs.current[activeIndex]

    if (currentVideo) {
      currentVideo.pause()
    }

    setIsFullscreen(true)
  }

  /*
   * Fecha o foco e retorna para o carrossel.
   * Guarda o tempo atual antes de o modal ser desmontado.
   */
  const closeFullscreen = () => {
    const fullscreenVideo = fullscreenVideoRef.current

    if (fullscreenVideo) {
      lastFullscreenTimeRef.current = fullscreenVideo.currentTime
      fullscreenVideo.pause()
    }

    setIsFullscreen(false)
  }

  /*
   * Quando o modal abre, sincroniza o vídeo do modal
   * com o ponto em que o vídeo do carrossel estava.
   */
  useEffect(() => {
    if (!isFullscreen) {
      return
    }

    const currentVideo = videoRefs.current[activeIndex]
    const fullscreenVideo = fullscreenVideoRef.current

    if (!currentVideo || !fullscreenVideo) {
      return
    }

    fullscreenVideo.currentTime = currentVideo.currentTime
    fullscreenVideo.muted = isMuted

    const playPromise = fullscreenVideo.play()

    if (playPromise !== undefined) {
      playPromise.catch(() => {})
    }
  }, [isFullscreen, activeIndex])

  /*
   * Quando o modal fecha, devolve ao vídeo do carrossel
   * a posição em que o modal parou.
   */
  useEffect(() => {
    if (isFullscreen) {
      return
    }

    const carouselVideo = videoRefs.current[activeIndex]

    if (!carouselVideo || lastFullscreenTimeRef.current <= 0) {
      return
    }

    carouselVideo.currentTime = lastFullscreenTimeRef.current
    carouselVideo.muted = isMuted
    lastFullscreenTimeRef.current = 0

    const playPromise = carouselVideo.play()

    if (playPromise !== undefined) {
      playPromise.catch(() => {})
    }
  }, [isFullscreen])

  /*
   * Áudio.
   */
  const toggleAudio = () => {
    setIsMuted((current) => !current)

    const carouselVideo = videoRefs.current[activeIndex]

    if (carouselVideo) {
      carouselVideo.muted = !isMuted
    }

    const fullscreenVideo = fullscreenVideoRef.current

    if (fullscreenVideo) {
      fullscreenVideo.muted = !isMuted
    }
  }

  /*
   * Teclado.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFullscreen) {
        closeFullscreen()
        return
      }

      if (isFullscreen) {
        return
      }

      if (event.key === "ArrowRight") {
        next()
      }

      if (event.key === "ArrowLeft") {
        previous()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isFullscreen, activeIndex])

  /*
   * Bloqueia o scroll da página enquanto o item estiver em foco.
   */
  useEffect(() => {
    if (!isFullscreen) {
      document.body.style.overflow = ""
      return
    }

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [isFullscreen])

  /*
   * Se não houver itens para essa seção, não renderiza nada.
   */
  if (videos.length === 0) {
    return null
  }

  /*
   * Modal.
   *
   * createPortal coloca o modal diretamente no body,
   * evitando problemas de z-index, transform e posicionamento
   * causados pelos elementos pais da seção.
   */
  const fullscreenModal =
    isMounted && isFullscreen
      ? createPortal(
          <div
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              bg-black/90
              p-4
              backdrop-blur-sm
            "
            onClick={closeFullscreen}
          >
            <div
              className="
                relative
                flex
                h-[90dvh]
                max-h-[900px]
                w-auto
                max-w-[92vw]
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                bg-black
                shadow-2xl
              "
              onClick={(event) => {
                event.stopPropagation()
              }}
            >
              <MediaElement
                item={activeItem}
                refCallback={(element) => {
                  fullscreenVideoRef.current = element
                }}
                muted={isMuted}
                autoPlay
                controls
                className="
                  h-full
                  w-auto
                  max-w-[92vw]
                  object-contain
                "
              />

              {/* Fechar */}
              <button
                type="button"
                onClick={closeFullscreen}
                aria-label="Fechar"
                className="
                  absolute right-4 top-4
                  z-20
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-black/60
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:scale-105
                  hover:bg-black/80
                "
              >
                <X size={20} />
              </button>

              {/* Áudio (somente vídeo) */}
              {isActiveVideo && (
                <button
                  type="button"
                  onClick={toggleAudio}
                  aria-label={
                    isMuted ? "Ativar áudio" : "Silenciar áudio"
                  }
                  className="
                    absolute bottom-5 left-5
                    z-20
                    flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    bg-black/60
                    text-white
                    backdrop-blur-md
                    transition-all
                    hover:scale-105
                    hover:bg-black/80
                  "
                >
                  {isMuted ? (
                    <VolumeX size={20} />
                  ) : (
                    <Volume2 size={20} />
                  )}
                </button>
              )}

              {/* Link para o Instagram */}
              {activeItem.link && (
                <a
                  href={activeItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    absolute left-4 top-4
                    z-20
                    flex items-center gap-2
                    rounded-full
                    bg-black/60
                    px-4 py-2
                    text-sm font-medium text-white
                    backdrop-blur-md
                    transition-all
                    hover:scale-105
                    hover:bg-black/80
                  "
                >
                  Ver no Instagram
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <section
        id={sectionId}
        aria-labelledby={`${sectionId}-title`}
        className="
          flex min-h-[90vh] w-full
          items-center justify-center
          py-16 md:py-20
        "
      >
        <div
          className="
            flex w-full max-w-6xl
            flex-col items-center
            gap-6 text-center
            md:gap-8
          "
        >
          {/* Título */}
          <SectionTitle
            id={`${sectionId}-title`}
            title={title}
            description={description}
          />

          {/* Carrossel */}
          <div className="relative w-full">
            <div
              className="
                flex items-center justify-center
                gap-4 overflow-hidden
                py-6 sm:gap-8
              "
            >
              {videos.map((video, index) => {
                const isActive = index === activeIndex

                const isPrevious =
                  index ===
                  (activeIndex - 1 + videos.length) %
                    videos.length

                const isNext =
                  index === (activeIndex + 1) % videos.length

                const shouldShow =
                  isActive || isPrevious || isNext

                if (!shouldShow) {
                  return null
                }

                const isVideo = video.type !== "image"

                return (
                  <article
                    key={video.id}
                    onClick={
                      isActive
                        ? openFullscreen
                        : () => goTo(index)
                    }
                    className={`
                      group relative shrink-0
                      overflow-hidden rounded-2xl
                      bg-black shadow-xl
                      transition-all duration-500
                      ease-out

                      ${
                        isActive
                          ? `
                            z-20
                            w-[min(68vw,360px)]
                            cursor-pointer
                            scale-100
                            opacity-100
                          `
                          : `
                            z-10
                            hidden
                            w-[min(42vw,240px)]
                            cursor-pointer
                            scale-[0.88]
                            opacity-35
                            sm:block
                          `
                      }
                    `}
                  >
                    <div className="relative aspect-[9/16]">
                      <MediaElement
                        item={video}
                        refCallback={(element) => {
                          videoRefs.current[index] = element
                        }}
                        muted={isMuted}
                        preload={isActive ? "auto" : "metadata"}
                        className="
                          h-full w-full
                          object-cover
                        "
                      />

                      {/* Overlay */}
                      <div
                        className="
                          pointer-events-none
                          absolute inset-0
                          bg-gradient-to-t
                          from-black/40
                          via-transparent
                          to-black/10
                          transition-all duration-300
                          group-hover:from-black/50
                        "
                      />

                      {isActive && (
                        <>
                          {/* Ícone de foco */}
                          <div
                            className="
                              pointer-events-none
                              absolute right-3 top-3
                              flex h-9 w-9
                              items-center justify-center
                              rounded-full
                              bg-black/30
                              text-white
                              backdrop-blur-md
                              transition-transform
                              duration-300
                              group-hover:scale-110
                            "
                          >
                            <Maximize2 size={17} />
                          </div>

                          {/* Áudio (somente vídeo) */}
                          {isVideo && (
                            <button
                              type="button"
                              onClick={(event) => {
                                event.stopPropagation()
                                toggleAudio()
                              }}
                              aria-label={
                                isMuted
                                  ? "Ativar áudio"
                                  : "Silenciar áudio"
                              }
                              className="
                                absolute left-1/2 top-1/2
                                flex h-14 w-14
                                -translate-x-1/2
                                -translate-y-1/2
                                items-center justify-center
                                rounded-full
                                border border-white/30
                                bg-black/25
                                text-white
                                backdrop-blur-md
                                transition-all duration-300
                                hover:scale-110
                                hover:bg-black/40
                              "
                            >
                              {isMuted ? (
                                <VolumeX size={24} />
                              ) : (
                                <Volume2 size={24} />
                              )}
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Anterior */}
            {!isFullscreen && videos.length > 1 && (
              <button
                type="button"
                onClick={previous}
                aria-label="Anterior"
                className="
                  absolute left-2 top-1/2 z-30
                  flex h-10 w-10
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-black/10
                  bg-white
                  shadow-lg
                  transition-all
                  hover:scale-105
                  hover:bg-gray-50
                  sm:left-4
                  md:left-8
                "
              >
                <ChevronLeft size={21} />
              </button>
            )}

            {/* Próximo */}
            {!isFullscreen && videos.length > 1 && (
              <button
                type="button"
                onClick={next}
                aria-label="Próximo"
                className="
                  absolute right-2 top-1/2 z-30
                  flex h-10 w-10
                  -translate-y-1/2
                  items-center justify-center
                  rounded-full
                  border border-black/10
                  bg-white
                  shadow-lg
                  transition-all
                  hover:scale-105
                  hover:bg-gray-50
                  sm:right-4
                  md:right-8
                "
              >
                <ChevronRight size={21} />
              </button>
            )}
          </div>

          {/* Indicadores */}
          {!isFullscreen && videos.length > 1 && (
            <div className="flex items-center justify-center gap-2">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Ir para o item ${index + 1}`}
                  className={`
                    h-2 rounded-full
                    transition-all duration-300
                    ${
                      index === activeIndex
                        ? "w-8 bg-[rgb(var(--brand-secondary))]"
                        : "w-2 bg-black/15 hover:bg-black/30"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {fullscreenModal}
    </>
  )
}