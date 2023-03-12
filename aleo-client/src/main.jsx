import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{ colorScheme: 'dark' }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
)