import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import "./styles/styles.scss"

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Soup'
    },
    {
      id: 2,
      title: 'Salad'
    },
    {
      id: 3,
      title: 'Fast Food'
    },
    {
      id: 4,
      title: 'Oriental'
    },
    {
      id: 5,
      title: 'Indian'
    },
    {
      id: 6,
      title: 'Desert'
    },
    {
      id: 6,
      title: 'Drinks'
    }
  ]

  return (
    <div className="app">
      <Header />
      {
        categories.map(({title, id}) => (
          <div key={id} className="category-container">
            <div className="category-body-container">
              <h2>
                {title}
              </h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))
      }
      <Footer />
    </div>
  )
}

export default App
