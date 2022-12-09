import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/')
    }
    return (
        <div onClick={goToHome}>Home</div>
    )
}
