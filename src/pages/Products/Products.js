import React, { Fragment } from "react";
import Card from '../../components/UI/card/Card'
import Product from "../../components/Product/Product";

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
        "available_quatity":3,
        "image": "https://www.iso.org/files/live/sites/isoorg/files/news/News_archive/2020/07/isofocus_141/4/isofocus-141-4_Luxury-spa.jpg/thumbnails/300x300"
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
        "available_quatity":7,
        "image": "https://www.iso.org/files/live/sites/isoorg/files/news/News_archive/2020/07/isofocus_141/4/isofocus-141-4_Luxury-spa.jpg/thumbnails/300x300"
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
        "available_quatity":20,
        "image": "https://www.iso.org/files/live/sites/isoorg/files/news/News_archive/2020/07/isofocus_141/4/isofocus-141-4_Luxury-spa.jpg/thumbnails/300x300"
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
        "available_quatity":15,
        "image": "https://www.iso.org/files/live/sites/isoorg/files/news/News_archive/2020/07/isofocus_141/4/isofocus-141-4_Luxury-spa.jpg/thumbnails/300x300"
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
        "available_quatity":7,
        "image": "https://www.iso.org/files/live/sites/isoorg/files/news/News_archive/2020/07/isofocus_141/4/isofocus-141-4_Luxury-spa.jpg/thumbnails/300x300"
    },
]

const Products = () => {




    return(
    <Fragment>
        <div className="row">
                {
                    products.map((oneProduct)=>{
                        return ( 
                            <Card>
                                    <Product key={oneProduct.id} {...oneProduct}/>
                            </Card> 
                    )})
                }
        </div>
    </Fragment>
)}

export default Products;