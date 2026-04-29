import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
   <div className="min-h-screen text-white w-full bg-gray-950 flex flex-col items-center">
  <div className="w-full max-w-4xl flex flex-col gap-6 ">
    <SearchBar />
    <Tabs />
    <ResultGrid/>
  </div>
</div>
  );
};

export default App;