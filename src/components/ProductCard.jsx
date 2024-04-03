import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../store/slice/productSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img
          src={product.image}
          width={100}
          height={100}
          className="card-img-top"
        />
        <div
          className="card-body"
          style={{ height: '200px', overflow: 'hidden' }}
        >
          <h5 className="card-title">{product.title.slice(0, 40)}...</h5>
          <p className="card-text">{product.description.slice(0, 150)}..</p>
        </div>
        <button type="button" className="btn btn-danger">
          Add To Card
        </button>
      </div>
    </>
  )
}

export default ProductCard
