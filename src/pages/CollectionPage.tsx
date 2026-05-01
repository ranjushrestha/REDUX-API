import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector(
    (state: RootState) => state.collection.items
  );

  const dispatch = useDispatch()

  return (
    <div className="min-h-screen px-6 py-6">

      {/* Navbar */}
      <div className="flex gap-6 justify-between items-center mb-6">
        <Link to="/" className="font-medium">
          Search
        </Link>
        <Link to="/collection" className="font-medium">
          Collection
        </Link>
      </div>

      {/* Search */}
    
      <div>
        {collection.length > 0 && (
          <button
       onClick={() => dispatch(clearCollection())}
       
       className="bg-red-500 px-5 py-2 rounded">Clear Collection</button>
        )}
       
      </div>



      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {collection.map((item) => (
          <CollectionCard key={item.id} item={item} />
        ))}
      </div>

      {/* Empty state */}
      {collection.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No items saved
        </p>
      )}
    </div>
  );
};

export default CollectionPage;