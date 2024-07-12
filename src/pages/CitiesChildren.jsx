import { Link, Outlet } from "react-router-dom";
import NavBar from "../componenti/NavBar";
import CardItem from "../componenti/CardItem";
import { useSelector } from "react-redux";

function CitiesChildren(){

    const cities = useSelector((state) => state.cities.value);

        return(
            <>
                <NavBar></NavBar>
            <h1 className="text-center text-4xl font-extrabold dark:text-white">Pagina Children</h1>
            <div className='grid grid-cols-4 gap-5 '>
                {/* modo dinamico per far comparire le card con map */}
                {cities.map((city)=>( 
                <Link to={`/cities-children/${city.id}`} key={city.id}>
                    <CardItem 
                        title={city.name}
                        isVisited={city.isVisited}
                        img={city.img}>
                        {city.description}
                    </CardItem>
                </Link>
                ))} 
            </div>
            <Outlet/>
            </>

        )


}
export default CitiesChildren