/** @format */

import React, { useState } from 'react';
import { Button } from './Button';
import { Filter } from './Filter';

const Search = (props) => {
  const { handleChangeSearch } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      handleChangeSearch(search, type);
    }
  };

  const handleChangeFilter = (event) => {
    setType(event.target.dataset.type);
    handleChangeSearch(search, event.target.dataset.type);
  };

  return (
    <>
      <div className="input-field col s12">
        <input
          placeholder="search movies"
          id="search"
          type="search"
          className="validate"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        {/* <button className='btn search-btn' onClick={() => this.props.handleChangeSearch(this.state.search)}>Search</button> */}
        <Button
          handleChangeSearch={handleChangeSearch}
          paramSearch={search}
          paramType={type}
        />
        <Filter
          paramSearch={search}
          paramType={type}
          handleChangeFilter={handleChangeFilter}
          handleChangeSearch={handleChangeSearch}
        />
      </div>
    </>
  );
};

export { Search };
