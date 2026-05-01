import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import type { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import type { MediaItem } from "../types/constants";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store: RootState) => store.search,
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!query.trim()) return;

    const getData = async () => {
      try {
        dispatch(setLoading());

        let data: MediaItem[] = [];

        if (activeTab === "photos") {
          let res = await fetchPhotos(query);
          data = res.results.map((photo) => ({
            id: photo.id,
            type: "photo",
            title: photo.alt_description,
            thumbnail: photo.urls.small,
            src: photo.urls.full,
            url: photo.links.html
          }));
        }
        if (activeTab === "videos") {
          let res = await fetchVideos(query);
          data = res.videos.map((video) => ({
            id: video.id,
            type: "video",
            title: video.user.name,
            thumbnail: video.image,
            src: video.video_files[0].link,
            url: video.url
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError("failed to fetch"));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div
     className="flex flex-wrap gap-6 overflow-auto">
      {results.map((result) => (
        <div key={result.id}>
            <ResultCard result={result}/>
        </div>
      ))}
    </div>
  );
};

export default ResultGrid;
