// There can be multiple useEffects in a component and the fire off in order
// Tells react to do something after rendering 
// placing useEffect inside the component let user directly access any state variables or props right from the effect
// userEffect runs after every render by default, after the first render and after every update
// React will guarantees the DOM has been updated by the time it runs the effects
// useEffect handles updates by default, It cleans up the previous effects before applying the next effects

import React, { useState, useEffect } from "React";

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // Only re-run the effect if count changes
    // telling react to skip applying effect if count hasn't changed
    // if all the values in the array [ count ] are the same, ie ( 5 === 5 ), react will skip the effect
    // have to make sure all values from the component scope (such as props and state) that change over 
    // time and that are used by the effect
    // if running an effect and clean it up only once (on mount and unmount), pass an empty array [],
    // tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run
    // and the props and state inside the effect will always have their initial values

    // Equivalent to

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = `You clicked ${this.state.count} times`;
        }
    }

    // the useEffect function is different on every render
    // let users read the count value inside the effect without worrying about it getting stale
    // effects scheduled with useEffect don't block the browser from updating the screen
}

function FriendStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        
        // Specify how to clean up after this effect:
        return function cleanup() {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    }, 
        [ props.friend.id ]
        // clean up effect, only if props.friend.id changes, effects will reapply
    );
    

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}