import React from "react"; 
 
class Comic extends React.Component { 
 
  render() { 
    return ( 
      <div>
        <div id="comic-title">{ this.props.comic.title }</div>
        <div id="comic-book">{ this.props.comic.book }</div>
        <div id="comic-image"><img src={ this.props.comic.img } title={ this.props.comic.alt }/></div>
      </div>
    ) 
  } 
} 
 
export default Comic