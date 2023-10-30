import React from 'react'
import CategoryDetail from '../CategoryDetail/CategoryDetail'
import { useContext } from 'react'
import { CategoryContext } from '../../App'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const allProducts = [
    {name: 'Lenovo', category: 'laptop'},
    {name: 'Asus', category: 'laptop'},
    {name: 'Dell', category: 'laptop'},
    {name: 'Samsung', category: 'mobile'},
    {name: 'Iphone', category: 'mobile'},
    {name: 'Huawei', category: 'mobile'},
    {name: 'Sony', category: 'camera'},
    {name: 'Fuji', category: 'camera'},
    {name: 'Canon', category: 'camera'}
];

const Categories = () => {
    const [category] = useContext(CategoryContext)

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const matchedProduct = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
      setProducts(matchedProduct)
    }, [category])   

  return (
    <div>
        <h2>Select your Category: {category}</h2>
        {products.map(pd => <CategoryDetail key={uuidv4()} product={pd} />)}
        
    </div>
  )
}

export default Categories