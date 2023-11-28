import React, { useMemo, useState } from 'react'

function Calculator() {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
const  m10 = useMemo(() => add(count), [count])

function add(count) {
    for (let index = 0; index < 200000; index++) {
      
        
    }
    return count *18/100
}

function increase() {
    setCount(count+1);   
}
function handletoggle() {
    setToggle(!toggle);
    
}

  return (
    <div>
        <h2>eded:- {count}</h2>
        <button onClick={increase}>+</button>
        <button onClick={handletoggle}>{toggle ? "X" : "="  }</button>
        <button>{m10}</button>
        
        </div>
  )
}

export default Calculator