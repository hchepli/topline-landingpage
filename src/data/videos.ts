export interface VideoItem {
  id: string
  src: string
  poster?: string
  companyTarget: string
  /** Aparece na seleção geral da Home. */
  featured?: boolean
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
]

export function getVideosByCompany(companyTarget: string): VideoItem[] {
  return videos.filter((video) => video.companyTarget === companyTarget)
}

export function getFeaturedVideos(): VideoItem[] {
  const featured = videos.filter((video) => video.featured)
  return featured.length > 0 ? featured : videos.slice(0, 4)
}