import React, { useState } from 'react'
import { Fa500Px, FaCart } from "react-icons/fa";

const Cart = () => {
    const[count,setCount] = useState(0);
    const increment = () =>{
      setCount((count) => count + 1);
    };
  return (
    <div onChange={increment}>
      <p className='text-white cursor-pointer'>{count}</p>
      <Fa500Px className='text-white'/>
    </div>
  )
}

export default Cart