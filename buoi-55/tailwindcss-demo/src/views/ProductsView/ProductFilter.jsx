import { Link } from "react-router-dom";
import PaginatedItems from "../../components/Pagination";

const Product = ({ product }) => {
  return (
    <Link
      key={product.id}
      to={`/products/${product.id}`}
      className="relative block bg-white"
    >
      <button
        type="button"
        name="wishlist"
        className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
      <img
        alt="Toy"
        src={product.imageUrl}
        className="h-56 w-full object-contain lg:h-72"
      />
      <div className="p-6">
        <span className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
          {product.status}
        </span>
        <h5 className="mt-4 text-lg font-bold">{product.name}</h5>
        <p className="mt-2 text-sm font-medium text-gray-600">
          ${product.price}
        </p>
        <button
          name="add"
          type="button"
          className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4"
        >
          <span className="text-sm font-medium"> Add to Cart </span>
          <svg
            className="ml-1.5 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </div>
    </Link>
  );
};

const ProductFilter = ({ products }) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <div className="lg:sticky lg:top-4">
            <details
              open
              className="overflow-hidden rounded border border-gray-200"
            >
              <summary className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                <span className="text-sm font-medium"> Toggle Filters </span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <form className="border-t border-gray-200 lg:border-t-0">
                <fieldset>
                  <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                    Type
                  </legend>
                  <div className="space-y-2 px-5 py-6">
                    <div className="flex items-center">
                      <input
                        id="toy"
                        type="checkbox"
                        name="type[toy]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label htmlFor="toy" className="ml-3 text-sm font-medium">
                        Toy
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="game"
                        type="checkbox"
                        name="type[game]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label
                        htmlFor="game"
                        className="ml-3 text-sm font-medium"
                      >
                        Game
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="outdoor"
                        type="checkbox"
                        name="type[outdoor]"
                        className="h-5 w-5 rounded border-gray-300"
                      />
                      <label
                        htmlFor="outdoor"
                        className="ml-3 text-sm font-medium"
                      >
                        Outdoor
                      </label>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        className="text-xs text-gray-500 underline"
                      >
                        Reset Type
                      </button>
                    </div>
                  </div>
                </fieldset>
                <div>
                  <fieldset>
                    <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
                      Age
                    </legend>
                    <div className="space-y-2 px-5 py-6">
                      <div className="flex items-center">
                        <input
                          id="3+"
                          type="checkbox"
                          name="age[3+]"
                          className="h-5 w-5 rounded border-gray-300"
                        />
                        <label
                          htmlFor="3+"
                          className="ml-3 text-sm font-medium"
                        >
                          3+
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="8+"
                          type="checkbox"
                          name="age[8+]"
                          className="h-5 w-5 rounded border-gray-300"
                        />
                        <label
                          htmlFor="8+"
                          className="ml-3 text-sm font-medium"
                        >
                          8+
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="12+"
                          type="checkbox"
                          name="age[12+]"
                          className="h-5 w-5 rounded border-gray-300"
                        />
                        <label
                          htmlFor="12+"
                          className="ml-3 text-sm font-medium"
                        >
                          12+
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="16+"
                          type="checkbox"
                          name="age[16+]"
                          className="h-5 w-5 rounded border-gray-300"
                        />
                        <label
                          htmlFor="16+"
                          className="ml-3 text-sm font-medium"
                        >
                          16+
                        </label>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          className="text-xs text-gray-500 underline"
                        >
                          Reset Age
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="flex justify-between border-t border-gray-200 px-5 py-3">
                  <button
                    name="reset"
                    type="button"
                    className="rounded text-xs font-medium text-gray-600 underline"
                  >
                    Reset All
                  </button>
                  <button
                    name="commit"
                    type="button"
                    className="rounded bg-green-600 px-5 py-3 text-xs font-medium text-white"
                  >
                    Apply Filters
                  </button>
                </div>
              </form>
            </details>
          </div>
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="hidden sm:inline"> Showing </span>6 of 24
                Products
              </p>
              <div className="ml-4">
                <label htmlFor="SortBy" className="sr-only">
                  {"{"}" "{"}"}
                  Sort{"{"}" "{"}"}
                </label>
                <select
                  id="SortBy"
                  name="sort_by"
                  className="rounded border-gray-100 text-sm"
                >
                  <option readOnly>Sort</option>
                  <option value="title-asc">Title, A-Z</option>
                  <option value="title-desc">Title, Z-A</option>
                  <option value="price-asc">Price, Low-High</option>
                  <option value="price-desc">Price, High-Low</option>
                </select>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
              <PaginatedItems items={products} component={Product} />
              {/* {products.map((product) => {
                return <Product key={product.id} product={product} />;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
