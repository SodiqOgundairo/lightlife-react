import { Route, Routes, useLocation, Link } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import TapGlow from "./components/common/TapGlow";
import CustomCursor from "./components/common/CustomCursor";
import About from "./pages/About";
import DLD from "./pages/DLD";
import Testimony from "./pages/Testimony";
import NotFound from "./pages/PageNotFound";
import AdminDashboard from "./pages/admin/Dashboard";
import Give from "./pages/Give";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Remove for instant scroll
    });
  }, [location.pathname]);

  // const currentYear = new Date().getFullYear();


  const AdminHeader = () => (
    <header className="bg-darkPurple p-3 shadow-md">
      <div className="container mx-auto">
        <Link to="/">

          <img src="/LLC_Logo.png" alt="Lightlife church Logo" className="h-10 md:h-12 w-auto" />
        </Link>
      </div>
    </header>
  );

  // const AdminFooter = () => (
  //   <footer className="bg-darkPurple text-light text-center p-4 text-xs md:text-sm">
  //     <p>© {currentYear} Living Light Christian Church. All rights reserved.</p>
  //   </footer>
  // );


  return (
    <>
      <TapGlow />
      <CustomCursor />

      {isAdminPage ? <AdminHeader /> : <Header />}

      <div className="flex-grow"> {/* This outer flex-grow helps push footer down */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/daily-light-devotional" element={<DLD />} />
          <Route path="/testimonies" element={<Testimony />} />
          <Route path="/support" element={<Give />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* {isAdminPage ? <AdminFooter /> : <Footer />} */}
      {isAdminPage ? '' : <Footer />}
    </>
  );
}

export default App;
