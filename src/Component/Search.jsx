/** @format */

import React, { Component } from 'react';
import { Button } from './Button';
import { Filter } from './Filter';

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.handleChangeSearch(this.state.search, this.state.type);
    }
  };

  handleChangeFilter = (event) => {
    this.setState(
      () => ({type: event.target.dataset.type}),
      () => {
        this.props.handleChangeSearch(this.state.search, this.state.type)
      }
      );
  };

  render() {
    return (
      <>
        <div className="input-field col s12">
          <input
            placeholder="search movies"
            id="search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          {/* <button className='btn search-btn' onClick={() => this.props.handleChangeSearch(this.state.search)}>Search</button> */}
          <Button
            handleChangeSearch={this.props.handleChangeSearch}
            state={this.state}
          />
          <Filter
            state={this.state}
            handleChangeFilter={this.handleChangeFilter}
            handleChangeSearch={this.props.handleChangeSearch}
          />
        </div>
      </>
    );
  }
}

export { Search };
