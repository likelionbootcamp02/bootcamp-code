const ProductCard = ({ name, imageUrl, price, colors, status }) => {
  return (
    <div>
      {/* Header */}
      <div className="relative">
        <img src={imageUrl} alt="" className="h-96 w-full pt-3 object-cover" />
        <span className="absolute top-0 left-1/2 px-4 bg-black text-white uppercase text-xs font-bold leading-6 -translate-x-1/2">
          {status}
        </span>
      </div>

      {/* Body */}
      <div className="pt-4">
        <h5 className="text-sm capitalize mb-4">{name}</h5>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">${price}</p>
          <p className="text-xs font-bold uppercase">{colors.length} colors</p>
        </div>
      </div>
    </div>
  );
};

const ProductCollection = ({ category, products }) => {
  const cx = {
    headingLine:
      "relative before:content-[''] before:block before:absolute before:w-12 before:h-1 before:bg-[#b91c1c] before:top-[-10px] before:left-0",
  };
  return (
    <div className="py-8">
      <div className="container">
        {/* Heading */}
        <div className="mb-8">
          <h2
            className={`uppercase text-2xl font-extrabold lg:text-3xl ${cx.headingLine}`}
          >
            {category}
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {products.map((product) => {
            return <ProductCard {...product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
