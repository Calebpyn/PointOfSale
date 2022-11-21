import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './css/Newprodform.css'

function Newprodform() {

    const params = useParams()

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const [editing, setEditing] = useState(false)

    const [prod, setProd] = useState({
        prod_name: '',
        prod_price: '',
        prod_desc: '',
        prod_category: '',
        prod_subcat: '',
        prod_comments: ''
    })

    const handleChange = e => {
        setProd({ ...prod, [e.target.name]: e.target.value })
    }

    const loadProdForEditing = async (id) => {

        try {

            const fRes = await fetch(`http://localhost:4000/get-prod/${id}`)

            const data = await fRes.json()

            console.log(data)

            setProd({
                prod_name: data.prod_name,
                prod_price: data.prod_price,
                prod_desc: data.prod_desc,
                prod_category: data.prod_category,
                prod_subcat: data.prod_subcat,
                prod_comments: data.prod_comments
            })

        } catch (err) {
            console.log(err)
        }

    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        setLoading(true)

        if (editing) {
            
            try {

                prod.prod_price = (prod.prod_price)

                await fetch(`http://localhost:4000/update-porduct/${params.id}`, {
                    method: "PUT",
                    body: JSON.stringify(prod),
                    headers: { 'Content-Type': 'application/json' }
                })

            } catch (err) {
                console.log(err)
            }

        } else {

            try {

                prod.prod_price = (prod.prod_price)

                await fetch('http://localhost:4000/new-product', {
                    method: "POST",
                    body: JSON.stringify(prod),
                    headers: { 'Content-Type': 'application/json' }
                })

            } catch (err) {
                console.log(err)
            }

        }

        setLoading(false)
        setEditing(false)
        navigate('/catalog')

    }

    useEffect(() => {

        if(params.id){
            setEditing(true)
            loadProdForEditing(params.id)
        }

    }, [])

    return (
        <div className='new-prod-form'>

            <div className='box'>

                <form onSubmit={handleSubmit}>

                    <div className='name-price'>

                        <input id='prod-name-form'
                        name='prod_name'
                        placeholder='Product Name'
                        onChange={handleChange}
                        value={prod.prod_name}
                        required></input>

                        <div className='price'>
                            <label htmlFor='prod-price'>$</label>
                            <input id='price'
                            name='prod_price'
                            type='number' min='0' step='.1'
                            onChange={handleChange}
                            value={prod.prod_price}
                            required></input>
                        </div>

                    </div>

                    <textarea name='prod_desc'
                    placeholder='Description'
                    onChange={handleChange}
                    value={prod.prod_desc}
                    required></textarea>

                    <div className='cat-subcat'>
                        <input name='prod_category'
                        placeholder='Category'
                        onChange={handleChange}
                        value={prod.prod_category}
                        required></input>
                        <input name='prod_subcat'
                        placeholder='Sub Category'
                        onChange={handleChange}
                        value={prod.prod_subcat}
                        required></input>
                    </div>

                    <textarea id='prod_comments'
                    name='prod_comments'
                    placeholder='Comments'
                    value={prod.prod_comments}
                    onChange={handleChange}></textarea>

                    <input type='submit' id='submit-new-prod' value={loading ? 'Loading' : 'Save'} onChange={handleChange}></input>

                </form>

                <a href='/catalog' id='cancel-new-order-form'>Cancel</a>


            </div>

        </div>
    )
}

export default Newprodform