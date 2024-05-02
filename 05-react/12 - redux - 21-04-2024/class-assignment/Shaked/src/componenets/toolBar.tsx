import { useDispatch } from 'react-redux'
import { decrement, increment, addAmount } from '../features/counter/counter-slice'

export default function Toolbar() {
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(addAmount(10))}>Add 10</button>
        </>
    )
}
