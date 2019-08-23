import React from 'react'

export default class extends React.Component {
//var upvote_position = $('#someID').position();
// $('body').mousemove(function (event) {
//     $(this).css({
//         position: 'relative',
//         left: (event.pageX - upvote_position.left - 22) + 'px',
//         top: (event.pageY - upvote_position.top - 35) + 'px'
//     });
// });
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.state = { x: 0, y: 0, show: false }
  }

  handleMouseMove(e) {
    this.setState({ x: e.clientX, y: e.clientY, show: true })
  }

  handleMouseLeave() {
    this.setState({ x: 0, y: 0, show: false })
  }

  render() {
    const style ={
      position: 'absolute',
      left: this.state.x,
      top: this.state.y,
      backgroundColor: '#333',
      color: 'white'
    }
    return (
      <div
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
          <div style={style} >X</div>
        {(this.state.show) ?
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
          : <p>hover over this text</p> }
      </div>
    )
  }
}
