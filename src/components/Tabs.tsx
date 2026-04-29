import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";
import type { RootState } from "../redux/store";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.search.activeTab)

  return (
    <div className="flex gap-4 mt-4">
      {tabs.map((tab, idx) => (
        <button
          onClick={() => {
            dispatch(setActiveTabs(tab));
          }}
          key={idx}
          className={`${(activeTab == tab ? "bg-blue-700" : "bg-gray-600")} px-4 py-2 cursor-pointer rounded-full transition capitalize`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
