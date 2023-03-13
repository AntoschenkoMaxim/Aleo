import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from './redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{ colorScheme: 'dark' }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
)
