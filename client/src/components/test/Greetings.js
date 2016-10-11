import React from 'react';
import { Link } from "react-router";
import { connect } from "react-redux";
import LoginModal from "../modals/LoginModal";
import LoginForm from "../Login/LoginForm";

class Greetings extends React.Component {
  constructor(props){
    super(props);
    this.logoColor = this.logoColor.bind(this);
  }
  componentWillMount() {

    if(this.props.authReducers.isAuthenticated) {
      const sessionData = JSON.parse(localStorage.getItem('sessionData'));
      const { sessionId } = sessionData;
      const videoUrl = `videoslist/${sessionId}`;
      this.context.router.push(videoUrl);
    }
  }

  componentWillUpdate(nextProps){
    if(nextProps.authReducers.isAuthenticated) {
      const sessionData = JSON.parse(localStorage.getItem('sessionData'));
      const { sessionId } = sessionData;
      const videoUrl = `videoslist/${sessionId}`;
      this.context.router.push(videoUrl);
    }
  }

  componentDidMount(){
    this.logoColor();
  }
logoColor(){
  const granimInstance = new Granim({
    element: '#logo-canvas',
    direction: 'left-right',
    opacity: [1, 1],
    states : {
        "default-state": {
            gradients: [
                ['#EB3349', '#F45C43'],
                ['#FF8008', '#FFC837'],
                ['#4CB8C4', '#3CD3AD'],
                ['#24C6DC', '#514A9D'],
                ['#FF512F', '#DD2476'],
                ['#DA22FF', '#9733EE']
            ],
            transitionSpeed: 2000
        }
    }
  });
}

  render() {
    const { sessionId } = this.props.authReducers.user
    const videoListUrl = `/videoslist/${sessionId}`;
    return (
      <div className="landingBody">
      <div className="container contain" style={{'width':'75%'}}>
        <div className="row">
          <div className="col-xs-12">
                <div className="bloc-logo">
                <canvas id="logo-canvas">hello</canvas>
                <a className="logo-mask">Granim.js</a>
                </div>
          </div>
          <div className="col-xs-12">
                <div className="panel pink">
               <LoginForm/>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
}

Greetings.contextTypes = {
  router : React.PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
    authReducers: state.authReducers
  }
}
export default connect(mapStateToProps)(Greetings);
