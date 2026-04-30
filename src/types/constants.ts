export type UnsplashPhoto = {
    id: string,
    alt_description: string | null,
    urls:{
        small: string,
        full: string
    },
    links: {
      html: string
    }
}

export type PexelsVideo = {
  id: number;
  user: {
    name: string;
  };
  video_files: {
    link: string;
  }[];
  image: string;
  url: string
};

// Unified UI type
export type MediaItem = {
  id: string | number;
  type: "photo" | "video";
  title: string | null;
  thumbnail: string;
  src: string;
  url?: string;
};