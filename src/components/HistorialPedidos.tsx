import "./HistorialPedidos.css";

const HistorialPedidos = () => {
  const pedidos = [
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
  ];

  return (
    <div className="historial-pedidos-container">
      <h3 className="historial-pedidos-title">Historial de Pedidos</h3>
      <section className="historial-pedidos">
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido.id}>
              <p>Fecha de compra: {pedido.fecha}</p>
              <p>Productos: {pedido.productos.join(", ")}</p>
              <p>Total: {pedido.total}</p>
              <p>Estado: {pedido.estado}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HistorialPedidos;
