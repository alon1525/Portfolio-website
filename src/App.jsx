import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import ProjectDetail from './ProjectDetail.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
