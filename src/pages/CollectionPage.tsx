import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const collection = useSelector(
    (state: RootState) => state.collection.items
  );

  return (
    <div className="min-h-screen px-6 py-6">

      {/* Navbar */}
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="font-medium">
          Search
        </Link>
        <Link to="/collection" className="font-medium">
          Collection
        </Link>
      </div>

      {/* Search */}
      <div className="mb-6">
        <SearchBar />
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