import React, { Component } from 'react'
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    return (
      <input
        className='search'
        type='search'
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
      />

    )
  }
}
export default SearchBox