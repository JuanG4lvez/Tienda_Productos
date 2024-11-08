import { CartItem, ProductID } from "../types/types";
import { Link, useNavigate } from "react-router-dom";

type HeaderProps = {
  cart: CartItem[];
  removeFromCart: (id: ProductID) => void;
  increaseQuantity: (id: ProductID) => void;
  decreaseQuantity: (id: ProductID) => void;
  clearCart: () => void;
  isEmpty: boolean;
  cartTotal: number;
};

export default function Header({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  isEmpty,
  cartTotal,
}: HeaderProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/checkout");
  };
  return (
    <nav className="mt-5 d-flex align-items-end ">
      <div className="d-flex align-items-center">
        <div className="me-3">
          <Link to="/userprofile">
            <i className="fas fa-user fs-4 text-white"></i>
          </Link>
        </div>
      </div>
      <div className="carrito">
        <img
          className="img-fluid"
          src="/images/carrito.png"
          alt="imagen carrito"
        />
        <div id="carrito" className="bg-white p-3">
          {isEmpty ? (
            <p className="text-center">El carrito esta vacio</p>
          ) : (
            <>
              <table className="w-100 table">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img
                          className="img-fluid"
                          src={`${product.image}`}
                          alt="imagen"
                        />
                      </td>
                      <td>{product.name}</td>
                      <td className="fw-bold">{product.price}</td>
                      <td className="flex align-items-start gap-4">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          {" "}
                          -{" "}
                        </button>
                        {product.quantity}
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          {" "}
                          +
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                        >
                          {" "}
                          X{" "}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-end">
                Total pagar: <span className="fw-bold">${cartTotal}</span>
              </p>
              <button
                className="btn btn-dark w-100 my-4 p-2"
                onClick={handleNavigate}
              >
                Pagar Carrito
              </button>
            </>
          )}
          <button className="btn btn-dark w-100 my-4 p-2" onClick={clearCart}>
            Vaciar Carrito
          </button>
        </div>
      </div>
    </nav>
  );
}
