import { VideoItem } from "./videos"

export const stories: VideoItem[] = [
  {
    id: "story-03",
    type: "video",
    src: "/stories/stories-1.mp4",
    companyTarget: "italy",
  },
  {
    id: "story-04",
    type: "video",
    src: "/stories/stories-2.mp4",
    companyTarget: "italy",
  },
  {
    id: "story-05",
    type: "video",
    src: "/stories/stories-3.mp4",
    companyTarget: "italy",
  },
]

export function getFeaturedStories(): VideoItem[] {
  return stories
}