import { Component } from 'react'
import Choice from './components/Choice/Choice'
import StickerList from './components/StickerList/StickerList'
import stickers from "../stickers.json"
import './App.css'


class App extends Component {
state = {
  labelImg:""

}

handleLabel =(label)=>{
this.setState({
  labelImg: label
})
}


  render() {
    return (
      <>
      {/* <ul className='list'>{
        stickers.map(({img, label})=>
            <li>
            <img src={img} alt={label}  onClick={()=> this.handleLabel((label))}/>
            </li>
        )}
      </ul> */}
      <StickerList stickers={stickers} onClick={this.handleLabel} />
      <Choice labelImg={this.state.labelImg}/>
      </>
    )
  }
}

export default App
