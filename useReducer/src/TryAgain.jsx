// import { useReducer } from "react"

import React, { useReducer } from 'react'

// const initialValue = 0;

// const reducer = (state,action) => {
//   switch(action){
//     case "increment":
//       return state +1;

//       case "decrement":
//       return state -1

//       case "reset":
//         return initialValue

//       default:
//   }

// }

// const TryAgain = () => {

//  const[count,dispatch] = useReducer(reducer,initialValue)
//   return (
//     <div>
//         <div>Sayı {count}</div>

//       <button onClick={() => dispatch('increment')}>Artır</button>
//       <button onClick={() => dispatch('decrement')}>Azalt</button>
//       <button onClick={() => dispatch('reset')}>Sıfırla</button>

//     </div>
//   )
// }

// export default TryAgain


const initalValue = 0;

const reducer = (state,action) => {
  switch(action){
    case "increment":
      return state -1;

      case "decrement":
        return state +1;

        case "resert":
          return initalValue;

          default: 
  }
}

const TryAgain = () => {

 const[count,dispatch] = useReducer(reducer,initalValue);
  return (
    <div>
      <div>Say {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('resert')}>Resert</button>
    </div>
  )
}

export default TryAgain