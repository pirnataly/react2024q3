import React, { ReactNode } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../interfaces/types';

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean } {
    console.error(error);
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <p className="results-heading">Something went wrong</p>;
    }
    return this.props.children;
  }
}
