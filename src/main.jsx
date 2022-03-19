import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Layout from './components/Layout-example'
import LayoutSidebar from './components/LayoutSidebar'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Layout /> */}
    <LayoutSidebar />
  </React.StrictMode>,
  document.getElementById('root')
)
