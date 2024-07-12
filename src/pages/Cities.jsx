import { Link } from "react-router-dom";
import NavBar from "../componenti/NavBar";
import CardItem from "../componenti/CardItem";
import { useSelector } from "react-redux";
function Cities(){

    const cities = useSelector((state) => state.cities.value);
        return(
            <>
                <NavBar></NavBar>
                
                <div className='grid grid-cols-4 gap-5 '>
                {/* modo dinamico per far comparire le card con map */}
                {cities.map((city)=>( 
                <Link to={`/cities/${city.id}`} key={city.id}>
                    <CardItem 
                        title={city.name}
                        isVisited={city.isVisited}
                        img={city.img}>
                        {city.description}
                    </CardItem>
                </Link>
                ))} 
            </div>
            </>

        )


}
export default Cities