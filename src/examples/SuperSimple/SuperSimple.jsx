import { createContext } from "react"
import Child from "./Child"

export const MyContext = createContext()

/*
    createContext()
    ``````````````
    This function returns us a "context" object which we can use to "provide" data to any children.
    On the context object, we have a provider component, as you can see below.
    When we use it, we should pass it a "value" prop which represents the data we want to provide.

    In this super simple example, I will simply be passing it my name.

    IMPORTANT: When we first define our context object (line 4), we should EXPORT it so that
    the children can import it later. See the SuperSimple/Grandchild component to see how we used the context.
*/

export default function SuperSimple() {

    return (
        <MyContext.Provider value={"Doug"}>
            <div className="example">
                <h1>Super simple</h1>
                <h2>A single value</h2>
                <Child />
            </div>
        </MyContext.Provider>
    )
}