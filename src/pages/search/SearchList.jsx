import React from 'react';
import SearchListItem from './SearchListItem';



const SearchList = ({list}) => {
console.log(list);
  
  return (
    <section className="col-span-3">
      {list?.map((item, index) => (
        <SearchListItem
          key={index}
          item={item}
        />
      ))}
    </section>
  );
};

export default SearchList;
