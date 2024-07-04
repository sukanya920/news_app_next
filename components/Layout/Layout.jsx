import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <>
      <div className="wrapper">
        <Header/>
        {children}
        <Footer/>
      </div>
    </>
  )
}
