import React from "react"
import { Routes, Route } from "react-router-dom"

import About from "./routes/About/About.component"
import Contact from "./routes/Contact/Contact.component"
import Header from "./routes/Header/Header.component"
import Footer from "./components/Footer/Footer.component"
import ForgotPassword from "./routes/ForgotPassword/ForgotPassword.component"
import Home from "./routes/Home/Home.component"
import Login from "./routes/Login/Login.component"
import Register from "./routes/Register/Register.component"
import Shop from "./routes/Shop/Shop.component"

import "./styles/styles.scss"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route index element={<Home />}  />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
