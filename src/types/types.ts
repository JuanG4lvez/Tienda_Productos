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