export interface VideoItem {
  id: string
  src: string
  poster?: string
  companyTarget: string
  /** Aparece na seleção geral da Home. */
  featured?: boolean
  /** Padrão: "video". Use "image" para stories em foto. */
  type?: "video" | "image"
  /** Opcional: link do post/perfil no Instagram (aparece no modal). */
  link?: string
}

export const videos: VideoItem[] = [
  {
    id: "video-01",
    src: "/videos/video-01.mp4",
    companyTarget: "italy",
    featured: true,
  },
  {
    id: "video-02",
    src: "/videos/video-02.mp4",
    companyTarget: "italy",
    featured: true,
  },
  {
    id: "video-03",
    src: "/videos/video-03.mp4",
    companyTarget: "italy",
  },
  {
    id: "video-04",
    src: "/videos/video-04.mp4",
    companyTarget: "italy",
    featured: true,
  },
  {
    id: "video-05",
    src: "/videos/video-05.mp4",
    companyTarget: "italy",
  },
  {
    id: "video-06",
    src: "/videos/video-06.mp4",
    companyTarget: "italy",
  },
  {
    id: "video-07",
    src: "/videos/video-07.mp4",
    companyTarget: "italy",
  },
  {
    id: "video-08",
    src: "/videos/video-08.mp4",
    companyTarget: "italy",
  },
  {
    id: "video-09",
    src: "/videos/video-09.mp4",
    companyTarget: "forthy",
    featured: true,
  },
  {
    id: "video-16",
    src: "/videos/video-16.mp4",
    companyTarget: "italy",
    featured: true,
  },
  {
    id: "image-bermad-1",
    src: "/videos/bermad-1.mp4",
    companyTarget: "bermad",
  },
  {
    id: "bermad-2",
    src: "/videos/bermad-2.mp4",
    companyTarget: "bermad",
  },
  {
    id: "forthy-1",
    src: "/videos/forthy-1.mp4",
    companyTarget: "forthy",
  },
  {
    id: "ivm-1",
    src: "/videos/ivm-1.mp4",
    companyTarget: "italy",
  },
  {
    id: "ivm-2",
    src: "/videos/ivm-2.mp4",
    companyTarget: "italy",
  },

  // Imagens: aparecem apenas nas páginas das empresas
  {
    id: "bermad-1",
    src: "/imagens/bermad-1.webp",
    companyTarget: "bermad",
    type: "image",
  },
  {
    id: "image-bermad-10",
    src: "/imagens/bermad-10.webp",
    companyTarget: "bermad",
    type: "image",
  },
  {
    id: "image-bermad-2",
    src: "/imagens/bermad-2.webp",
    companyTarget: "bermad",
    type: "image",
  },
  {
    id: "image-bermad-3",
    src: "/imagens/bermad-3.webp",
    companyTarget: "bermad",
    type: "image",
  },
  {
    id: "image-bermad-4",
    src: "/imagens/bermad-4.webp",
    companyTarget: "bermad",
    type: "image",
  },
  {
    id: "image-bermad-5",
    src: "/imagens/bermad-5.webp",
    companyTarget: "bermad",
    type: "image",
  },
  {
    id: "image-bermad-7",
    src: "/imagens/bermad-7.webp",
    companyTarget: "bermad",
    type: "image",
  },
  {
    id: "image-bermad-8",
    src: "/imagens/bermad-8.webp",
    companyTarget: "bermad",
    type: "image",
  },
  {
    id: "image-bermad-9",
    src: "/imagens/bermad-9.webp",
    companyTarget: "bermad",
    type: "image",
  },
  {
    id: "image-bermad06",
    src: "/imagens/bermad06.webp",
    companyTarget: "bermad",
    type: "image",
  },
  {
    id: "image-forthy-1",
    src: "/imagens/forthy-1.webp",
    companyTarget: "forthy",
    type: "image",
  },
  {
    id: "image-forthy-2",
    src: "/imagens/forthy-2.webp",
    companyTarget: "forthy",
    type: "image",
  },
  {
    id: "image-forthy-3",
    src: "/imagens/forthy-3.webp",
    companyTarget: "forthy",
    type: "image",
  },
  {
    id: "image-forthy-4",
    src: "/imagens/forthy-4.webp",
    companyTarget: "forthy",
    type: "image",
  },
  {
    id: "image-forthy-5",
    src: "/imagens/forthy-5.webp",
    companyTarget: "forthy",
    type: "image",
  },
  {
    id: "image-forthy-6",
    src: "/imagens/forthy-6.webp",
    companyTarget: "forthy",
    type: "image",
  },
  {
    id: "image-forthy-7",
    src: "/imagens/forthy-7.webp",
    companyTarget: "forthy",
    type: "image",
  },
  {
    id: "image-forthy-8",
    src: "/imagens/forthy-8.webp",
    companyTarget: "forthy",
    type: "image",
  },
  {
    id: "image-forthy-9",
    src: "/imagens/forthy-9.webp",
    companyTarget: "forthy",
    type: "image",
  },
  {
    id: "image-imv-1",
    src: "/imagens/imv-1.webp",
    companyTarget: "italy",
    type: "image",
  },
  {
    id: "image-ivm-2",
    src: "/imagens/ivm-2.webp",
    companyTarget: "italy",
    type: "image",
  },
  {
    id: "image-ivm-5",
    src: "/imagens/ivm-5.webp",
    companyTarget: "italy",
    type: "image",
  },
  {
    id: "image-ivm3",
    src: "/imagens/ivm3.webp",
    companyTarget: "italy",
    type: "image",
  },
  {
    id: "image-ivm4",
    src: "/imagens/ivm4.webp",
    companyTarget: "italy",
    type: "image",
  },
  {
    id: "image-ivm5",
    src: "/imagens/ivm5.webp",
    companyTarget: "italy",
    type: "image",
  },
]

/** Página da empresa: vídeos + imagens. */
export function getVideosByCompany(companyTarget: string): VideoItem[] {
  return videos.filter((video) => video.companyTarget === companyTarget)
}

/** Home: somente vídeos, nunca imagens. */
export function getFeaturedVideos(): VideoItem[] {
  const onlyVideos = videos.filter((video) => video.type !== "image")
  const featured = onlyVideos.filter((video) => video.featured)
  return featured.length > 0 ? featured : onlyVideos.slice(0, 4)
}