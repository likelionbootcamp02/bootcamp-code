import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SolidStar = () => {
  return (
    <svg
      className="h-5 w-5 text-yellow-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

const OutlineStar = () => {
  return (
    <svg
      className="h-5 w-5 text-gray-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

const Rating = ({ rating = 4 }) => {
  return (
    <div className="-ml-0.5 flex">
      {[...Array(5).keys()].map((i) => {
        return i + 1 <= rating ? <SolidStar /> : <OutlineStar />;
      })}
    </div>
  );
};

const ProductDetailView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${productId}`)
      .then((res) => setProduct(res.data.product))
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="Les Paul"
              src={product.thumbnail}
              className="aspect-square w-full rounded-xl object-cover"
            />
            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              <img
                alt={product.title}
                src={product.thumbnail}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <img
                alt={product.title}
                src={product.thumbnail}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <img
                alt={product.title}
                src={product.thumbnail}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <img
                alt={product.title}
                src={product.thumbnail}
                className="aspect-square w-full rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              Pre Order
            </strong>
            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch]">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="mt-0.5 text-sm">Highest Rated Product</p>
                <div className="mt-2 ">
                  <Rating rating={product.rating} />
                </div>
              </div>
              <p className="text-lg font-bold">${product.price}</p>
            </div>
            <details className="group relative mt-4">
              <summary className="block">
                <div>
                  <div className="prose max-w-none group-open:hidden">
                    <p>{product.description}</p>
                  </div>
                  <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                    Read More
                  </span>
                </div>
              </summary>
              <div className="prose max-w-none pb-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  veniam dicta beatae eos ex error culpa delectus rem tenetur,
                  architecto quam nesciunt, dolor veritatis nisi minus
                  inventore, rerum at recusandae?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat nam sapiente nobis ea veritatis error consequatur nisi
                  exercitationem iure laudantium culpa, animi temporibus non!
                  Maxime et quisquam amet. A, deserunt!
                </p>
              </div>
            </details>
            <form className="mt-8">
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Color</legend>
                <div className="flow-root">
                  <div className="-m-0.5 flex flex-wrap">
                    <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        className="peer sr-only"
                      />
                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Texas Tea
                      </span>
                    </label>
                    <label htmlFor="color_fr" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        className="peer sr-only"
                      />
                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Fiesta Red
                      </span>
                    </label>
                    <label htmlFor="color_cb" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />
                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Cobalt Blue
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-4">
                <legend className="mb-1 text-sm font-medium">Size</legend>
                <div className="flow-root">
                  <div className="-m-0.5 flex flex-wrap">
                    <label htmlFor="size_xs" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_xs"
                        className="peer sr-only"
                      />
                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        XS
                      </span>
                    </label>
                    <label htmlFor="size_s" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_s"
                        className="peer sr-only"
                      />
                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        S
                      </span>
                    </label>
                    <label htmlFor="size_m" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_m"
                        className="peer sr-only"
                      />
                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        M
                      </span>
                    </label>
                    <label htmlFor="size_l" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_l"
                        className="peer sr-only"
                      />
                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        L
                      </span>
                    </label>
                    <label htmlFor="size_xl" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_xl"
                        className="peer sr-only"
                      />
                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        XL
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="mt-8 flex">
                <div>
                  <label htmlFor="quantity" className="sr-only">
                    Qty
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min={1}
                    defaultValue={1}
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                <button
                  type="submit"
                  className="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailView;
