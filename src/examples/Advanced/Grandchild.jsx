import { MyStore } from './Advanced'
import { useContext } from 'react'

export default function Grandchild() {

    const [store, $] = useContext(MyStore)

    /*
        Here, I destructure the context.
        I called the storeUpdater "$" here for simplicity's sake.
        But of course, when we destructure an array, we can call the variables
        whatever we want.

        Just know that $ is our storeUpdater.
    */

    function handleChange(e) {
        const propertyName = e.target.getAttribute('name')
        const newValue = e.target.value
        $(propertyName, newValue)
    }

    /*
        Now, I only need ONE function to update ANY property in the store!
        In handleChange, I used the "name" attribute of the inputs to update
        the corresponding properties.

        That's it! I hope you enjoyed this demo, and I hope useContext makes more sense now!

        P.S.: useContext sucks! Use jotai instead :)
        npm i jotai
    */

    return (
        <div id="advancedForm">    
            <div>
                <span>continent</span>
                <input type="text" name="continent" onChange={handleChange}/>
            </div>
            <div>
                <span>country</span>
                <input type="text" name="country" onChange={handleChange}/>
            </div>
            <div>
                <span>region</span>
                <input type="text" name="region" onChange={handleChange}/>
            </div>
            <div>
                <span>county</span>
                <input type="text" name="county" onChange={handleChange}/>
            </div>
            <div>
                <span>city</span>
                <input type="text" name="city" onChange={handleChange}/>
            </div>
            <div>
                <span>neighborhood</span>
                <input type="text" name="neighborhood" onChange={handleChange}/>
            </div>
        </div>
    )
}