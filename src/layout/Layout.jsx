import Header from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../pages/Chatbot";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="md:w-[70px] lg:w-[100px] w-[50px] fixed right-[15px] bottom-[40px]">
        <Chatbot />
        
        
      </div>
      <Footer />
    </>
  );
};

export default Layout;
