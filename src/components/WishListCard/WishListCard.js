import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteWishlistItem } from '../../store/wishlist/wishlist-actions';

function WishListCard(props) {

  const imgUrl = process.env.REACT_APP_IMGE_API_URL;
  const item = props.item;

  const dispatch = useDispatch();

  function handleRemoveItem(id) {
    dispatch(deleteWishlistItem(id));
  }



  return (
    <>
        <div className='flex justify-between bg-gray-200 p-5 rounded-md shadow-md mb-8 mx-5'>
            <div className='w-40  overflow-hidden mr-10'>
                <img src={`${imgUrl}${item.image}`} alt={item.name} />
            </div>
            <div className='item-center'>
                <h2 className='text-2xl text-gray-700 font-bold'>{item.name}</h2>
                <p className='mt-2 text-lg'> Price : <span className='text-green-700 italic' >{ item.price} </span>  </p>
                <button className='py-2 px-4 bg-red-600 text-white mt-4' onClick={()=> handleRemoveItem(item.id)}> Remove </button>
            </div> 
        </div>
        
    </>
  )
}

export default WishListCard
