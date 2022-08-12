import React, { Component, ReactNode } from 'react';

export interface ErrorBoundaryProps {
  render?: (error?: string) => ReactNode;
}

export interface ErrorBoundaryState {
  error?: string;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {};
  }

  public componentDidCatch(error: Error) {
    const errorText = error.toString();
    this.setState({ error: errorText });
    alert(errorText);
  }

  public render() {
    if (this.props.render) {
      return this.props.render(this.state.error);
    }

    return this.props.children;
  }
}
