// Modal
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  handleClickOutside(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.props.handleClose()
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, false)
  }

  render() {
    const styleModal = {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.6)',
      display: 'block',
    }

    const styleModalMain = {
      position: 'fixed',
      background: 'white',
      width: '80%',
      height: 'auto',
      top:'50%',
      left:'50%',
      transform: 'translate(-50%,-50%)'
    }

    const styleModalBox = {
      padding: "15px",
      margin: "20px",
      background: "#eee",
      overflow: "visible",
      boxShadow: "5px 5px 2px #888",
      position: "relative"
    }

    const styleCloseButton = {
      position: 'relative',
      float: 'right',
      top: '-10px',
      right: '-10px'
    }

    if (this.props.show || false) {
      return(
        <div style={styleModal} >
          <div style={styleModalMain} ref={node => { this.node = node } }>
            <div style={styleModalBox}>
              <button style={styleCloseButton}
                onClick={this.props.handleClose}>close</button>
            {this.props.children}
            </div>
          </div>
        </div>
      )
    }

    return ''
  }
}
