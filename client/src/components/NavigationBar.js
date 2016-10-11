import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";
import classnames from "classnames";

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: "",
            offset: ""
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.logoColor = this.logoColor.bind(this);
    }
    componentDidMount() {
        if (window.addEventListener) {
            (window.addEventListener)('scroll', this.handleScroll);
        } else if (window.attachEvent) {
            window.attachEvent('scroll', this.handleScroll);
        } else {
            window['scroll'] = this.handleScroll;
        }
        const navBar = document.getElementById('nav-bar');
        const navPos = navBar.offsetTop;
        console.log('navpos' + navPos)
        this.setState({ offset: navPos });
        this.logoColor();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        if (window.removeEventListener) {
            (window.removeEventListener)('scroll', this.handleScroll);
        } else if (window.detachEvent) {
            window.detachEvent('scroll', this.handleScroll);
        }
    }
    logoColor() {
        const granimInstance = new Granim({
            element: '#block-logo-canvas',
            direction: 'left-right',
            opacity: [1, 1],
            states: {
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
    handleScroll(event) {
        const itemTranslate = window.pageYOffset;
        this.setState({ scrollTop: itemTranslate })
    }
    logout(e) {
        e.preventDefault();
        this.props.logout(this.props.authReducers.user.sessionId);
    }
    render() {
        const { isAuthenticated, user } = this.props.authReducers;
        const userLinks = (<ul className="nav navbar-nav" style={{display:'flex'}}>
        <li className="nav-item active font-family">
          <h4>{user.username}</h4>
        </li>
        <li className="nav-item" style={{marginLeft:'12px'}}>
          <span onClick={this.logout.bind(this)} className="btn btn-sm btn-outline-warning"> logout</span>
          </li>
      </ul>);
        const guestLinks = (<p><Link to="login">Login</Link></p>);
        return (<nav id="nav-bar" className='navbar navbar-full navbar-light bg-faded navbar-fixed-top' style={{'backgroundColor':'#fff'}}>
<div className="container">
               <div className="navbar-brand">
              <div className="block-logo">
              <canvas id="block-logo-canvas"></canvas>
              <Link to={`/videoslist/${user.sessionId}`} className="block-logo-mask">Granim.js</Link>
              </div>
              </div>


    <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
    &#9776;
  </button>
  <div className="collapse navbar-toggleable-xs pull-md-right pull-sm-right navbar-toggleable-md" id="exCollapsingNavbar2">
              {isAuthenticated ? userLinks: guestLinks}
  </div>
  </div>
            </nav>);
    }
}

NavigationBar.propTypes = {
  authReducers: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}
 function mapStateToProps(state) {
   return {
     authReducers: state.authReducers
   };
 }
export default connect(mapStateToProps, { logout })(NavigationBar);
