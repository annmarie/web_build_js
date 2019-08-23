import React from 'react'
import * as d3 from "d3"

export default class extends React.Component {
  constructor(props) {
    super(props)
    const data = props.dataset.map(o => o.data)
    const colors = props.dataset.map(o => o.color)
    const text = props.dataset.map(o => o.text)
    const total = d3.sum(data, (d) => d)
    const percents = data.map(d => (d/total)*100 )
    this.state = { data, colors, text, total, percents }

  }

  dataHeight(d,h) {
    return ((h/100)*(d/h)) * h/100
  }

  renderBarChart(svgWidth, svgMaxHeight) {
    const data = this.state.data
    const dataLen = data.length
    const max = d3.max(data)
    const rectFill = (d,i) => this.state.colors[i]
    const rectText = (d,i) => this.state.text[i]
    const rectData = (d,i) => this.state.data[i]

    const rectWidth = svgWidth / dataLen
    const rectHeight = this.dataHeight(max,svgMaxHeight) + 50
    const rectY = (d,i) => rectHeight - this.dataHeight(d,svgMaxHeight)
    const rectX = (d,i) => i * rectWidth

    const svg = d3.select(this.refs.barchart)
      .attr('width', svgWidth)
      .attr('height', () => rectHeight)
      .append('g')
      .attr('className', 'bar')

    svg.selectAll('g')
      .data(data)
      .enter()
      .append('rect')
      .attr('y', rectY)
      .attr('x', rectX)
      .attr('height', (d) =>  this.dataHeight(d,svgMaxHeight))
      .attr('width', rectWidth)
      .attr('fill', rectFill)

console.log(this.refs.barchart.getBoundingClientRect())

    svg.selectAll('g')
      .data(data)
      .enter()
      .append('text')
      .attr('fill', rectFill)
      .attr('x', (d,i) => rectX(d,i) + 2)
      .attr('y', (d,i) => rectY(d,i) - 10)
      .text(rectText)

    svg.selectAll('g')
      .data(data)
      .enter()
      .append('text')
      .attr('fill', rectFill)
      .attr('x', (d,i) => rectX(d,i) + 2)
      .attr('y', (d,i) => rectY(d,i) - 30)
      .text(rectData)
  }

  componentDidMount() {
    const svgWidth = this.props.width
    const svgMaxHeight = 200
    this.renderBarChart(svgWidth, svgMaxHeight)
  }

  render() {
    return (
      <svg ref='barchart' />
    )
  }
}
