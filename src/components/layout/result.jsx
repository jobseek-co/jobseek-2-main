import Header from "./header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="w-full flex flex-col ">
      <Header/>
      <main className="w-full flex-1  bg-[#0D0E11]">
        <Outlet  /> {/* ✅ NOT {children} */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;