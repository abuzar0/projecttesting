import React from "react";
import FallBack from "../fallBack/FallBack";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo)
      return (
        <FallBack error={this.state.error} errorInfo={this.state.errorInfo} />
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
