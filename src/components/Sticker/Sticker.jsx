import { Component } from "react";


class Sticker extends Component{
render(){
  const {img, label, onClick} = this.props
  
  return (
    <>
    <img src={img} alt={label}  onClick={onClick}/>
    </>
  )
}
}

export default Sticker