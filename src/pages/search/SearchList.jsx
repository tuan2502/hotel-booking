import React from 'react';
import SearchListItem from './SearchListItem';

import search from '@data/search';
import { useLocation } from 'react-router-dom';

const SearchList = () => {
  let { state } = useLocation();
  
  // filterList khi ấn search button
  let filterList = [...search]

  filterList = search?.filter((item) => {
    const descriptionFilter = item.description
      .toLowerCase()
      .includes(state.form.description.toLowerCase());
    const minPriceFilter =
      state.form.minPrice === 0 || item.price >= state.form.minPrice;
    const maxPriceFilter =
      state.form.maxPrice === 0 || item.price <= state.form.maxPrice;
    return descriptionFilter && minPriceFilter && maxPriceFilter;
  });

  return (
    <section className="col-span-3">
      {filterList?.map((item, index) => (
        <SearchListItem
          key={index}
          item={item}
        />
      ))}
    </section>
  );
};

export default SearchList;
