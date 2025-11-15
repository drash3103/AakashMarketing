export default function ProductCard({ name, image, rating, reviews, price }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden">
      {image && (
        <div className="w-full h-48 bg-white mb-4 rounded-md overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="object-contain w-full h-full"
          />
        </div>
      )}

      <div className="px-1 pb-1">
        <h3 className="text-lg font-semibold text-primary mb-1 truncate">{name}</h3>

        {rating != null && reviews != null && (
          <p className="text-gray-600 mb-2 text-sm">
            {rating} ★ ({reviews} Reviews)
          </p>
        )}

        {price != null && (
          <p className="text-lg font-bold text-primary mb-3">₹ {price}</p>
        )}

        <a
          href="https://wa.me/9825292471"
          className="text-secondary hover:underline text-sm"
        >
          Get Best Deal
        </a>
      </div>
    </div>
  );
}