import { MyContext } from './SuperSimple'
import { useContext } from 'react'

/*
    Here I imported two things.
    1. The context from the grandparent. We were able to import it because we exported it from there!
    2. The useContext hook from react.

    When we call useContext, we pass in the context we want to use.
    This returns whatever we passed into the value prop to our provider.

    When you feel you understand the super simple example, it's time to move on to
    the beginner example! Head over to Beginner/Beginner.jsx
*/

export default function Grandchild() {
    return (
        <span>
            My name is {useContext(MyContext)}
        </span>
    )
}