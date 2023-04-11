import { useContext } from 'react'
import { MyContext } from './Beginner'

export default function Grandchild() {

    const [state, updateState] = useContext(MyContext)

    function toggle() {
        updateState(!state)
    }

    return (    
        <button className='bigButton' onClick={toggle}>
            {state ? 'true' : 'false'}
        </button>
    )
}