import { useState } from 'react'
import './App.css'
import Card from './componenti/Card'
import CardForm from './componenti/CardForm'
import Example from './componenti/Example'
//componente
function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([1,2,3])
  const [user, setUser] = useState({name: "alice", age: 30})
const aggiungiItem= () => {
  const nuovoItem=4;
  //... spread operetor
  setItems([...items,nuovoItem])
}
const updateUserName= () => {
  const updateuser= {...user,name: "bob"}
  setUser(updateuser)
}

const addCity= (city) => {
  setCities([...cities,city])
}

 const [cities, setCities] = useState([
  { 
    id:0,
    name: "Tokyo",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, minus.",
    img: 
    "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited : true,
  },
  { 
    id:1,
    name: "New York",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ullam.",
    img: 
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited : false,
  },
  { id:2,
    name: "Paris",
    description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, itaque.",
    img: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited : true,
  },
  { id:3,
    name: "Rome",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, voluptates.",
    img: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isVisited : false,
  },
 ]);


  
  return (
    <>
    <Example cities={cities}></Example>
    <CardForm addCity={addCity}></CardForm>
    <div className='grid grid-cols-4 gap-5 '>
      {/* modo dinamico per far comparire le card con map */}
       {cities.map((city)=>( 
      <Card 
        key={city.id}
        title={city.name}
        isVisited={city.isVisited}
        img={city.img}
        >
        {city.description}
      </Card>
      ))} 
    </div>
    </>
  )
}

export default App
