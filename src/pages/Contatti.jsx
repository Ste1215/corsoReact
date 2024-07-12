import NavBar from "../componenti/NavBar";
import useCounterProva from "../hooks/useCounterProva"

function Contatti(){
    useCounterProva();

    return(
    <>
    <NavBar></NavBar>
        <h1 className="text-center text-4xl font-extrabold dark:text-white">
        Pagina Contatti
        </h1>
    </>
    )
}
export default Contatti