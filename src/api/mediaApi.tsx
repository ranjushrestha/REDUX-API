import axios from "axios";
import type { UnsplashPhoto, PexelsVideo } from "../types/constants";

type UnsplashResponse = {
  results: UnsplashPhoto[]
}

type PexelsResponse = {
  videos: PexelsVideo[]
}


const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

export const fetchPhotos = async (
  query: string,
  page = 1,
  per_page = 20
) => {
  const res = await axios.get<UnsplashResponse>("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: {
      Authorization: `Client-ID ${UNSPLASH_KEY}`,
    },
  });

  return res.data;
};

export const fetchVideos = async (query: string, per_page = 15) => {
  const res = await axios.get<PexelsResponse>("https://api.pexels.com/v1/videos/search", {
    params: { query, per_page },
    headers: {
      Authorization: PEXELS_KEY,
    },
  });

  return res.data;
};