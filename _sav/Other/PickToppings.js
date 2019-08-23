// Pick Toppings from a supplied list
import React from "react"
import Modal from './Modal'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items,
      checked: props.checked.filter(n => props.items.indexOf(n)),
      showModal: false
    }
    this.turnModalOn = this.turnModalOn.bind(this)
    this.turnModalOff = this.turnModalOff.bind(this)
    this.updateChecked = this.updateChecked.bind(this)
  }

  getChecked() {
    return [].slice
      .call(this.nodeCheckList.querySelectorAll('[type=checkbox]'))
      .filter(n => n.checked).map(n => n.name)
      .filter(n => this.state.items.indexOf(n) !== -1)
  }

  updateChecked() {
    const checked = this.getChecked()
    this.setState({ checked })
  }

  turnModalOn() { this.setState({ showModal: true }) }

  turnModalOff() { this.setState({ showModal: false }) }

  render() {
    const { items, checked, showModal } = this.state
    return (
      <React.Fragment>
        <ul ref={node => { this.nodeCheckList = node } }>
        { items.map((v, i) => {
          const isChecked = (checked.indexOf(v) !== -1) ? true : false
          return (
            <li key={i} style={{listStyle:'none'}} >
              <input onChange={this.updateChecked}
                name={v} type="checkbox" checked={isChecked} /> {v}
            </li> )
          })
        }
        </ul>
        <button onClick={this.turnModalOn} > pick toppings </button>
        <Modal show={showModal} handleClose={this.turnModalOff}>
        {(checked.length) ?
          <ul>{checked.map((n, i) => <li key={i}>{n}</li>)}</ul> :
            <div>no toppings</div>}
        </Modal>
      </React.Fragment>
    )
  }
}
