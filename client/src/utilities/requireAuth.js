import React from "react";
import { connect } from "react-redux";

export default function(ComposedComponent){
  class Authenticate extends React.Component {
    componentWillMount() {
      if(!this.props.isAuthenticated) {
        this.context.router.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated){
        this.context.router.push("/login");
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired
  }

  Authenticate.contextTypes = {
    router : React.PropTypes.object.isRequired
  }

  function mapStateToProps(state){
    return {
      isAuthenticated : state.authReducers.isAuthenticated
    };
  }
  return connect(mapStateToProps)(Authenticate);
}
