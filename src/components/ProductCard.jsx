import "./ProductCard.css";

function ProductCard({ name, price, image, description }) {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={name} />

      <div className="card__body">
        <div className="card__top">
          <h3 className="card__name">{name}</h3>
          <span className="card__price">{price}</span>
        </div>

        <p className="card__desc">{description}</p>

        <button className="card__button">Add to Cart</button>
      </div>
    </article>
  );
}

export default ProductCard;
