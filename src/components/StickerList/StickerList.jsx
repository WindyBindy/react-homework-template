import { Component } from "react";
import Sticker from "../Sticker/Sticker"

class StickerList extends Component{
render(){
  const {onClick, stickers} = this.props
  
return (
  <>
    <ul className='list'>
      {stickers.map(({ img, label }) => (
  <li key={label}>
  <Sticker img={img} label={label} onClick={() => onClick(label)} />
  </li>))}
    </ul>
  </>
)
}
}

export default StickerList