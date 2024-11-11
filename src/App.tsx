
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import Error from './components/Error'
import { SignIn } from './pages/SignIn'
import UserProfile from './pages/UserProfile'

/*import Productos from './panel-admin/pages/Productos'
import Pedidos from './panel-admin/pages/Pedidos'
import Usuarios from './panel-admin/pages/Usuarios.ts'*/



function App() {
	
 	return (
		<>
			<div className='App'>
				<main>
					<BrowserRouter key="1">
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/checkout' element={<Checkout />} />
							<Route path="/login" element={<SignIn />} />
          					<Route path="/userprofile" element={<UserProfile />} />
							<Route path='*' element={<Error />}/>
							{/*<Route path="/productos" element={<Productos />} />
        					<Route path="/pedidos" element={<Pedidos />} />
        					<Route path="/usuarios" element={<Usuarios />} />*/}
						</Routes>
					</BrowserRouter>
				</main>
				<Footer />
			</div>
		</>
	)		
}

export default App
