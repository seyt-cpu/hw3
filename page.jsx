// Components are functions that return some JSX

// JSX is a javascript syntax in React to create our HTML elements

"use client";

import { useState } from "react" // we use this to add state to our components
// state lets us keep track of changing data and show it in the component

function HomePage(){

    // create some state keeping track of the changing count
    const [count, setCount] = useState(0)
    

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>{
                // write some javascript for this function to call
                setCount(count + 1)
            }}> Add One </button> 
        </div>
    )
}
export default HomePage