
function Card({title,img,isVisited, children }){    
     return(
        <div className="rounder-md bg-zinc-950 rounded-xl">
            <img src={img} alt="" className="rounded-xl"/>
            <div className="flex flex-col">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500">{children}</p>
            {isVisited && //(l'&& vuol dire questo se è visitata e allora, mi mandi a schermo lo span 
            <span>✔️ visitata</span>
            }            
            {!isVisited && <span>❌ non visitata</span>}
            </div>
        </div>
     );
}
export default Card;