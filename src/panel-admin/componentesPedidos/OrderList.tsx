import React, { useEffect, useState } from "react";
import axios from "axios";
import './OrderList.css';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    // Obtener todas las órdenes al montar el componente
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get("https://tienda-opal.vercel.app/orders");
            setOrders(response.data);
        } catch (error) {
            console.error("Error al obtener las órdenes:", error);
        }
    };

    // Cambiar el estado de una orden
    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            await axios.put(`https://tienda-opal.vercel.app/orders/${orderId}`, { status: newStatus });
            setOrders(orders.map(order =>
                order.id === orderId ? { ...order, status: newStatus } : order
            ));
        } catch (error) {
            console.error("Error al actualizar el estado de la orden:", error);
        }
    };

    // Eliminar una orden
    const deleteOrder = async (orderId) => {
        try {
            await axios.delete(`https://tienda-opal.vercel.app/orders/${orderId}`);
            setOrders(orders.filter(order => order.id !== orderId));
        } catch (error) {
            console.error("Error al eliminar la orden:", error);
        }
    };

    return (
        <div className="order-list">
            <h2 className="order-title">Lista de Órdenes</h2>
            <table>
                <thead className="order-thead">
                    <tr>
                        <th className="order-th">ID</th>
                        <th className="order-th">Usuario</th>
                        <th className="order-th">Total</th>
                        <th className="order-th">Dirección de entrega</th>
                        <th className="order-th">Estado</th>
                        <th className="order-th">Acciones</th>
                    </tr>
                </thead>
                <tbody className="order-tbody">
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td className="order-td">{order.id}</td>
                            <td className="order-td">{order.user_id}</td>
                            <td className="order-td">${order.total_amount}</td>
                            <td className="order-td">{order.delivery_address}</td>
                            <td className="order-td">{order.status}</td>
                            <td>
                                {/* Botón para actualizar el estado */}
                                <button onClick={() => updateOrderStatus(order.id, "completado")}>
                                    Marcar como completado
                                </button>
                                {/* Botón para eliminar la orden */}
                                <button onClick={() => deleteOrder(order.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;