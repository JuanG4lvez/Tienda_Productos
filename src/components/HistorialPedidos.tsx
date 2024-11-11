<<<<<<< Updated upstream
import "../css/HistorialPedidos.css";
=======
import "./HistorialPedidos.css";
>>>>>>> Stashed changes
import { Pedido } from "../types/types";
import { useEffect, useState } from "react";

const HistorialPedidos = () => {
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
  const user = () => {
		let item = sessionStorage.getItem('user');
		return item ? JSON.parse(item) : null;
	}
	const userInfo = user();

  const [pedido, setPedido] = useState<Pedido[]>([]);
  const [error, setError] = useState(null)

<<<<<<< Updated upstream
  useEffect( () => {
=======
useEffect( () => {
>>>>>>> Stashed changes
  let url = "https://tienda-opal.vercel.app/orders/user/" + userInfo.userId
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
    setPedido(data)} 
  )
  .catch((error) => {
    setError(error)})
<<<<<<< Updated upstream
  }, [])


=======
  }, []
)
console.log(pedido)
>>>>>>> Stashed changes
return (
    <div className="historial-pedidos-container">
      <h3 className="historial-pedidos-title">Historial de Pedidos</h3>
      <section className="historial-pedidos">
        <ul>
          {pedido.map(item => (
            <li key={item.id}>
              <p>Fecha de compra: {item.creation_date}</p>
<<<<<<< Updated upstream
              <p>Productos: {item.products.map(product => <span key={product.product_id}>{product.name} - </span>)}.</p>
=======
              <p>Productos: {item.products.map(item => <span>{item.name} - </span>)}.</p>
>>>>>>> Stashed changes
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
