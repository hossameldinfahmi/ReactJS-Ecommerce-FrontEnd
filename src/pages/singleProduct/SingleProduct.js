import React ,{useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import classes from "./SingleProduct.module.css"

const SingleProduct = () =>{

    let [loading, setLoading] = useState(true);
    const [oneProduct, setOneProduct] = useState();
    const { id } = useParams();
    
    const imageUrl = process.env.REACT_APP_IMGE_API_URL
    const fetchUrl = `${process.env.REACT_APP_BASE_API_URL}/products/${id}`

    const fetchData = useCallback(async()=>{

        const res = await fetch(fetchUrl);
        const resJson = await res.json();

        if(resJson){
            setOneProduct(resJson)
            setLoading(false)
        }else{
            setLoading(true)
        }
    },[fetchUrl])

    useEffect(()=>{
        fetchData();
    },[fetchData])

return (
    <>
        {
            loading ? (
                <ClipLoader color={"#000000"} loading={loading} size={75} 
                aria-label="Loading Spinner" data-testid="loader"/>
            ):(
                <>
                    {/* <div className={classes.container}>
                            <div className={classes.imageIcon}>

                                <div className={classes.icon}>
                                    <div className={classes.quantity}>{available_quantity}</div>

                                        <button onClick={handleClick}>
                                            {
                                            isAnimating ? 
                                            (<FontAwesomeIcon icon={faHeart} beatFade size="lg" style={{color: "rgb(59, 59, 61)",}} />):
                                            (<FontAwesomeIcon icon={faHeart} size="lg" style={{color: "rgb(59, 59, 61)",}} />)
                                            }
                                        </button>
                                </div>

                                <div> 
                                    <img src={`${imageUrl}${oneProduct.image}`} alt="product"></img>
                                </div>

                            </div>

                            <h3>{oneProduct.name}</h3>
                            <h3>{oneProduct.description}</h3>
                            <h3>{oneProduct.category.name}</h3>
                            <h3>{parseFloat(oneProduct.price)}</h3>
                    </div> */}


                
                </>
            )
        }    
    </>
)
}

export default SingleProduct