import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function SchoolForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  // Estado para la contraseña
    const [errorMessage, setErrorMessage] = useState('');
    const [nombre, setNombre] = useState('');
    const [calle, setCalle] = useState('');
    const [altura, setAltura] = useState('');
    const [descripcion, setDescripcion]=useState('');
    const [loading, setLoading] = useState(false);
    const navegate = useNavigate()
  return (
    <form>
    <div>
        <label>Email:</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
    </div>
    <div>
        <label>Nombre</label>
        <input type='nombre' value={password} onChange={(e)=> setNombre(e.target.value)}/>
    </div>
    <div>
        <label>Calle</label>
        <input type='calle' value={calle} onChange={(e)=> setCalle(e.target.value)}/>
    </div>
    <div>
        <label>Altura</label>
    </div>
    <div>
        <label>Contraseña:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
    </div>
    <button type="submit" disabled={loading}>
        {loading ? 'Cargando...' : 'Ingresar'}
    </button>
    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
</form>
  )
}

export default SchoolForm