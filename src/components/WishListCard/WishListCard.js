import React from 'react'

function WishListCard() {
  return (
    <>
        <div className='flex justify-between bg-gray-200 p-5 rounded-md shadow-md mb-8 mx-5'>
            <div className='w-40  overflow-hidden mr-10'>
                <img src='https://images-ext-2.discordapp.net/external/tz2mXbmkJKd3LTYCwWvSrZ3nf8wnxgkNcaR2iqtNWmE/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60/https/images.unsplash.com/photo-1600185365483-26d7a4cc7519?width=625&height=500' />
            </div>
            <div className='item-center'>
                <h2 className='text-2xl text-gray-700 font-bold'>product Title</h2>
                <p className='mt-2 text-lg'> Price : <span className='text-green-700 italic' >449$ </span>  </p>
                <button className='py-2 px-4 bg-red-600 text-white mt-4'> Remove </button>
            </div> 
        </div>
        
    </>
  )
}

export default WishListCard
