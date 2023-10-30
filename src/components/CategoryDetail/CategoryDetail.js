import React from 'react'

const CategoryDetail = (props) => {
    const {name} = props.product
  return (
    <div>
        <h4>This is Category Detail</h4>
        <h6>Selected Product: {name}</h6>
    </div>
  )
}

export default CategoryDetail