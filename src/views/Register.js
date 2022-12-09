import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/register')
    }
    return (
        <div onClick={goToLogin} className='text-3xl font-bold underline'>Register</div>
    )
}
