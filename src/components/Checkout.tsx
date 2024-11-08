import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart';
import { useState } from 'react';
import Navbar from './Navbar';

const Checkout = () => {
    const {cart, cartTotal} = useCart();
    const [address, setAddress] = useState('');
    
    const navigate = useNavigate();

    const handleNavigate = () =>
    {
        navigate('/');
    }

    const cartToPedido = () => {
        const productoPedido = cart.map(item => ({
            productId: item.id,
            quantity: item.quantity
        }));
        
        const pedido = {
            userId: 1,
            products: productoPedido,
            totalAmount: cartTotal,
            deliveryAddress: address,
            status: 'Pendiente',
            creationDate: new Date().toLocaleDateString('es-ES')
        }
        return pedido
    }

    const addressHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value)
    }

    const createPedido = () => {
        let url = 'https://tienda-opal.vercel.app/orders'
        const pedido = cartToPedido();
        console.log(pedido)
        fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(pedido)
        })
        .then(response => {
            if(!response.ok)
            {
                throw new Error("Error al enviar datos");
            }
            return response.json()
        })
        .then(data => {console.log(data)})
        .catch(error => {console.log(error)})
    }

    return (
        <>
            <Navbar />
            <div className='checkout'>
                <div className='table-container'>
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
                </div>
                <p className="text-center">Total a pagar: <span className="fw-bold">${cartTotal}</span></p>
                <div className='address-content'>
                    <label>Direccion</label>
                    <input type="text" name="deliveryAddress" placeholder="Ingrese su direccion para delivery (opcional)" onChange={addressHandle}></input>
                </div>
                <div className='checkout-button my-4'>
                    <button className="btn btn-dark w-30 my-3 p-2" onClick={handleNavigate}>Volver</button>
                    <button className="btn btn-dark w-30 my-3 p-2" onClick={createPedido}>Pagar carrito</button>
                </div>
            </div>
        </>
    )
}

export default Checkout