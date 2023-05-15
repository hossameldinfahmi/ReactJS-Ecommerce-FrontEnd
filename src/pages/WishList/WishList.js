import React , {Fragment , useEffect} from 'react'
import WishListCard from '../../components/WishListCard/WishListCard';
import { useDispatch } from 'react-redux';
import { fetchWishlistItems } from '../../store/wishlist/wishlist-actions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function WishList() {
  console.log("Rendering WishList...");

  const wishlistItems = useSelector((state) => state.wishlist.items);
  console.log(wishlistItems);
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching wishlist items from Wishlist...");
    if(!isLoggedIn) {
      navigate("/login");
    }
    else{
      dispatch(fetchWishlistItems());
      console.log("Dispatching fetchWishlistItems..."); 

    }
  },[dispatch,isLoggedIn,navigate])

  return (
    <Fragment>
    <h1 className='ml-32 mt-24 mb-16 font-bold text-5xl' >My Wishlist</h1>

    <div className='px-24'>
        <div className="flex container-mx-auto">
            <div className='grid grid-cols-3 gap-4'>
                {wishlistItems.map((item)=> {
                  return (<WishListCard key={item.id} item={item} />)
                })}
            </div>
            
        </div>

    </div>
    </Fragment>
  )
}

export default WishList
