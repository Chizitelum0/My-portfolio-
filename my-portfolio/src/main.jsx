import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class Boundary extends Component {
  state = { err: null }
  static getDerivedStateFromError(err) { return { err } }
  render() {
    return this.state.err
      ? <pre style={{ color: 'salmon', padding: 20, whiteSpace: 'pre-wrap' }}>{String(this.state.err.stack || this.state.err)}</pre>
      : this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Boundary>
      <App />
    </Boundary>
  </StrictMode>
)