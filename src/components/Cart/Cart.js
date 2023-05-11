
const cartItems = [
    {
        id:1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&usqp=CAU',
        qty:4,
        name:'gstatic',
        price:5000
    },
    {
        id:1,
        image:'https://www.volusion.com/blog/content/images/2021/06/Digital-Mockup.png',
        qty:5,
        name:'volusion',
        price:5000
    },
    {
        id:1,
        image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80',
        qty:5,
        name:'unsplash',
        price:5000
    }, {
        id:1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFRMvUijW_w5wwVKj2q0pZsjCpLLHjPrwNSMOz3e2N8BtiY7-42c0GCXCR_p7IX9tdrA&usqp=CAU',
        qty:5,
        name:'Camera',
        price:5000
    }

]

const Cart = () => {


    return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-10" style={{width:"80%"}}> 
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr
                                key={item.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="w-32 p-4">
                                    <img src={item.image} alt={item.name} />
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <button
                                            className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                            type="button"
                                            disabled={item.qty === 1}
                                        >
                                            <span className="sr-only">Quantity button</span>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                        <span className="text-sm font-medium text-gray-900">
                                            {item.qty}
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
                                    ${item.price * item.qty}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        className="inline-flex items-center justify-center p-2 text-sm font-medium text-red-500 bg-white border border-red-500 rounded-full hover:bg-red-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-gray-800 dark:text-red-400 dark:border-red-600 dark:hover:bg-red-700 dark:hover:border-red-600 dark:focus:ring-red-700"
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
                        ))}
                    </tbody>
                </table>
            </div>
    )

}

export default Cart;