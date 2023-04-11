import { useContext } from 'react'
import { MyStore } from './Intermediate'

export default function Grandchild() {

    const [store, updateStore] = useContext(MyStore)

    function updateTeacher() {
        const newTeacher = document.querySelector('#teacher').value
        updateStore({...store, teacher: newTeacher})
    }

    function updateStudent() {
        const newStudent = document.querySelector('#student').value
        updateStore({...store, student: newStudent})
    }

    /*
        Here, I have two separate functions for updating the store (context).
        One for changing the "teacher" property, and one for "student".

        I'm using the spread operator (...) to say I want the new store to be
        identical to the previous one, EXCEPT one property which I want to change.

        If you are confused about the (...), google "javascript spread operator".

        This is cool, but wouldn't it be better if we only needed one function
        to update any property on our store? That's what we're going to do in the
        next example. Go to Advanced/Advanced.jsx when you're ready.
    */

    return (    
        <>
            <input type="text" id="teacher" defaultValue={store.teacher}/>
            <button onClick={updateTeacher}>
                Update teacher
            </button> <br />
            <input type="text" id="student" defaultValue={store.student}/>
            <button onClick={updateStudent}>
                Update student
            </button>
        </>
    )
}