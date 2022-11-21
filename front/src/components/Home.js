import React, { useEffect, useState } from 'react'
import './css/Home.css'
import Clock from 'react-live-clock'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    const [order, setOrder] = useState([])

    useEffect(() => {
        loadOrders()
    }, [])

    const loadOrders = async () => {

        try {

            const fRes = await fetch('http://localhost:4000/pen-orders')
            const data = await fRes.json()

            setOrder(data)

            console.log(data)

        } catch (err) {
            console.log(err)
        }

    }

    const getTime = (str) => {
        var dateArray = str.split('T')
        return dateArray[1]
    }

    const currentDate = new Date()
    const date = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`

    return (
        <div className='home'>

            <div className='orders'>

                <button type='button' id='new-order'>New Order</button>

                <div className='last-five'>
                    {order.map((order) => (

                        <div className='order' key={order.id}>

                            <div className='main-info'>
                                <p>Table: {order.order_table}</p>
                                <p>Time: {getTime(order.order_date)}</p>
                                <p>Name: {order.order_client}</p>
                            </div>

                            <div className='order-content'>
                                <p>Order: {order.order_cont}</p>
                                <p>Comments: {order.order_comments}</p>
                            </div>

                            <div className='bottom-content'>
                                <p>Total: {order.order_total}</p>
                                <button type='button'>Done</button>
                            </div>

                        </div>

                    ))

                    }
                </div>

            </div>

            <div className='box'>
                <div className='sales-stock'>
                    <button type='button' id='sales-rep'>Sales Report</button>
                    <button type='button' id='stock'>Stock</button>
                </div>

                <div className='inner-bottom-box'>

                    <div className='cat-box'>
                        <div className='cat'>
                            <h1>cat</h1>
                        </div>

                        <button type='button' id='cat-view' onClick={() => navigate('/catalog')}>Catalog</button>
                    </div>

                    <div className='date-sale-reg'>

                        <div className='date'>
                            <h1>{date}</h1>
                            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
                        </div>

                        <div className='sales-reg'>
                            <p>Sales Register</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home