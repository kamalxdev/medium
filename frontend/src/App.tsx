import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/blog'
import Signin from './pages/signin'
import Signup from './pages/signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App