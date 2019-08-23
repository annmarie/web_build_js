import React from 'react'
import * as d3 from "d3"

export default class extends React.Component {
  constructor(props) {
    super(props)
    const data = props.dataset.map(o => o.data)
    const colors = props.dataset.map(o => o.color)
    const text = props.dataset.map(o => o.text)
    const total = d3.sum(data, (d) => d)
    const percents = data.map(d => ((d/total)*100).toFixed(2))
    this.state = { data, colors, text, total, percents }
    this.state.hoverIdx = null
    this.onPieArcMouseEnter = this.onPieArcMouseEnter.bind(this)
    this.onPieArcMouseLeave = this.onPieArcMouseLeave.bind(this)
  }

  onPieArcMouseEnter(e) {
    const hoverIdx = e.currentTarget.getAttribute('idx')
    this.setState({ hoverIdx })
  }

  onPieArcMouseLeave() {
    const hoverIdx = null
    this.setState({ hoverIdx })
  }

  render() {
    const pie = d3.pie()(this.state.data)
    const hoverIdx = this.state.hoverIdx
    const svgWidth = this.props.width
    const svgHeight = this.props.width

    return (
      <div className="piechart">
        <svg width={svgWidth} height={svgHeight}>
          <g transform={`translate(${svgWidth / 2},${svgHeight / 2})`}>
            {pie.map((slice, index) => {
              const color = this.state.colors[index]
              return(
                <Slice
                  key={index}
                  color={color}
                  slice={slice}
                  index={index}
                  onMouseEnter={this.onPieArcMouseEnter}
                  onMouseLeave={this.onPieArcMouseLeave}
                />
              )
            })}
          </g>
        </svg>
        <SliceHover
          show={(hoverIdx === null ? false : true)}
          text={this.state.text[hoverIdx]}
          percent={this.state.percents[hoverIdx]}
        />
      </div>
    )
  }
}

function SliceHover(props) {
  const show = props.show
  const text = props.text
  const percent = props.percent
  if (show)
    return (<div><strong>{text}</strong> - {percent}&#37;</div>)
  return (<div>mouse over pie slice to see data</div>)
}

function Slice(props) {
  const index = props.index
  const arc = d3.arc().innerRadius(0).outerRadius(100)
  return(
    <g key={index} className="arc">
      <path idx={index}
        d={arc(props.slice)}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        fill={props.color}
      />
    </g>
  )
}
