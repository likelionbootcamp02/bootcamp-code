import "./Products.css";

const products = [
  {
    id: 1,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1645036275538",
    title: "Iphone 13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, architecto?",
  },
  {
    id: 2,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1645036275538",
    title: "Iphone 14 Promax",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, architecto?  dolor sit amet, consectetur adipisicing elit. Non, ar",
  },
  {
    id: 3,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1645036275538",
    title: "Iphone 13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, architecto?",
  },
  {
    id: 4,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1645036275538",
    title: "Iphone 13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, architecto?",
  },
  {
    id: 5,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1645036275538",
    title: "Iphone 13",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, architecto?",
  },
];

function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">
          Go to Detail
        </a>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          {products.map(function (product) {
            return (
              <ProductCard
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
