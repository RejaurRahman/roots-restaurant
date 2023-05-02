import { Routes, Route } from "react-router-dom"

import Home from "./routes/Home/Home"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

import "./styles/styles.scss"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
