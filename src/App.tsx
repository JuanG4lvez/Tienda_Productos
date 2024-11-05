import { useCart } from './hooks/useCart.ts'
import { useFilter } from './hooks/useFilter.ts'
import './App.css'
import Header from './components/Header.tsx'
import Guitar from './components/Guitar.tsx'
import Filter from './components/Filter.tsx'

function App() {
  	const {data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart,
    	isEmpty, cartTotal
  	} = useCart()

	const {filter, filterProducts, priceHandle, categoryHandle, handleSubmit, isFilter} = useFilter();
    
	
 	return (
 	<>
  		<header className="py-5 header">
                <div className="container-xl justify-content-md-between">
					<h2 className='text-center'>Tienda de Productos Electrónicos</h2>
                    <div className="item justify-content-center justify-content-md-between">
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
					
					<div className='item justify-content-center justify-content-md-between'>
						<Filter 
							priceHandle={priceHandle}
							categoryHandle={categoryHandle}
							handleSubmit={handleSubmit}
						/>
					</div>
                </div>
        </header>
		<main className="container-xl mt-5">
		
  		<h2 className="text-center">Nuestra Colección</h2>
  		<div className="row mt-5">
	 	{ isFilter() ? (
			<>
				{data.map((product) => (
				<>
					{filterProducts(product, filter.minRange, filter.maxRange, filter.category) ? (
						<Guitar 
						key={product.id}
						product={product}
						addToCart={addToCart}
						/>
					): (
						<></>
					)}
        		</>
       			))}
			</>
		) : (
			<>
				{data.map((product) => (
					<Guitar 
					key={product.id}
					product={product}
					addToCart={addToCart}
					/>
				))}
			</>
		)}
      	
  </div>
</main>

<footer className="bg-dark mt-5 py-5">
  <div className="container-xl">
      <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
  </div>
</footer></>
  )
}

export default App
