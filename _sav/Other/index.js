// Other
import React from "react"
import PickToppings from './PickToppings'
import PieChart from './PieChart'
import BarChart from './BarChart'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataset: [
        { text: 'chicken', data: 2500, color: 'green' },
        { text: 'veggie', data: 1000, color: 'red' },
        { text: 'beef', data: 3000, color: 'blue' }
      ],
      toppings: ['Tomato','Pickle','Mayo','Onion'],
      defaultToppings: ['Pickle']
    }
  }

  render() {
    const dataset = this.state.dataset
    const toppings = this.state.toppings
    const defaultToppings = this.state.defaultToppings
    return (
      <React.Fragment>
        <h3>other</h3>
        <hr />
        <PickToppings
          items={toppings}
          checked={defaultToppings}
        />
        <hr />
        <PieChart
          dataset={dataset}
          width={200}
        />
        <hr />
        <BarChart
          dataset={dataset}
          width={400}
        />
      </React.Fragment>
    )
  }
}
