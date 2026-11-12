import React from 'react'
import Header from './component/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './component/Card.jsx';
import Footer from "./component/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  )
}

export default App