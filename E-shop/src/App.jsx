import { useState } from 'react'

import './App.css'
import ProductList from './features/productList/productList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ProductList></ProductList>
        
       </div>
    </>
  )
}

export default App
