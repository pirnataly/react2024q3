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
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <p className="results-heading">{Error.name ? Error.name : 'Something went wrong'}</p>;
    }
    return children;
  }
}
