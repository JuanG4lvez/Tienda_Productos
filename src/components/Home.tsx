<<<<<<< Updated upstream
import Cart from './Cart.tsx'
=======
import Header from './Header.tsx'
>>>>>>> Stashed changes
import Product from './Product.tsx'
import Filter from './Filter.tsx'
import { useCart } from '../hooks/useCart'
import { useFilter } from '../hooks/useFilter.ts'
import { Link } from 'react-router-dom'
<<<<<<< Updated upstream
import '../css/Home.css'
=======
>>>>>>> Stashed changes


const Home = () => {
    const { data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart,
    	isEmpty, cartTotal
  	} = useCart();
	const {filter, filterProducts, priceHandle, categoryHandle, handleSubmit, isFilter} = useFilter();
    const categories = [...new Set(data.map(product => product.category))]

	const user = () => {
		let item = sessionStorage.getItem('user');
		return item ? JSON.parse(item) : null;
	}

	const userInfo = user();
<<<<<<< Updated upstream
	//console.log(userInfo)
=======
	console.log(userInfo)
>>>>>>> Stashed changes
    
  	return (
    <>
		<nav className='nav-header bg-dark'>
			{userInfo !== null &&
			userInfo.role == 'admin' &&
			<button className='button-sesion btn btn-sucess'>Herramientas Admin</button>
			}
			{userInfo == null &&
			<Link className="button-login" to="/login">
            	<i className="fas fa-user fs-4 text-white"></i>
          	</Link>}
			{userInfo !== null &&
			<Link className="button-login" to="/userprofile">
            	<i className="fas fa-user fs-4 text-white"></i>
          	</Link>}

<<<<<<< Updated upstream
			<Cart 
=======
			<Header 
>>>>>>> Stashed changes
  				cart={cart}
  				removeFromCart={removeFromCart}
  				increaseQuantity={increaseQuantity}
  				decreaseQuantity={decreaseQuantity}
  				clearCart={clearCart}
  				isEmpty={isEmpty}
  				cartTotal={cartTotal}
  			/>
		</nav>
        <header>
            <div className="container-xl">
				<h2 className='text-center'>Tienda de Productos Electrónicos</h2>
                    <div className='options-container d-flex'>
						<Filter 
							filter={filter}
							priceHandle={priceHandle}
							categoryHandle={categoryHandle}
							handleSubmit={handleSubmit}
							categories={categories}
						/>
					</div>
                </div>
        </header>
		<section className="container-xl mt-5">
<<<<<<< Updated upstream
  			<p className="text-center fs-3">Nuestra Colección</p>
=======
  			<h2 className="text-center">Nuestra Colección</h2>
>>>>>>> Stashed changes
		
  		<div className="product row mt-5">
	 	{ isFilter() ? (
			<>
				{data.map((product) => (
				<>
<<<<<<< Updated upstream
					{filterProducts(product, filter.minRange, filter.maxRange, filter.category) && 
=======
					{filterProducts(product, filter.minRange, filter.maxRange, filter.category) ? (
>>>>>>> Stashed changes
						<Product 
						key={product.id}
						product={product}
						addToCart={addToCart}
						/>
<<<<<<< Updated upstream
					}
=======
					): (
						<>
						
						</>
					)}
>>>>>>> Stashed changes
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
		</section>
<<<<<<< Updated upstream
	</>
)}


=======

		
	</>
)}


>>>>>>> Stashed changes
export default Home