import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./view/pages/Login/Login.tsx";
import { DefaultLayout } from "./view/common/DefaultLayout/DefaultLayout.tsx";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-white text-black">
                <Routes>
                    <Route path="/*" element={<DefaultLayout />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
