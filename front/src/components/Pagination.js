import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/Pagination.css'

function Pagination(query) {

    const navigate = useNavigate()

    const [prods, setProds] = useState([])
    const [loading, setLoading] = useState(false)
    const [prodsPerPage, setProdsPerPage] = useState(3)
    const [pageNumber, setPageNumber] = useState(1)


    useEffect(() => {
        loadProds()
    }, [])

    useEffect(() => {
        setPageNumber(1)
    }, [query])

    const handlePageNext = () => {

        if (pageNumber === maxPages) {
            setPageNumber(1)
        } else {
            setPageNumber(pageNumber + 1)
        }

    }

    const handlePagePrev = () => {

        if (pageNumber === 1) {
            setPageNumber(maxPages)
        } else {
            setPageNumber(pageNumber - 1)
        }

    }

    //Page Logic
    const theProds = prods.filter((prod) => prod.prod_name.toLowerCase().includes(query.query.toLowerCase()))
    const indexLastProd = pageNumber * prodsPerPage
    const indexFirstProd = indexLastProd - prodsPerPage
    const currentProds = theProds.slice(indexFirstProd, indexLastProd)
    const maxPages = Math.ceil(theProds.length / prodsPerPage)

    const loadProds = async () => {

        try {

            setLoading(true)

            const fRes = await fetch('http://localhost:4000/cat-items')

            const data = await fRes.json()

            setProds(data)

            setLoading(false)

        } catch (err) {
            console.log(err)
        }


    }

    return (
        <div className='main-scroll-catalog'>
            <div className='maped-items'>
                {currentProds.map(prod => (
                    <div className='cat-item' key={prod.id}>
                        <div className='upper-box'>
                            <p id='prod-name'>{prod.prod_name}</p>
                            <p>${prod.prod_price}</p>
                        </div>
                        <div className='middle-box'>
                            <p id='desc'>{prod.prod_desc}</p>
                            <div className='cat-subcat'>
                                <div id='cat'>{prod.prod_category}</div>
                                <div id='sub-cat'>{prod.prod_subcat}</div>
                            </div>
                        </div>
                        <div className='bottom-box'>
                            <p id='comments'>{prod.prod_comments}</p>
                            <button type='button' onClick={() => navigate(`/new-product/${prod.id}`)}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='next-prev'>
                <button type='button' onClick={() => handlePagePrev()}>Previous</button>
                <p className='current-page'>{pageNumber}/{maxPages}</p>
                <button type='button' onClick={() => handlePageNext()}>Next</button>
            </div>

        </div>
    )
}
export default Pagination