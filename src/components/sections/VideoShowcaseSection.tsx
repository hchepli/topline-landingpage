import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Volume2,
  VolumeX,
  X,
} from "lucide-react"

import { SectionTitle } from "../ui/layout/SectionTitle"
import { videos } from "../../data/videos"

const VIDEO_DURATION = 6000

export function VideoShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const fullscreenVideoRef = useRef<HTMLVideoElement | null>(null)

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
   * Quando o vídeo está em foco, o timer fica parado.
   */
  useEffect(() => {
    if (isFullscreen || videos.length <= 1) {
      return
    }

    const timer = window.setTimeout(() => {
      next()
    }, VIDEO_DURATION)

    return () => {
      window.clearTimeout(timer)
    }
  }, [activeIndex, isFullscreen])

  /*
   * Controle dos vídeos do carrossel.
   *
   * Somente o vídeo ativo toca.
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
   * Abre o vídeo em foco.
   *
   * Primeiro pausamos o vídeo do carrossel.
   * Depois abrimos o vídeo do modal exatamente
   * no mesmo ponto em que o usuário estava.
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
   */
  const closeFullscreen = () => {
    const fullscreenVideo = fullscreenVideoRef.current

    if (fullscreenVideo) {
      fullscreenVideo.pause()
    }

    setIsFullscreen(false)
  }

  /*
   * Quando o modal abriu, sincronizamos o vídeo
   * do modal com o vídeo que estava no carrossel.
   */
  useEffect(() => {
    if (!isFullscreen) {
      return
    }

    const currentVideo = videoRefs.current[activeIndex]

    if (!currentVideo) {
      return
    }

    const startTime = currentVideo.currentTime

    const fullscreenVideo = fullscreenVideoRef.current

    if (!fullscreenVideo) {
      return
    }

    fullscreenVideo.currentTime = startTime
    fullscreenVideo.muted = isMuted

    const playPromise = fullscreenVideo.play()

    if (playPromise !== undefined) {
      playPromise.catch(() => {})
    }
  }, [isFullscreen, activeIndex])

  /*
   * Quando fechar o foco, sincronizamos novamente
   * o vídeo original com a posição em que o modal parou.
   */
  useEffect(() => {
    if (isFullscreen) {
      return
    }

    const fullscreenVideo = fullscreenVideoRef.current
    const carouselVideo = videoRefs.current[activeIndex]

    if (!fullscreenVideo || !carouselVideo) {
      return
    }

    /*
     * Só sincroniza se o vídeo do modal tiver sido utilizado.
     */
    if (fullscreenVideo.currentTime > 0) {
      carouselVideo.currentTime =
        fullscreenVideo.currentTime

      carouselVideo.muted = isMuted

      const playPromise = carouselVideo.play()

      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
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
   * Bloqueia o scroll da página enquanto o vídeo
   * estiver em foco.
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
              <video
                ref={fullscreenVideoRef}
                src={videos[activeIndex].src}
                poster={videos[activeIndex].poster}
                muted={isMuted}
                playsInline
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
                aria-label="Fechar vídeo"
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

              {/* Áudio */}
              <button
                type="button"
                onClick={toggleAudio}
                aria-label={
                  isMuted
                    ? "Ativar áudio"
                    : "Silenciar áudio"
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
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <section
        id="videos"
        aria-labelledby="videos-title"
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
            id="videos-title"
            title="Conheça o Grupo IVM em Vídeos"
            description="Confira alguns vídeos que mostram de perto o trabalho e a essência do Grupo IVM."
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
                  index ===
                  (activeIndex + 1) % videos.length

                const shouldShow =
                  isActive || isPrevious || isNext

                if (!shouldShow) {
                  return null
                }

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
                      <video
                        ref={(element) => {
                          videoRefs.current[index] =
                            element
                        }}
                        src={video.src}
                        poster={video.poster}
                        muted={isMuted}
                        playsInline
                        preload={
                          isActive
                            ? "auto"
                            : "metadata"
                        }
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

                          {/* Áudio */}
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
                        </>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Anterior */}
            {!isFullscreen && (
              <button
                type="button"
                onClick={previous}
                aria-label="Vídeo anterior"
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
            {!isFullscreen && (
              <button
                type="button"
                onClick={next}
                aria-label="Próximo vídeo"
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
          {!isFullscreen && (
            <div className="flex items-center justify-center gap-2">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Ir para o vídeo ${
                    index + 1
                  }`}
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