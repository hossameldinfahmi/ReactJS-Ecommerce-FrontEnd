import React, { Fragment } from "react";
import Card from '../../components/UI/card/Card'

const products = [
    {
        "id":1,
        "category":{
            "id": 1,
            "name": "phones"
        },
        "name": "iphone",
        "description" : "phone",
        "price" : "1000.50",
        "available_quatity":3
    },
    {
        "id":2,
        "category":{
            "id": 1,
            "name": "phones"
        },
        "name": "samsung",
        "description" : "phone",
        "price" : "50.50",
        "available_quatity":7
    },
    {
        "id":3,
        "category":{
            "id": 2,
            "name": "clothes"
        },
        "name": "polo shirt",
        "description" : "shirt",
        "price" : "200.00",
        "available_quatity":20
    },
    {
        "id":3,
        "category":{
            "id": 2,
            "name": "clothes"
        },
        "name": "jabardine trouser",
        "description" : "trouser",
        "price" : "150.00",
        "available_quatity":15
    },
    {
        "id":4,
        "category":{
            "id": 1,
            "name": "phones"
        },
        "name": "samsung",
        "description" : "phone",
        "price" : "50.50",
        "available_quatity":7
    },
]

const Products = () => {




    return<Fragment>
        <div>
            <Card>
                
            </Card> 
        </div>
    </Fragment>
}

export default Products;