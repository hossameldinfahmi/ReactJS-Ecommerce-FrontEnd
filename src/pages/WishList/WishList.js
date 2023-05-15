import React , {Fragment , useEffect} from 'react'
import WishListCard from '../../components/WishListCard/WishListCard';
import { useDispatch } from 'react-redux';
import { fetchWishlistItems } from '../../store/wishlist/wishlist-actions';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

function WishList() {
  console.log("Rendering WishList...");

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
  const isLoading = useSelector((state)=> state.wishlist.isLoading);

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
      <h1 className="ml-32 mt-24 mb-16 font-bold text-5xl">My Wishlist</h1>
      <div>
        {isLoading ? (
          <div
            style={{
              position: 'fixed',
              zIndex: 9999,
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <ClipLoader css={{ margin: '0 auto', border: '10px solid #f8c547', borderTopColor: '#28a745' }} loading={isLoading} size={75} aria-label="Loading Spinner" data-testid="loader" />
          </div>
        ) : (
          <div className="px-24">
            <div className="flex container-mx-auto">
              <div className="grid grid-cols-3 gap-4">
                {wishlistItems.map((item) => {
                  return <WishListCard key={item.id} item={item} />;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default WishList
