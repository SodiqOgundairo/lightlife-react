import { Route, Routes } from "react-router"
import Header from "./components/layout/Header"
import Home from "./pages/Home"
import Footer from "./components/layout/Footer"
import TapGlow from "./components/common/TapGlow"
import CustomCursor from "./components/common/CustomCursor"
import About from "./pages/About"
import DLD from "./pages/DLD"
import Testimony from "./pages/Testimony"
// import EllipseGold from "./assets/img/svg/ellipseGold.svg"
// import EllipsePurple from "./assets/img/svg/ellipsePurple.svg"
// import FloatingSVG from "./components/common/Floaters"

const App = () => {
  return (
    <>
    <TapGlow />
    <CustomCursor />
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/daily-light-devotional" element={<DLD />} />
        <Route path="/testimonies" element={<Testimony />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
