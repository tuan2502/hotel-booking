import { useState } from "react";
import SearchList from "./SearchList";
import SearchPopup from "./SearchPopup";
import search from '@data/search';


const Search = () => {
  const [filteredList, setFilteredList] = useState(search)


  // Hàm tìm kiếm Hotel theo description, minPrice, maxPrice
  const handleSearch = (form, e) => {
    e.preventDefault();
    setFilteredList(
      search?.filter((item) => {
        const descriptionFilter =
          !item.description ||
          item.description
            .toLowerCase()
            .includes(form.description.toLowerCase());
        const minPriceFilter =
          form.minPrice === 0 || item.price >= form.minPrice;
        const maxPriceFilter =
          form.maxPrice === 0 || item.price <= form.maxPrice;
        return descriptionFilter && minPriceFilter && maxPriceFilter;
      })
    );
  };

  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-4 gap-5">
        {/* Search popup */}
        <SearchPopup onSearch = {handleSearch}/>
        {/* Search list */}
        <SearchList list={filteredList}/>
      </div>
    </div>
  );
};

export default Search;
