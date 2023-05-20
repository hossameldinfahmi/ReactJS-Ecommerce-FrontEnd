import React, { Fragment, useEffect } from "react";
import WishListCard from "../../components/WishListCard/WishListCard";
import { useDispatch } from "react-redux";
import { fetchWishlistItems } from "../../store/wishlist/wishlist-actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { wishlistActions } from "../../store/wishlist/wishlist-slice";

function WishList() {
  console.log("Rendering WishList...");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isLoading = useSelector((state) => state.wishlist.isLoading);
  const next = useSelector((state) => state.wishlist.next);
  const previous = useSelector((state) => state.wishlist.previous);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlistUrl = `${process.env.REACT_APP_BASE_API_URL}/wishlist/user`;
  useEffect(() => {
    const sessionUrl = sessionStorage.getItem("urlWishlistValue") || "";

    console.log("Fetching wishlist items from Wishlist...");
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (!sessionUrl) {
        dispatch(fetchWishlistItems(wishlistUrl));
        sessionStorage.setItem("urlWishlistValue", wishlistUrl);
      } else {
        dispatch(fetchWishlistItems(sessionUrl));
      }
    }
  }, [dispatch, isLoggedIn, navigate, wishlistUrl]);

  const nextPage = () => {
    sessionStorage.setItem("urlWishlistValue", next);
    dispatch(wishlistActions.getWishlist({ isLoading: true }));
    dispatch(fetchWishlistItems(next));
  };
  const prevPage = () => {
    sessionStorage.setItem("urlWishlistValue", previous);
    dispatch(wishlistActions.getWishlist({ isLoading: true }));
    dispatch(fetchWishlistItems(previous));
  };

  return (
    <Fragment>
      {/* {!wishlistItems.length && <EmptyList list='Wishlist' /> } */}
      {/* {wishlistItems.length &&  */}
      <>
        <h1 className="ml-32 mt-24 mb-16 font-bold text-5xl">My Wishlist</h1>
        <div>
          {isLoading ? (
            <div
              style={{
                position: "fixed",
                zIndex: 9999,
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <ClipLoader
                css={{
                  margin: "0 auto",
                  border: "10px solid #f8c547",
                  borderTopColor: "#28a745",
                }}
                loading={isLoading}
                size={75}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <div className="lg:px-24">
              <div className="flex container-mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {wishlistItems.map((item) => {
                    return <WishListCard key={item.id} item={item} />;
                  })}
                </div>
              </div>
            </div>
          )}
          <div>
            <div class="flex flex-col items-center">
              <div class="inline-flex mt-2 xs:mt-0">
                <button
                  disabled={!previous}
                  onClick={prevPage}
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Prev
                </button>
                <button
                  disabled={!next}
                  onClick={nextPage}
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* } */}
    </Fragment>
  );
}

export default WishList;
