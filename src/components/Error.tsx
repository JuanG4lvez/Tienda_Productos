
import { useNavigate } from 'react-router-dom';

export const Error = () => {
	const navigate = useNavigate();
    const handleNavigate = () =>
    {
        navigate('/');
    }
  	return (
    	<>
			<div className="text-error">
				<h3 className="text-black fs-4 fw-bold text-uppercase">Página no encontrada :c</h3>
				<button className='button-sesion btn btn-sucess' onClick={handleNavigate}>Home</button>
			</div>
			
    	</>
  	)
}

export default Error
