import { useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import type { MediaItem } from "../types/constants";
import { data } from "react-router-dom";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store: RootState) => store.search,
  );

  useEffect(() => {
    if (!query.trim()) return;
    const getData = async () => {
      let data: MediaItem[] = [];

      if (activeTab == "photos") {
        let res = await fetchPhotos(query);
        data = res.results.map((photo) => ({
          id: photo.id,
          type: "photo",
          title: photo.alt_description,
          thumbnail: photo.urls.small,
          src: photo.urls.full,
        }));
      }
      if (activeTab == "videos") {
        let res = await fetchVideos(query);
        data = res.videos.map((video) => ({
          id: video.id,
          type: "video",
          title: video.user.name,
          thumbnail: video.image,
          src: video.video_files[0].link,
        }));
      }
      console.log(data)
    };
    
    getData();
  }, [query, activeTab]);

  return <div>result grid</div>;
};

export default ResultGrid;
