import React from 'react';
import SearchBlock from './components/SearchBlock';
import '../src/styles/App.css';
import { MyState } from './interfaces/types.tsx';
import ResultBlock from './components/ResultBlock.tsx';
import fetchResults from './service/request.tsx';

class App extends React.Component<unknown, Partial<MyState>> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      text: String(localStorage.getItem('text') ? localStorage.getItem('text') : ''),
      heading: String(localStorage.getItem('text') ? localStorage.getItem('text') : ''),
      config: null,
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target) {
      const { value } = e.target;
      this.setState({
        text: String(value),
      });
    }
  };

  setLocalStorage(): void {
    if (this.state.text) {
      localStorage.setItem('text', this.state.text.trim());
    } else {
      localStorage.removeItem('text');
    }
    this.fetchData();
  }

  fetchData() {
    const fetchArg = localStorage.getItem('text') ? localStorage.getItem('text') : 'photo';
    this.setState({
      config: null,
    });

    fetchResults(fetchArg).then((data) => {
      setTimeout(() => {
        this.setState({
          config: data,
        });
      }, 1000);
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>Hello World!</h1>
          <SearchBlock
            buttonName="Search"
            text={this.state.text!}
            handleChangeInput={this.handleChangeInput}
            setLocalStorage={this.setLocalStorage}
          />
          <ResultBlock text={this.state.heading!} {...this} />
        </div>
      </>
    );
  }
}

export default App;
