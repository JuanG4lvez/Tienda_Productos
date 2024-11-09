export type Product = {
    id: number
    name: string
    image: string
    description: string
    price: number
    category: string
}

export type CartItem = Product & {
    quantity: number
}

export type ProductID = Product['id']

export type PedidoProduct = {
    product_id: number,
    name: string,
    price: string,
    quantity: number
}

export type Pedido = {
    id: number,
    user_id: number,
    total_amount: string,
    delivery_address: string,
    status: string,
    creation_date: string,
    products: PedidoProduct[],
}