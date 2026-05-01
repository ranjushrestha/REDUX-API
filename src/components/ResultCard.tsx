import { useDispatch } from "react-redux";
import type { MediaItem } from "../types/constants";
import {addCollection} from '../redux/features/collectionSlice'
import type { AppDispatch } from "../redux/store";

type Prop = {
  result: MediaItem;
};
const ResultCard = ({ result }: Prop) => {
    const dispatch = useDispatch<AppDispatch>()

    const addToCollection = (result: MediaItem) => {
   
     dispatch(addCollection(result))
    }

  return (
    <div className="w-60 h-60 relative bg-white overflow-hidden">
      <div className="h-full w-full">
        <a target="_blank" href={result.url}>
          {result.type === "photo" && (
            <img
              className="h-full w-full object-cover"
              src={result.src}
              alt={result.title ?? "media preview"}
            />
          )}

          {result.type === "video" && (
            <video
              className="h-full w-full object-cover"
              src={result.src}
              autoPlay
              loop
              muted
              playsInline
            />
          )}
        </a>
      </div>
      {/* overlay */}
      <div className="z-10 flex gap-4 justify-between items-center absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2">
        <p className="text-white text-sm truncate">
          {result.title ?? "Untitled"}
        </p>
        <button
        onClick={() => addToCollection(result)}
         className=" border rounded px-4 border-gray-500 text-white text-sm">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
