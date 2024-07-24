import SearchList from "./SearchList";
import SearchPopup from "./SearchPopup";

const Search = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-4 gap-5">
        {/* Search popup */}
        <SearchPopup/>
        {/* Search list */}
        <SearchList/>
      </div>
    </div>
  );
};

export default Search;
