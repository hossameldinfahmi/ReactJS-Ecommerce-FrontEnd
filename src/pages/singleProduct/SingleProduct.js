import React ,{useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import { addItemToWishlist } from "../../store/wishlist/wishlist-actions";
import { addItemToCart } from "../../store/cart/cart-actions";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import './SingleProduct.css'

const SingleProduct = () =>{

    const dispatch = useDispatch();


    let [loading, setLoading] = useState(true);
    const [oneProduct, setOneProduct] = useState();
    const [isAnimating, setIsAnimating] = useState(false);

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

    console.log(oneProduct)

    const addToCart = () => {
        dispatch(addItemToCart(product))
    }

    const product = {id}

    const handleClick = () => {
        dispatch(addItemToWishlist(product))
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 3000);
      };

return (
    <>
        {
            loading ? (
                <div className="sppener">
                    <ClipLoader color={"#000000"} loading={loading} size={75} 
                    aria-label="Loading Spinner" data-testid="loader"/>
                </div>
            ):(
                <>
                    <div className="box">

                        <div className="images">

                            <div className="img-holder">
                                <img src={`${imageUrl}${oneProduct.image}`} alt="product"></img>
                            </div>

                        </div>

                        <div className="basic-info">

                            <div className="nameIcon">
                                <h1 className="productName">{oneProduct.name}</h1>
                                
                                <h4 className="price">${oneProduct.price}</h4>

                                <div className="icon">
                                    <div className="button">
                                        <button onClick={handleClick}>
                                            {
                                            isAnimating ? 
                                            (<FontAwesomeIcon icon={faHeart} beatFade size="2xl" style={{color: "rgb(59, 59, 61)",}} />):
                                            (<FontAwesomeIcon icon={faHeart} size="2xl" style={{color: "rgb(59, 59, 61)",}} />)
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <br/>


                            <div className="buyButton-wrapper">
                                <button 
                                    disabled={!oneProduct.available_quantity}
                                    className="buyButton"
                                    
                                    onClick={addToCart}>
                                    Buy Now
                                </button>
                            </div>


                            <div className="pDescription">
                                <h3>Description</h3>

                                <p>{oneProduct.description}</p>
                                {/* <p>Lorem   nihil  consectetur adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.</p> */}

                            </div>

                        </div>
                        <div className="description">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 relative"><div class="flex flex-col p-5 rounded-2xl bg-red-50 dark:bg-opacity-90"><div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M2 8H8" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M2 11H6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M2 14H4" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </div><div class="mt-2.5"><p class="font-semibold text-slate-900">Free shipping</p><p class="text-slate-500 mt-0.5 text-sm">On orders over $50.00</p></div></div><div class="flex flex-col p-5 rounded-2xl bg-sky-50 dark:bg-opacity-90"><div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M13.7 4.44995L17.6799 6.74994L21.6199 4.45996" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M17.6799 10.82V6.73999" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.74 2.21L14.34 3.53996C13.8 3.83996 13.35 4.59995 13.35 5.21995V7.75999C13.35 8.37999 13.79 9.13998 14.34 9.43998L16.74 10.77C17.25 11.06 18.09 11.06 18.61 10.77L21.01 9.43998C21.55 9.13998 22 8.37999 22 7.75999V5.21995C22 4.59995 21.56 3.83996 21.01 3.53996L18.61 2.21C18.1 1.93 17.26 1.93 16.74 2.21Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M2.34998 15.45L6.31998 17.7499L10.27 15.46" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M6.31995 21.82V17.74" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </div><div class="mt-2.5"><p class="font-semibold text-slate-900">Very easy to return</p><p class="text-slate-500 mt-0.5 text-sm">Just phone number.</p></div></div><div class="flex flex-col p-5 rounded-2xl bg-green-50 dark:bg-opacity-90"><div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </div><div class="mt-2.5"><p class="font-semibold text-slate-900">Nationwide Delivery</p><p class="text-slate-500 mt-0.5 text-sm">Fast delivery nationwide.</p></div></div><div class="flex flex-col p-5 rounded-2xl bg-amber-50 dark:bg-opacity-90"><div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 7.5V16.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M17 3V7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M22 2L17 7" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                </div><div class="mt-2.5"><p class="font-semibold text-slate-900">Refunds policy</p><p class="text-slate-500 mt-0.5 text-sm">60 days return for any reason</p></div></div>
                            </div>

                            <ul className="social">
                                <li><a href="https://github.com/hossameldinfahmi"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="https://github.com/Moustafa25MM"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="https://github.com/AbdelrahmanHashem468"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="https://github.com/Islamsulaiman"><i className="fa-brands fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        }    
    </>
)}


export default SingleProduct