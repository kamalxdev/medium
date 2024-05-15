import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/blog'
import Signin from './pages/signin'
import Signup from './pages/signup'
import BlogId from './pages/blogId'
import Navbar from './components/navbar'
import CreateBlog from './pages/createBlog'

function App() {

  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs/" element={<Blog />} />
          <Route path='/blog/:id' element={<BlogId/>}/>
          <Route path='create' element={<CreateBlog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App