import React, { Component } from 'react';
import { COMIC_INFO } from './comic_info.js'
import Comic from './Comic.js'

class App extends Component {
  state = {
    comic: 0
  }
  
  nextComic = () => {
    let newCom = this.state.comic
    
    if (newCom < COMIC_INFO.length - 1) {
      newCom += 1
    }
    
    this.setState({
      comic: newCom
    })
  }
  
  prevComic = () => {
    let newCom = this.state.comic
    
    if (newCom > 0) {
      newCom -= 1
    }
    
    this.setState({
      comic: newCom
    })
  }
  
  render() {
    return (
      <div className="App">
        <div id="site-title">THE CRITTERBURY TALES</div>
        <div className="content-container">
          <div className="prev button" onClick={ this.prevComic }>PREV</div>
          <Comic comic={ COMIC_INFO[this.state.comic] } />
          <div className="next button" onClick={ this.nextComic }>NEXT</div>
        </div>
      </div>
    );
  }
}

export default App;
