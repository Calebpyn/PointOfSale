import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Catalog.css'
import Pagination from './Pagination'

function Catalog() {

  const [query, setQuery] = useState('')

  const navigate = useNavigate()

  const handleChange = (e) => {
    setQuery(e.target.value)
  }
 
  return (
    <div className='main-cat'>

        <div className='new-serch-filters'>

            <input id='input-text' name='prodSearch' placeholder='Filter' onChange={handleChange}></input>
            <button type='button' onClick={() => navigate('/new-product')}>New Product</button>

        </div>
        
        <div className='main-cat-prods'>
            <Pagination query={query}/>
        </div>

    </div>
  )
}

export default Catalog