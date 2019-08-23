// App Render
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Page from './components/Page'

const container = document.querySelector('#app-container')
const App = <AppContainer><Page /></AppContainer>

ReactDOM.render(App, container)

if (module.hot) {
  module.hot.accept(Page, () => {
    ReactDOM.render(App, container)
  })
}
