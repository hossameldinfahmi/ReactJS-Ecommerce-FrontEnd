function ProductCard(props) {
  const item = props.item;
  const imgUrl = process.env.REACT_APP_IMGE_API_URL;

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="."
      >
        <img
          className="object-cover"
          src={`${imgUrl}${item.image}`}
          alt="productimage"
        />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href=".">
          <h5 className="text-xl tracking-tight text-slate-900">
            {item.name}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">{item.price*item.quantity}</span>
          </p>

          <span className="mr-2  rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            Quantity : {item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
