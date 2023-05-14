import { useDispatch } from "react-redux";
import { deleteCartItem, updateQuantityItem } from "../../store/cart/cart-actions";


const CartItems = (props) => {
    const imgUrl = process.env.REACT_APP_IMGE_API_URL;
    const item = props.item

    const dispatch = useDispatch();

    function  handleRemoveItem(id){
        dispatch(deleteCartItem(id));
    }

    function  updateQuantity(cartiId,productId,action){
        dispatch(updateQuantityItem(cartiId,productId,action));
    }

    return (
                            <tr
                                key={item.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="w-32 p-4">
                                    <img src={`${imgUrl}${item.product.image}`} alt={item.product.name} />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {item.product.name}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <button
                                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            type="button"
                                            disabled={item.quantity === 1}
                                        >
                                            <span className="sr-only">Quantity button</span>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={()=>updateQuantity(item.id,item.product.id,'DECREASE')}
                                            >
                                            
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                        <span className="text-sm font-medium text-gray-900">
                                            {item.quantity}
                                        </span>
                                        <button
                                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            type="button"
                                        >
                                            <span className="sr-only">Quantity button</span>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={()=>updateQuantity(item.id,item.product.id,'INCREASE')}
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    ${item.product.price * item.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        className="inline-flex items-center justify-center p-2 text-sm font-medium text-red-500 bg-white border border-red-500 rounded-full hover:bg-red-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-gray-800 dark:text-red-400 dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-600 dark:focus:ring-red-700"
                                        onClick={()=>handleRemoveItem(item.id)}
                                    >
                                        <span className="sr-only">Remove item</span>
                                        <svg
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 11-1.4 1.4L10 8.41l-2.3 2.3a1 1 0 01-1.4-1.42l2.3-2.29-2.3-2.3a1 1 0 011.42-1.4l2.3 2.3 2.3-2.3a1 1 0 011.4 1.42l-2.3 2.29 2.3 2.3z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
    )

}

export default CartItems;