import React, { useState } from "react" 
// useState() is what the React team calls a hook. It is used to store data
// about the component. You can translate its usage into English with the following statement.

export const PropsAndState = ({ yourName }) => {
    let [counterClicks, setCounterClicks] = useState(0)
    //counterClicks is the current state of this module, 
    // setCounterClick is the function called to update state

    const handleClick = () => {
        //make a copy of state, modify it, then setState to the copy
        const newCountClicks = ++ counterClicks
        setCounterClicks(newCountClicks)
    }

    return ( 
        <> 
            <h3> Welcome, { yourName } </h3>
            <p> { counterClicks } </p>
            <button onClick={(handleClick)}>Counter</button>
        </>
    )
}


