import React from 'react';
import SearchBlock from './components/SearchBlock';
import '../src/styles/App.css';
import { MyProps, MyState } from './interfaces/types';
import ResultBlock from './components/ResultBlock';
import fetchResults from './service/request';

class App extends React.Component<MyProps, Partial<MyState>> {
  constructor(props: MyProps) {
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

  render() {
    return (
      <>
        <div className="App">
          <SearchBlock buttonName="Search" text={this.state.text} {...this} />
          <ResultBlock text={this.state.heading} {...this} />
        </div>
      </>
    );
  }
}

export default App;
