import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from './store/slice/productSlice'
import ProductCard from './components/ProductCard'
import Navabar from './components/Navabar'
const App = () => {
  const dispatch = useDispatch()
  return (
    <>
      {/* <button onClick={(e) => dispatch(fetchData())}>get data</button> */}
      <Navabar />
      <hr />
      <ProductCard />
    </>
  )
}

export default App
