import React from 'react'

const Footer = () => {
  return (
    <footer className="lavenza-bootstrap-footer py-5">
      <div className="container">
        <div className="row">
         
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-warning fw-bold mb-3">LAVENZA</h5>
            <p className="text-secondary small">
              Shop Beyond Ordinary. Discover our exclusive collection of luxury fashion, accessories, and timeless pieces.
            </p>
          </div>

      
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-warning fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-light">Home</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-light">Shop</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-light">Categories</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-light">Deals</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5 className="text-warning fw-bold mb-3">Contact Us</h5>
            <p className="text-secondary small mb-1">Email: support@lavenza.com</p>
            <p className="text-secondary small mb-1">Phone: +92 300 1234567</p>
            <p className="text-secondary small">Location: Karachi, Pakistan</p>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        
        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} Lavenza. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer