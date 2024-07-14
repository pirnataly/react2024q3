import React from 'react';
import { FallBack } from '../interfaces/types';

export default class ErrorBoundary extends React.Component<FallBack, { hasError: boolean }> {
  constructor(props: FallBack) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.log(this.props.fallback.children);
      return this.props.fallback;
    }
    return this.props.children;
  }
}
