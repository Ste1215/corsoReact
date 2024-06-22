import {useState,useEffect} from 'react'   

function Example({cities}){
    const [count, setCount] = useState(0)

      // definizione dell'effetto: 
    useEffect(() => {
        localStorage.setItem('count', count.toString())
        document.title=`Conteggio: ${count}`
    },[count,cities]);

    // const handleClick = () =>{
    //         setCount(count + 1)
    //         document.title =`Conteggio: ${count}`  
    //     }
    return(
    <div>
     <p>Conteggio: {count} </p>
     <button onClick={()=> setCount(count + 1)}>Incrementa</button>
    </div>
    )
}
export default Example