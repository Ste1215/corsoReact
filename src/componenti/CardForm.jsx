import { useState } from 'react'

function CardForm({addCity}){
    const [formData,setFormData] = useState({
        name: "",
        description: "",
        img: "",
        isVisited: false,
    })
    const handleInputChange= (e)=>{
          const {name, type, value, checked} = e.target
          const inputValue = type == "checkbox" ? checked : value
          setFormData({
            ...formData,
            [name]: inputValue,
          })
    }
    const handleSubmit= (e)=>{
        e.preventDefault()
        const city=
          {  id: Math.random(),
            name: formData.name,
            description: formData.description,
            img: formData.img,
            isVisited : formData.isVisited,
          };
          addCity(city)
    }
        return(
        <form onSubmit={handleSubmit}
         className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">
           <div className="flex flex-col">
            <label>Nome Citta</label>
           <input type="text" name="name" 
             value={formData.name} 
             onChange={handleInputChange}/>
           </div>
           <div className="flex flex-col">
            <label>Descrizione</label>
           <textarea name="description"  
             value={formData.description}
             onChange={handleInputChange}></textarea>
           </div>
           <div className="flex flex-col">
            <label>Immagine</label>
            <input type="text" name="img" 
             value={formData.img} 
             onChange={handleInputChange}/>
           </div>
           <div className="flex flex-col">
            <label>Visitata?</label>
            <input type="checkbox" name="isVisited" 
             checked={formData.isVisited} 
             onChange={handleInputChange}/>
           </div>
             <button className="bg-zinc-700" type="submit">Aggiungi Card</button>
        </form>
        )
}
export default CardForm