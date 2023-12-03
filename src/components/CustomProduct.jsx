import bag1 from "../assets/bag_1.png";

function CustomProduct ({productLabel, productPicture, productTitle, productPrice}) {
    return (
        <article>
            <span>{productLabel}</span>
            <img src={productPicture} alt="Photo item"/>
            <p>{productTitle}</p>
            <h4>€{productPrice},-</h4>
        </article>
    )
}

export default CustomProduct;