import React from "react";
import Star from "./Star";
import { connect } from "react-redux";
import { Rating } from "../../actions/RatingActions";

// passing the video props to the star component.when handleClick is performed the rating gets posted
class StarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: null,
            hoverAt: null,
            videoId: ""
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.videoId !== nextProps.videoId) {
            const { videoId } = nextProps;
            this.setState({ rating: null });
            this.setState({ videoId });
        }
    }
    handleMouseOver(index, event) {
        this.state.hoverAt = index + 1;
        this.forceUpdate();
    }
    handleMouseOut(index, event) {
        this.state.hoverAt = null;
        this.forceUpdate();
    }
    handleClick(index, event) {
        this.state.rating = index + 1;
        this.forceUpdate();
        this.props.Rating(this.state);
    }
    render() {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const rating = this.state.hoverAt != null ? this.state.hoverAt : this.state.rating;
            const selected = (i < rating);
            stars.push(<Star key={i} selected={selected}
            	  onMouseOver={this.handleMouseOver.bind(this, i)}
              	  onMouseOut={this.handleMouseOut.bind(this, i)}
                    onClick={this.handleClick.bind(this, i)} />);
        }
        return (<div>
            {stars}
      </div>)
    }
}

function mapStateToProps(state){
  return {
      video: state.videoReducers.video
  }

}
export default connect(mapStateToProps,{ Rating })(StarRating);
