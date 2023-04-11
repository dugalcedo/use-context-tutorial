import Child from './Child'
import { createContext, useState } from 'react'

/*
    In this example, the data I wish to provide to other components is an object.
    I would like to update only certain properties on this object at a time.

    I'm calling this context a "store" because that is a common word used to describe
    objects with multiple pieces of data we might want to change individually.

    This example isn't actually much different than the beinner one. The difference is in
    the grandchild. Head over to Intermediate/Grandchild.jsx to see what's going on.
*/

export const MyStore = createContext()

let initialStore = {
    teacher: 'Doug',
    student: 'Chris'
}

export default function Intermediate() {

    const [store, updateStore] = useState(initialStore)

    return (
        <MyStore.Provider value={[store, updateStore]}>
            <div className="example">
                <h1>Intermediate</h1>
                <h2>Store</h2>
                The teacher is {store.teacher}.<br />
                The student is {store.student}.<br />
                <Child />
            </div>
        </MyStore.Provider>
    )
}