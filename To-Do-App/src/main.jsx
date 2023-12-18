/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ContextTheme } from './components/ContextTheme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextTheme>
    <App />
  </ContextTheme>,
)
