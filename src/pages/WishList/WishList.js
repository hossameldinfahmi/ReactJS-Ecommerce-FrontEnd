import React from 'react'
import WishListCard from '../../components/WishListCard/WishListCard';

function WishList() {

    const data = [{image:"https://images-ext-2.discordapp.net/external/tz2mXbmkJKd3LTYCwWvSrZ3nf8wnxgkNcaR2iqtNWmE/%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60/https/images.unsplash.com/photo-1600185365483-26d7a4cc7519?width=625&height=500" , price: 449 , name:"shoes" }];

  return (
    <>
    <h1 className='ml-32 mt-24 mb-16 font-bold text-5xl' >My Wishlist</h1>

    <div className='px-24'>
        <div className="flex container-mx-auto">
            <div className='grid grid-cols-3 gap-4'>
                <WishListCard />
                <WishListCard />
                <WishListCard />
            </div>
            
        </div>

    </div>
    </>
  )
}

export default WishList
