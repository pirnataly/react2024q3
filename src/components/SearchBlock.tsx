import React from 'react';
import { MyProps } from '../interfaces/types';

class SearchBlock extends React.Component<MyProps, unknown> {
  constructor(props: MyProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonName, textProp, handleChangeInput, setLocalStorage } = this.props;
    return (
      <div className="search-container">
        <input className="input" value={textProp} onChange={handleChangeInput} />
        <button className="search-button" onClick={setLocalStorage} type="button">
          {buttonName}
        </button>
      </div>
    );
  }
}

export default SearchBlock;
