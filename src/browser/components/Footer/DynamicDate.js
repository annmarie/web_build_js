// Dynamic Date
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    const currentdate = new Date()
    this.state = { currentdate }
  }

  componentDidMount() {
    const myThis = this;
    myThis.timerID = setInterval(
      () => myThis.updateDate(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateDate() {
    const currentdate = new Date()
    this.setState({ currentdate });
  }

  render() {
    return(
      <React.Fragment>
        {this.state.currentdate.toString()}
      </React.Fragment>
    )
  }
}
