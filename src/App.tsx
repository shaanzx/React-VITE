import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./view/pages/Login/Login.tsx";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";

function App() {
    return (
        <BrowserRouter>
            {/*<DefaultLayout/>*/}
            <Routes>
                <Route path="/*" element={<DefaultLayout/>}></Route>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;