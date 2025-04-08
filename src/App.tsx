import { Route, Routes } from "react-router"
import Header from "./components/layout/Header"
import Home from "./pages/Home"
import Footer from "./components/layout/Footer"
import TapGlow from "./components/common/TapGlow"
import CustomCursor from "./components/common/CustomCursor"

const App = () => {
  return (
    <>
    <TapGlow />
    <CustomCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
