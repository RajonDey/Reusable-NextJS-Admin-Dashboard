'use client';

import { useEffect, useMemo, useState } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { debounce } from 'lodash';

const SearchField = ({ placeholder, onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedHandleSearch = useMemo(
    () =>
      debounce((query) => {
        onChange(query);
      }, 1000),
    []
  );

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    debouncedHandleSearch(event.target.value);
  };

  useEffect(() => {
    return () => {
      debouncedHandleSearch.cancel();
    };
  }, [debouncedHandleSearch]);

  return (
    <div className="flex items-center gap-2 p-3 bg-white border border-solid border-[#857371] rounded-full">
      <Icon path={mdiMagnify} size={1} />
      <input
        type="search"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
        className="flex-1 border-none outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchField;
