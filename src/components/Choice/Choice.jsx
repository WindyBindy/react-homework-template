import { Component } from "react";


class Choice extends Component{
render(){
  const {labelImg} = this.props
  
  return (
    <>
    <p>{labelImg}</p>
    </>
  )
}
}

export default Choice