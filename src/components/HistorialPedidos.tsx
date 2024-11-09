import "./HistorialPedidos.css";
import { Pedido } from "../types/types";
import { useEffect, useState } from "react";

const HistorialPedidos = () => {
  /*const pedidos = [
    {
      id: 1,
      fecha: "2024-11-01",
      productos: ["Producto A", "Producto B"],
      estado: "Completado",
      total: "$50.000",
    },
    {
      id: 2,
      fecha: "2024-10-15",
      productos: ["Producto C"],
      estado: "Pendiente",
      total: "$20.000",
    },
  ];*/
  const user = () => {
		let item = sessionStorage.getItem('user');
		return item ? JSON.parse(item) : null;
	}
	const userInfo = user();

  const [pedido, setPedido] = useState<Pedido[]>([]);
  const [error, setError] = useState(null)

useEffect( () => {
  let url = "https://tienda-opal.vercel.app/orders/user/" + userInfo.userId
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
    setPedido(data)} 
  )
  .catch((error) => {
    setError(error)})
  }, []
)
console.log(pedido)
return (
    <div className="historial-pedidos-container">
      <h3 className="historial-pedidos-title">Historial de Pedidos</h3>
      <section className="historial-pedidos">
        <ul>
          {pedido.map(item => (
            <li key={item.id}>
              <p>Fecha de compra: {item.creation_date}</p>
              <p>Productos: {item.products.map(item => <span>{item.name} - </span>)}.</p>
              <p>Total: {item.total_amount}</p>
              <p>Estado: {item.status}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HistorialPedidos;
