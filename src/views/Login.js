import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }
    return (
        <div onClick={goToLogin} className='text-3xl font-bold underline'>Login</div>
    )
}
