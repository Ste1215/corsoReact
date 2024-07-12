import NavBar from "../componenti/NavBar";
import useCounterProva from "../hooks/useCounterProva"
  function About(){ 
    useCounterProva();
    return(
        <>    
        <NavBar></NavBar> 
            <h1 className="text-center text-4xl font-extrabold dark:text-white">     
            Pagina About
            </h1>   
        </> 
    )

   }
 export default About;