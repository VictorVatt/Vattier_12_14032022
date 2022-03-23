import Header from "../components/Header/Header"
import Home from "../pages/Home"
import { useLocation, useParams } from "react-router"

import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
    
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/12'element={<Home id={12}/>} />
                    <Route path='/18' element={<Home id={18}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App