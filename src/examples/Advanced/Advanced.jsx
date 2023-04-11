import Child from './Child'
import { createContext, useState } from 'react'

export const MyStore = createContext()

let initialStore = {
    continent: 'Europe',
    country: 'Sweden',
    region: 'Svealand',
    county: 'Stockholm',
    city: 'Huddinge',
    neighborhood: 'Stuvsta'
}

export default function Advanced() {

    const [store, updateStore] = useState(initialStore)

    function storeUpdater(key, valOrFn) {
        let result = {...store}
        if (typeof valOrFn === 'function') {
            result[key] = valOrFn(result[key])
        } else {
            result[key] = valOrFn
        }
        updateStore(result)
    }

    /*
        In this example, I'm creating my own custom function
        for updating the store. It takes two arguments:
            1. A key. That is, the name of the property on the object we want to update.
            2. A new value, OR callback* which takes the current value and returns a new one.
                - *This callback works just like the updater function that useState gives us.
        This way, if we want to change continent to Asia for example, we can call our
        storeUpdater like this:
            storeUpdater('continent', 'Asia')
        Or, say we had a count property, and we wanted to increase it by 5.
        We could call storeUpdater like this:
            storeUpdater('count', current => current+5 )
        My storeUpdater function is able to do this because of the if statement I wrote.

        Now, instead of passing [store, updateStore] to the value prop of our provider...

        I'm passing [store, storeUpdater] instead!

        Head on over to Advanced/Grandchild.jsx to see this in action.
    */

    return (
        <MyStore.Provider value={[store, storeUpdater]}>
            <div className="example">
                <h1>Advanced</h1>
                <h2>Store updater function</h2>
                continent: {store.continent} <br />
                country: {store.country} <br />
                region: {store.region} <br />
                county: {store.county} <br />
                city: {store.city} <br />
                neighborhood: {store.neighborhood} <br />
                <Child />
            </div>
        </MyStore.Provider>
    )
}