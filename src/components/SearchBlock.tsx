import React from 'react';
import { MyProps, MyState } from '../interfaces/types';

class SearchBlock extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  }

  render() {
    const { buttonName, text, handleChangeInput, setLocalStorage } = this.props;
    return (
      <>
        <div className="search-container">
          <input className="input" value={text} onChange={handleChangeInput} />
          <button className="search-button" onClick={setLocalStorage}>
            {buttonName}
          </button>
        </div>
      </>
    );
  }
}

export default SearchBlock;
