import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import ProductsList from './ProductsList'
import {useSelector} from "react-redux"

function App() {

  const data = useSelector(state => state)

  return (
        <BrowserRouter>
          <nav>
            <span>{data.storage.length}</span>
          </nav>
          <Routes>
            <Route path="/" element={<ProductsList/>}/>
          </Routes>
        </BrowserRouter>
  )
}

export default App
