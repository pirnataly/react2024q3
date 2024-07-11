import React from 'react';
import '../styles/App.css';
import fetchResults from '../service/request';
import { ResultBlockState, ResultsProps } from '../interfaces/types';

export default class ResultBlock extends React.Component<ResultsProps, ResultBlockState> {
  constructor(props: ResultsProps) {
    super(props);
    this.state = {
      results: this.props.state.config,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const fetchArg = localStorage.getItem('text') ? localStorage.getItem('text') : 'evening';
    fetchResults(fetchArg).then((data) => {
      setTimeout(() => {
        this.setState({
          results: data,
        });
      }, 1000);
    });
  }

  render() {
    console.log(this.state.results);
    const headingText = localStorage.getItem('text') ? localStorage.getItem('text') : '';
    const nameOfClass = this.state.results === null ? 'spinner' : 'results-container';
    if (this.state.results === null) {
      return <div className={nameOfClass}></div>;
    }
    return <h1 className="results-heading">{headingText}</h1>;
  }
}
