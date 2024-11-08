
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import Error from './components/Error'

function App() {
 	return (
		<>
			<div className='App'>
				<main>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/checkout' element={<Checkout />} />
							<Route path='*' element={<Error />}/>
						</Routes>
					</BrowserRouter>
				</main>
				<Footer />
			</div>
		</>
	)		
}

export default App
