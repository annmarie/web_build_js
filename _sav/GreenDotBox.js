// Green Dot Box
import React from "react"

class GreenDotBox extends React.Component {
  constructor(props) {
    super(props)
    this.onOpenBoxClick = this.onToggleButtonClick.bind(this)
    this.state = { isOn: false }
  }

  switchOnState() {
    this.setState(state => ({ isOn: !state.isOn }))
  }

  onToggleButtonClick(e) {
    e.preventDefault()
    this.switchOnState()
  }

  render() {
    const showBox = this.state.isOn
    return (
        <div style={{width:"100px"}}>
          <button onClick={this.onOpenBoxClick}>
            Turn {showBox ? 'OFF' : 'ON'} Green Dot Box
          </button>
          <GreenDotBoxSvg show={showBox}/>
        </div>
    )
  }
}

function GreenDotBoxSvg(props) {
  if (!props.show) return (<React.Fragment/>)

  const styleDiv = {
    maxWidth: '78px',
    maxHeight: '78px',
    overflow: 'hidden',
    margin: '0 auto',
    border: '1px solid #006600'
  }

  return(
      <div style={styleDiv}>
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px">
          <circle cx="40" cy="40" r="24"
                  style={{ stroke: '#006600', fill: '#00cc00' }} />
        </svg>
      </div>
  )
}

export default GreenDotBox
