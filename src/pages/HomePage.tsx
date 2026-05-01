import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { query } = useSelector((store: RootState) => store.search);

  return (
    <div className="min-h-screen px-6 py-6">
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="font-medium">
          Search
        </Link>

        <Link to="/collection" className="font-medium">
          Collection
        </Link>
      </div>

      <div className="mb-6">
        <SearchBar />
      </div>

      {query.trim() !== "" && (
        <>
          <Tabs />
          <div className="mt-6">
            <ResultGrid />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;