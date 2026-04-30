import type { MediaItem } from "../types/constants";

type Prop = {
  result: MediaItem;
};
const ResultCard = ({ result }: Prop) => {
  return (
    <div className="w-60 h-60 relative bg-white overflow-hidden">
      <div className="h-full w-full">
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
      </div>
      {/* overlay */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2">
        <p className="text-white text-sm truncate">
          {result.title ?? "Untitled"}
        </p>    
      </div>
    </div>
  );
};

export default ResultCard;
