import React from 'react';
import { MyProps } from '../interfaces/types.tsx';

class SearchBlock extends React.Component<MyProps, unknown> {
  constructor(props: MyProps) {
    super(props);
  }

  render() {
    const { buttonName, text, handleChangeInput, setLocalStorage } = this.props;
    return (
      <div className="search-container">
        <input className="input" value={text} onChange={handleChangeInput} />
        <button className="search-button" onClick={setLocalStorage}>
          {buttonName}
        </button>
      </div>
    );
  }
}

export default SearchBlock;
