import { VideoItem } from "./videos"

export const stories: VideoItem[] = [
  {
    id: "story-01",
    type: "video",
    src: "/videos/video-01.mp4",
    companyTarget: "italy",
    link: "https://www.instagram.com/hchepli/",
  },
  {
    id: "story-02",
    type: "video",
    src: "/videos/video-01.mp4",
    poster: "/stories/story-02.jpg",
    companyTarget: "italy",
  },
]

export function getFeaturedStories(): VideoItem[] {
  return stories
}