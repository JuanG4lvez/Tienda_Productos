import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart';

const Checkout = () => {
    const {cart, cartTotal} = useCart();
    const navigate = useNavigate();

    const handleNavigate = () =>
    {
        navigate('/');
    }
    return (
        <>
            <header className="py-5 header">
                <h2 className='text-center'>Tienda de Productos Electrónicos</h2>
            </header>
            <div className='checkout my-4'>
                <table className='table'>
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
                    {cart.map(product => 
                        <tr key={product.id} className=''>
                            <td>
                                <img className="" src={`${product.image}`} alt="imagen" />
                            </td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <p className="text-center">Total a pagar: <span className="fw-bold">${cartTotal}</span></p>
                <div className='checkout-button my-4'>
                    <button className="btn btn-dark w-30 my-3 p-2" onClick={handleNavigate}>Volver</button>
                    <button className="btn btn-dark w-30 my-3 p-2">Pagar carrito</button>
                </div>
            </div>
        </>
    )
}

export default Checkout