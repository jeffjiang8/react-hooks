// React Hooks:

// Hooks can only be used in function components

// Hooks must execute in the exact same order; if there is a hook exist in a conditional BEFORE other hooks, 
// it may or may not run; can not exist in loops, functions, ifs, or nested in anything, they have to be in the top level

// useState always returns an array of values

// setState with hooks overwrites the entire state object instead of merging values into the old state, 
// can be solved by adding ...prevState

// states can be broken down into several hooks separetely

// ie.

// format

import React, { useState } from "React";

function countInitial () {
	return 4
}

function themeInitial () {
	return "blue"
}

function App() {
	
	const [ count, setCount ] = useState ( () => countInitial() )
	//const [ __state__, __function to update the state__ ] = useState( __default state value__ )
	//if state is an object : const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    //two ways to set default values in useState:
    //useState(4) => the default value will run every time the component renders
	//useState( callback ) => the default value will only run the first time the component renders/initializer

	const [ theme, setTheme ] = useState ( () => themeInitial() )

	// if state in useState is an object
	const [ state, setState ] = useState( { count: 4, theme: "blue" })

    const count = state.count
    const theme = state.theme 

	function decrementCount () {
	
        setState( prevState=> {
                
        return { ...prevState, count: prevState.count - 1 }
	    // the spread operator is to keep the other properties in the state object
	    })
	
	}
	

	function decrementCount () {
	
	     setCount( prevCount => prevCount - 1 ) 
	     //use callbacks to set state

	     setTheme( 'green' )
	
	}

	function decrementCount () {
	
	     setCount( prevCount => prevCount + 1 )
	     setTheme( 'green' )
	}

	return (
	
	     <>
	
	          <button onClick = {decrementCount}> - </button>
	          <span> {count} </span>
	          <span> {theme} </span>
	          <button onClick = {incrementCount}> + </button>

	     </>
    )

}