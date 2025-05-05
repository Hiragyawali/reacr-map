const ProductCard = ({ title, price, image, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex flex-col justify-between w-full h-full min-h-[320px] max-w-[300px] mx-auto">
      <img
        src={image}
        alt={title}
        className="h-36 object-contain mx-auto mb-4"
      />
      <h3 className="font-bold text-sm mb-1">{title}</h3>  {/* Smaller font */}
      <p className="text-gray-500 text-xs mb-2 line-clamp-3">{description}</p>  {/* Smaller font */}
      <p className="text-blue-600 font-semibold mb-4 text-left text-sm">${price}</p>
      <button className="mt-auto bg-blue-500 text-white py-2 rounded hover:bg-blue-600 w-full">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
