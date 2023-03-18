import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage, NotFoundPage, RewardsPage } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rewards" element={<RewardsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
