import Advanced from "./examples/Advanced/Advanced"
import Beginner from "./examples/Beginner/Beginner"
import Intermediate from "./examples/Intermediate/Intermediate"
import SuperSimple from "./examples/SuperSimple/SuperSimple"

/* 
    React context
    `````````````
    React context allows us to make data accessible all throughout our application.
    We do this using special components called "providers".
    Any child of such a provider will have access to whatever data we pass into that provider's "value" prop.
    The real magic happens when we combine React context with the useState hook, as you will see.
    By doing this, we can update state in other components without having to drill props!

    In ever example, I have created a "Child" and "Grandchild" component to demonstrate
    that I was able to access some data without having to pass it down via props.

    Start with examples/SuperSimple/SuperSimple.jsx
*/

export default function App() {

  return (
    <div className="App">
      <div className="example">
        Instructions are in the form of javascript comments. Start in App.jsx.
      </div>
      <SuperSimple />
      <Beginner />
      <Intermediate />
      <Advanced />
    </div>
  )
}
