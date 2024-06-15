
function Card({ title,  img, children }){    
   
    return(
        <div className="rounder-md bg-zinc-950 rounded">
            <img src={img} alt=""/>
            <div className="flex flex-col">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500">{children}</p>
            </div>
        </div>
     )
}
export default Card;