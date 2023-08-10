import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/FooterMain";

import './layout.css'
import HeaderMain from "../../components/Header/HeaderMain";

const LayoutMain = () => {
  return (
    <div className="app-layout ">  
      <HeaderMain />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default LayoutMain;