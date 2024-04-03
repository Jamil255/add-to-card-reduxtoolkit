import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './store/slice/productSlice'
import ProductCard from './components/ProductCard'
import Navabar from './components/Navabar'
const App = () => {
  const { loading, products } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <>
      <Navabar />
      <hr />
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div className="d-flex gap-4 flex-wrap mx-3">
          {products?.map((prod) => (
            <div key={prod.id}>
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default App
