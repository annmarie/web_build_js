// Paths
import React from "react"
import DynamicDate from './DynamicDate'

export default () => {
  const styleFooter = {
    paddingTop: '10px',
  }
  const styleDiv = {
    backgroundColor:'#333',
    color:'white',
    padding:'8px'
  }

  return (
    <footer style={styleFooter}>
      <div style={styleDiv}>
        <div><DynamicDate /></div>
      </div>
    </footer>
  )
}
