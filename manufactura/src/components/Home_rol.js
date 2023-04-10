import Home_admin from "./Home_admin";
import Home_student from "./Home_student";
import Home_teacher from "./Home_teacher";



function Home_rol(params) {
    if (params.rol==='admin') {
        return(
            <Home_admin></Home_admin>
        )
    }else{
        if (params.rol==='student') {
            return(
                <Home_student></Home_student>
            )
        }else{
            return(
                <Home_teacher></Home_teacher>
            )
        }
    }
}


export default Home_rol;