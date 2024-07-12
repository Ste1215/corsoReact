function CardItem({title,img,isVisited, children }){    
     return(
        <div className="hover:scale-110 transition-all bg-zinc-950 rounded-lg">
            <img src={img}  className="rounded-lg"/>
            <div className="flex flex-col  rounded-lg ">
                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500">{children}</p>
               {/* l'&& vuol dire questo se è visitata e allora, mi mandi a schermo lo span */}
            {isVisited && <span className="text-green-700">✓ visitata</span>}            
            {!isVisited && <span className="text-red-700">❌ non visitata</span>}
            </div>
        </div>
     );
}
export default CardItem;