
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Footer from './components/Footer'

function App() {
 	return (
		<>
			<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/checkout' element={<Checkout />} />
			</Routes>
			</BrowserRouter>
			<Footer />
		</>
	)		
}

export default App
