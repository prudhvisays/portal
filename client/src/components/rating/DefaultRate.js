import React from "react";
import Star from "./Star";
import { reduce } from "lodash";

class DefaultRate extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      rating:"",
      hoverAt: null
    }
  }

  componentDidMount(){
    const { rating } = this.props
      const total = reduce(rating,(sum,n) => {
        return (sum + n)

      })
      const avg = total/rating.length;
      console.log("rating:" + avg)
      this.setState({rating:avg});
    }


  render(){
    const stars = [];
    for(let i=0;i<5;i++){
      const rating = this.state.rating;
      const selected = (i<rating);
    stars.push(
    <Star key={i} selected={selected} />);
          }
    return(
      <div>
            {stars}
      </div>

    )
  }
}

export default DefaultRate;
