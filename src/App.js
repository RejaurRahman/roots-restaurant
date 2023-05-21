import { Routes, Route } from "react-router-dom"

import Header from "./routes/Header/Header.component"
import Footer from "./components/Footer/Footer.component"
import Home from "./routes/Home/Home.component"
import Login from "./routes/Login/Login.component"
import Register from "./routes/Register/Register.component"

import "./styles/styles.scss"

const Shop = () => {
  return (
    <div>I am shop page</div>
  )
}

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}  />
          <Route path="/shop" element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login' element={<Register />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
