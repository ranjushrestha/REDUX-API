
import { useDispatch } from "react-redux"
import {removeCollection, type CollectionItem } from "../redux/features/collectionSlice"

type Props = {
  item: CollectionItem
}

const CollectionCard = ({item}:Props) => {
const dispatch = useDispatch()

  return (
    <div className="w-60 h-60 relative bg-white overflow-hidden">
      <div className="h-full w-full">
        <a target="_blank" href={item.url}>
          {item.type === "photo" && (
            <img
              className="h-full w-full object-cover"
              src={item.src}
              alt={item.title ?? "media preview"}
            />
          )}

          {item.type === "video" && (
            <video
              className="h-full w-full object-cover"
              src={item.src}
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
          {item.title ?? "Untitled"}
        </p>
        <button
        onClick={() => dispatch(removeCollection(item.id))}
         className=" border rounded px-4 border-gray-500 text-white text-sm">
          Remove
        </button>
      </div>
    </div>
  )
}

export default CollectionCard
