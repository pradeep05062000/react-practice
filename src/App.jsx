import { BrowserRouter as Routers, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./pages/Home";
import About from "./pages/About";
function App() {

  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Link to="/" >
          Home
        </Link>
        <Link to="/about" >
          About
        </Link>
      </Routers>

    </>
  )
}

export default App
