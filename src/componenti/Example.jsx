import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/CounterSlice'

function Example(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    //dispatch(mandare ordini,voglio modificarlo ecc....)
    return(
    <div>
     <p>Conteggio: {count} </p>
     <button className='mr-3' 
     onClick={() => dispatch(increment())}>
        Incrementa +
    </button>
     <button className='mr-3' 
     onClick={() => dispatch(decrement())}>
        Decrementa - 
    </button>
    </div>
    )
}
export default Example