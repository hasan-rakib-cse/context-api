import React from 'react'
import { CategoryContext } from '../../App'
import { useContext } from 'react'

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext)

  return (
    <div>
        <h1>This is Header: {category}</h1>
        
        <button onClick={() => setCategory('Laptop')}>Laptop</button>
        <button onClick={() => setCategory('Mobile')}>Mobile</button>
        <button onClick={() => setCategory('Camera')}>camera</button>
    </div>
  )
}

export default Header