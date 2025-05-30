import React, { useContext } from 'react'
import { NumberContext } from './App'

const Calculate = () => {

    const {count,dispatch} = useContext(NumberContext)
  return (
    <div>
        <div>Sayı {count}</div>

      <button onClick={() => dispatch('increment')}>Artır</button>
      <button onClick={() => dispatch('decrement')}>Azalt</button>
      <button onClick={() => dispatch('reset')}>Sıfırla</button>
    </div>
  )
}

export default Calculate