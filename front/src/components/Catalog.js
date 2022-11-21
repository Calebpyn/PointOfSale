import React, { useEffect, useState } from 'react'
import './css/Catalog.css'

function Catalog() {

    useEffect(() => {
        loadCatitems()
    },[])

    const [catitem, setCatitem] = useState([])

    const loadCatitems = async () => {

        try {

            const fRes = await fetch('http://localhost:4000/cat-prods')

            const data = await fRes.json()

            setCatitem(data)

        } catch (err) {
            console.log(err)
        }

    }

  return (
    <div className='main-cat'>

        <div className='new-serch-filters'>

            <form>
                <input id='input-text' name='prodSearch' placeholder='Search'></input>
                <input id='input-submit' type='submit' value='Search'></input>
            </form>

            <button type='button'>New Product</button>

        </div>
        
        <div className='main-cat-prods'>
            <h1>
                the prods
            </h1>
        </div>

    </div>
  )
}

export default Catalog