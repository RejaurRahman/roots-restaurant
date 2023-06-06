import React from "react"
import { Routes, Route } from "react-router-dom"

import About from "./routes/About/About.component"
import Contact from "./routes/Contact/Contact.component"
import CoronavirusFaq from "./routes/Documents/CoronavirusFaq.component"
import Faq from "./routes/Documents/Faq.component"
import Header from "./routes/Header/Header.component"
import Footer from "./components/Footer/Footer.component"
import ForgotPassword from "./routes/ForgotPassword/ForgotPassword.component"
import Home from "./routes/Home/Home.component"
import Login from "./routes/Login/Login.component"
import PrivacyPolicy from "./routes/Documents/PrivacyPolicy.component"
import Register from "./routes/Register/Register.component"
import Shop from "./routes/Shop/Shop.component"
import Sitemap from "./routes/Documents/Sitemap.component"
import Sustainability from "./routes/Documents/Sustainability.component"
import TermsConditions from "./routes/Documents/TermsConditions.component"

import "./styles/styles.scss"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coronavirus-faq" element={<CoronavirusFaq />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route index element={<Home />}  />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
