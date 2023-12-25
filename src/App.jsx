import React from 'react';
import { Footer, Header, SectionMenu, SectionPreview, SectionBooking } from "./components"
import { Route, Routes } from "react-router-dom";
import "./styles/app.css";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path='/' element={<SectionPreview />}/>
                <Route path='/booking' element={<SectionBooking />}/>
            </Routes>
            <SectionMenu />
            <Footer />
        </div>
    )
}

export default App;