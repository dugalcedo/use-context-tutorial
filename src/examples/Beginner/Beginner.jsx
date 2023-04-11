import Child from './Child'
import { createContext, useState } from 'react'

/*
    Just as in the super simple example, I imported createContext from react.
    But this time, I'm also importing useState. This is because I want my provider
    to provide:
        - not only some data
        - but also a way to update that data from any component!
    
    So I destructured the return value of useState, as usual, into a state variable
    AND a state updating function, then passed BOTH of those into the value prop
    of my provider!

    This way, when I import the context from the grandchild, I'll be able to update it
    there as well!

    Feel free to take a look at Beginner/Grandchild.jsx to see what's going on.
    When you feel you understand it, move on to Intermediate/Intermediate.jsx.
*/

export const MyContext = createContext()

export default function Beginner() {

    const [state, updateState] = useState(true)

    return (
        <MyContext.Provider value={[state, updateState]}>
            <div className="example">
                <h1>Beginner</h1>
                <h2>Updateable context</h2>
                <Child />
            </div>
        </MyContext.Provider>
    )
}