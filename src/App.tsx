import React from 'react';
import SearchBlock from './components/SearchBlock';
import './styles/App.css';
import { MyState } from './interfaces/types';
import ResultBlock from './components/ResultBlock';
import fetchResults from './service/request';

class App extends React.Component<unknown, Partial<MyState>> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      text: String(localStorage.getItem('text') ? localStorage.getItem('text') : '123'),
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
    const { text } = this.state;
    if (text) {
      localStorage.setItem('text', text.trim());
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
    const { config, text, heading } = this.state;
    return (
      <div className="App">
        <SearchBlock
          buttonName="Search"
          textProp={text!}
          handleChangeInput={this.handleChangeInput}
          setLocalStorage={this.setLocalStorage}
        />
        <ResultBlock textProp={heading!} result={config!} />
      </div>
    );
  }
}

export default App;
