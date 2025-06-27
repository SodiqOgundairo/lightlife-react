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

const App = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  const currentYear = new Date().getFullYear();

  const AdminHeader = () => (
    <header className="bg-darkPurple p-3 shadow-md">
      <div className="container mx-auto">
        <Link to="/">
          <img src="/LLC_Logo.png" alt="LightLife Church Logo" className="h-10 md:h-12 w-auto" />
        </Link>
      </div>
    </header>
  );

  return (
    <>
      <TapGlow />
      <CustomCursor />

      {isAdminPage ? <AdminHeader /> : <Header />}

      <div className="flex-grow"> {/* Added to help push footer down if content is short */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/daily-light-devotional" element={<DLD />} />
          <Route path="/testimonies" element={<Testimony />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      { !isAdminPage && <Footer />} {/* Render Footer only if not admin page */}
    </>
  );
}

export default App;
