import { Route, Routes } from "react-router"
import Header from "./components/layout/Header"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
