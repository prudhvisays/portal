import React from "react";

class Star extends React.Component{
  render(){
    let r = 'fa fa-star';
    if(!this.props.selected){
        r += '-o';
      }
    return(
      	<i {...this.props} className={r}></i>
    );
  }
}

export default Star;
