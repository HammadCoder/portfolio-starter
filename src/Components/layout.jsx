// import Header from "./header";
 import Header from "./Navbar/Header";
// import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            {/* <SideDraw logo={img} /> */}
            <Header />
            {children}
            {/* <Footer /> */}
          </>
    )
}