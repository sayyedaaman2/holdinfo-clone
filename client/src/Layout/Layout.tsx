import { ReactNode } from "react";
import Footer from "../components/Footer";

interface layoutProp {
  children: ReactNode;
}

const Layout = ({ children }: layoutProp) => {
  return (
    <>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
