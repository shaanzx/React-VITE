import "./MainContent.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {Services} from "../../pages/Services/Services.tsx";

export function MainContent() {
    return (
        <div className={"mainContent"}>
            <Routes>
                <Route path="/" index element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Services" element={<Services/>}/>
            </Routes>
        </div>
    );
}