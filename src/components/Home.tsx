import Header from './Header.tsx'
import Product from './Product.tsx'
import Filter from './Filter.tsx'
import { useCart } from '../hooks/useCart'
import { useFilter } from '../hooks/useFilter.ts'

const Home = () => {
    const {data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart,
    	isEmpty, cartTotal
  	} = useCart();

	const {filter, filterProducts, priceHandle, categoryHandle, handleSubmit, isFilter} = useFilter();
    const categories = [...new Set(data.map(product => product.category))]
    
  return (
    <>
        <header className="py-5 header">
			<h2 className='text-center'>Tienda de Productos Electrónicos</h2>
                <div className="container-xl">
                    <div className='options-container d-flex'>
						<Filter 
							filter={filter}
							priceHandle={priceHandle}
							categoryHandle={categoryHandle}
							handleSubmit={handleSubmit}
							categories={categories}
						/>
						<Header 
  							cart={cart}
  							removeFromCart={removeFromCart}
  							increaseQuantity={increaseQuantity}
  							decreaseQuantity={decreaseQuantity}
  							clearCart={clearCart}
  							isEmpty={isEmpty}
  							cartTotal={cartTotal}
  						/>
					</div>
                </div>
        </header>
		<main className="container-xl mt-5">
		
  		<h2 className="text-center">Nuestra Colección</h2>
  		<div className="product row mt-5">
	 	{ isFilter() ? (
			<>
				{data.map((product) => (
				<>
					{filterProducts(product, filter.minRange, filter.maxRange, filter.category) ? (
						<Product 
						key={product.id}
						product={product}
						addToCart={addToCart}
						/>
					): (
						<>
						
						</>
					)}
        		</>
       			))}
			</>
		) : (
			<>
				{data.map((product) => (
					<Product
					key={product.id}
					product={product}
					addToCart={addToCart}
					/>
				))}
			</>
		)}
			</div>
		</main>

		
	</>
)}


export default Home