import Footer from "../components/Footer";
import Header from "../components/Header";
import Home_rol from "../components/Home_rol";


function Home() {

    var rol = localStorage.getItem("manufactura_rol");

    return (
        <>
            <Header></Header>
            <Home_rol rol={rol}></Home_rol>
            <Footer></Footer>
        </>
    )
}


export default Home;