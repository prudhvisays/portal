import React from "react";
import { connect } from "react-redux";

// by using this higher component stuture, we are checking that user as access to the page, if not redirect to the login page
export default function(ComposedComponent){
  class Authenticate extends React.Component {
    componentWillMount() {

      if(!this.props.isAuthenticated) {
        this.context.router.push("/");   //checks before the render
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated){
        this.context.router.push("/"); //if the user loggedout the redirects to the LoginPage
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
