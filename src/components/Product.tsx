import type { Product } from "../types/types";

type ProductProps = {
    product : Product,
    addToCart : (item: Product) => void
}

export default function Product({product, addToCart} : ProductProps){

    const { name, description, price, image, category} = product;

    return(
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
        <div className="col-4">
            <img className="img-fluid" src={`${image}`} alt="img product" />
        </div>
        <div className="col-8">
            <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
            <p>{category}</p>
            <p>{description}</p>
            <p className="fw-black text-primary fs-3">${price}</p>
            <button 
                onClick={() => addToCart(product)}
                type="button"
                className="btn btn-dark w-100"
            >Agregar al Carrito</button>
        </div>
    </div>
    )
}
