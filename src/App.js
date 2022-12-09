import { Route, Routes } from 'react-router-dom'
import { Home } from './views/Home'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Home />} />
                <Route path="/register" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
