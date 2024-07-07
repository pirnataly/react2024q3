import React, { ReactNode } from 'react';

class SearchBlock extends React.Component<{ text: string }, ReactNode> {
  constructor(props) {
    super(props);
    this.state = {
      text: localStorage.getItem('text') ? localStorage.getItem('text') : '',
    };
    this.fetchData = this.fetchData.bind(this);
  }

  handleChangeInput = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  fetchData() {
    localStorage.setItem('text', this.state.text.trim());
    console.log('fetchData', this.state.text);
  }

  render() {
    return (
      <div className="search-container">
        <input className="input" value={this.state.text} onChange={this.handleChangeInput} />
        <button className="search-button" onClick={this.fetchData}>
          Search
        </button>
      </div>
    );
  }
}

export default SearchBlock;
