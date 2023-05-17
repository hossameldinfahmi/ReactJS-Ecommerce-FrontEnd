import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWishlistItem } from '../../store/wishlist/wishlist-actions';
import './WishListCard.css';

function WishListCard(props) {
  const imgUrl = process.env.REACT_APP_IMGE_API_URL;
  const item = props.item;

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  function handleRemoveItem(id) {
    setIsLoading(true);
    dispatch(deleteWishlistItem(id)).then(() => {
      setIsLoading(false);
    });
  }

  return (
    <>
      <div className="flex justify-between bg-gray-200 p-5 rounded-md shadow-md mb-8 mx-5">
        <div className="w-40  overflow-hidden mr-10">
          <div className="card-image-container">
            {isLoading ? (
              <div className="loading-indicator"></div>
            ) : (
              <img src={`${imgUrl}${item.image}`} alt={item.name} />
            )}
          </div>
        </div>
        <div className="item-center">
          <h2 className="text-2xl text-gray-700 font-bold">{item.name}</h2>
          <p className="mt-2 text-lg">
            {' '}
            Price : <span className="text-green-700 italic">{item.price} </span>{' '}
          </p>
          <button className="remove-button" onClick={() => handleRemoveItem(item.id)} disabled={isLoading}>
            {isLoading ? 'Removing...' : 'Remove'}
          </button>
          <button className='add-button'>
              Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default WishListCard;