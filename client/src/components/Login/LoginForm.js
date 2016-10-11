import React from 'react';
import validateInput from "../../validations/Login.js";
import { connect } from "react-redux";
import { login } from '../../actions/authActions';
import TextFieldGroup from "../../common/TextFieldGroup";

class LoginForm extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        username : "",
        password : "",
        errors: {},
        isLoading: false
      }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // isValid() {
  //   const { errors, isValid } = validateInput(this.state);
  //
  //   if(!isValid){
  //     this.setState({ errors });
  //   }
  //   return isValid;
  // }
  onSubmit(e){
    e.preventDefault();
      this.setState({ errors: {}, isLoading:true });
      this.props.login(this.state).then(
      (res) => {
        console.log(this.props.userData.error);
              if(this.props.userData.isAuthenticated){
                let sessionData = JSON.parse(localStorage.getItem('sessionData'));
                this.context.router.push("/videosList/" + sessionData.sessionId);
              }else{
                this.setState({ errors: this.props.userData })
                console.log(this.state.errors)
              }
        },
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    );

  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    const { username, password, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>



        <TextFieldGroup
        field="username"
        value={username}
        onChange={this.onChange}
        label="Username / Email"
        />
        <TextFieldGroup
        field="password"
        value={password}
        onChange={this.onChange}
        label="Password"
        type="password"
        />
        {errors.error && <span><i class ="errorMsg">{errors.error}</i></span>}
        <button className="buttons">LOGIN</button>

      </form>
    )
  }
}

LoginForm.propTypes = {
  login : React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    userData: state.authReducers
  };
}

export default connect(mapStateToProps, { login })(LoginForm);
