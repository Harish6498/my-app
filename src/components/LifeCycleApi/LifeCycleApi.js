import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function LifeCycleApi() {
    const [products, setProducts] = useState([])
    async function getProducts() {
        const url = await axios.get("https://dummyjson.com/products")
        const responce = url.data
        console.log(responce.products)
        setProducts(responce.products)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (

        <>
            <h2>Life Cycle Api</h2>
            <div class="container">
                <div class="row">
                    {
                        products.map((copyOfProducts) => {


                            return (
                                <div class="col-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{copyOfProducts.title}</h5>
                                            <p class="card-subtitle mb-2 text-body-secondary">{copyOfProducts.description}</p>

                                        </div>
                                    </div>
                                </div>

                            )
                        })

                    }
                    {/* <div class="col-2">
                <div class="card">
                    <div class="card-body"></div>
                </div>
            </div> */}
                </div>
            </div>
        </>
    )
}
