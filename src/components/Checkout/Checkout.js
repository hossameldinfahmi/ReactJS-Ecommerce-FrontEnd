
function CheckOut(props){
    return (
        <div className=" container m-10"  style={{ width: "40%" }}>
                        <h1 className="font-bold pb-3">Order Summary</h1>
                        <div class="flex  justify-between  pt-4 pb-4 -pr-4 border-b-2 border-gray-300 ">
                            <span class="inline-block text-slate-400 mr-4">Subtotal</span>
                            <span class="inline-block mr-4 font-semibold">${props.orderTotal}</span>
                        </div>
                        <div class="flex  justify-between pt-4 pb-4 -pr-4 border-b-2 border-gray-300 ">
                            <p class="inline-block text-slate-400 mr-4">Shpping estimate</p>
                            <span class="inline-block mr-4 font-semibold">$0.0</span>
                        </div>
                        <div class="flex  justify-between pt-4 pb-4 -pr-4 border-b-2 border-gray-300 ">
                            <p class="inline-block  text-slate-400 mr-4">Tax estimate</p>
                            <span class="inline-block mr-4 font-semibold">$0.0</span>
                        </div>
                        <div class="flex  justify-between pt-4 pb-4 -pr-4 border-gray-300 ">
                            <p class="inline-block mr-4  font-bold">Order total</p>
                            <span class="inline-block mr-4 font-semibold">${props.orderTotal}</span>
                        </div>
                        <button class="bg-[#1e293b] hover:bg-[#475569] text-white font-bold py-3 m-2 rounded-full w-full">
                            CheckOut
                        </button>
                    </div>
    )
}

export default CheckOut;