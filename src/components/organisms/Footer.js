import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#6c757d', // Màu mặc định
    transition: 'color 0.3s ease',
  };

  const hoverStyle = {
    color: '#007bff', // Màu khi hover
  };

  return (
    <div className="d-flex flex-column">
      <footer className="bg-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="" width="180" className="mb-3" />
              <p className="font-italic text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
              </p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item">
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="twitter" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="facebook" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="instagram" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" title="pinterest" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" title="github" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Product</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>Angular</a></li>
                <li className="mb-2"><a href="#" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>Vue</a></li>
                <li className="mb-2"><a href="#" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>React</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>Login</a></li>
                <li className="mb-2"><a href="#" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>Register</a></li>
                <li className="mb-2"><a href="#" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>Wishlist</a></li>
                <li className="mb-2"><a href="#" style={linkStyle} onMouseEnter={e => e.currentTarget.style.color = hoverStyle.color} onMouseLeave={e => e.currentTarget.style.color = linkStyle.color}>Our Products</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
              <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
              <div className="p-1 rounded border">
                <div className="input-group">
                  <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                  <div className="input-group-append">
                    <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
