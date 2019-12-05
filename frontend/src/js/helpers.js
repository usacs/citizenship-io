import * as React from "react";

export class If extends React.Component{
  render(){
    let {condition} = this.props;
    if(condition)
      return this.props.children;
    return <div></div>;
  }
}