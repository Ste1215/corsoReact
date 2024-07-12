import { useParams } from "react-router-dom";
import NavBar from "../componenti/NavBar";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { GoArrowLeft } from "react-icons/go";

function City(){    
    const {cityID} = useParams();
    console.log(cityID);
    const cities = useSelector((state) =>
        state.cities.value.filter((city) => city.id == cityID.toString())
    );
    console.log(cities);

    const navigate = useNavigate();
    return(
        <>
        <NavBar></NavBar>
        <div className="m-0 p-0">
            <div className="relative">
             <button className="absolute top-0 left-0 m-2" onClick={() => navigate(-1)}>
             <GoArrowLeft className="inline-block"/> go back
                </button>
            </div>
        <h1 className="text-center text-4xl font-extrabold dark:text-white">{cities[0].name}</h1>
        <div className="flex flex-col p-4">
            {cities[0].isVisited && (
                <span className="text-green-700">✓ visitata</span>
            )}
            {!cities[0].isVisited && (
                <span className="text-red-700">❌ non visitata</span>
            )}
        </div>
        <div>
            <img 
            src={cities[0].img}
            className="rounded-t-md"
            width="500"/>
            </div>
        </div>
       
        </>
    );
}
export default City;