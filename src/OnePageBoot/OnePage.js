import React from "react";
import Carousel from "./Carousel";
import Article from "./Article";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faPrint, faPhone } from '@fortawesome/free-solid-svg-icons'
import "./OnePage.css";

export default function OnePage() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light p-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar w/ text
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            {/* <span>just tell something</span> */}
          </div>
        </div>
      </nav>

      <Carousel />

      <div className="container py-5 bg-light">
        <h2 className="display-4 text-center mb-5">un site pour débuter</h2>
        <div className="row">
          <Article />
          <Article />
          <Article />
        </div>
      </div>

      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container text-md-left">
          <div className="row text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company name</h5>
              <p>Here you an use rows and columns to organize your footer content. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-md-2 col-lg-2 col xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
              <p>
                  <a href="#" className="text-white" style={{textDecoration : 'none'}}>TheProviders</a>
              </p>
              <p>
                  <a href="#" className="text-white" style={{textDecoration : 'none'}}>TheProviders</a>
              </p>
              <p>
                  <a href="#" className="text-white" style={{textDecoration : 'none'}}>TheProviders</a>
              </p>
              <p>
                  <a href="#" className="text-white" style={{textDecoration : 'none'}}>TheProviders</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">useful links</h5>

            <p>
                  <a href="#" className="text-white" style={{textDecoration : 'none'}}>TheProviders</a>
              </p>
              <p>
                  <a href="#" className="text-white" style={{textDecoration : 'none'}}>TheProviders</a>
              </p>
              <p>
                  <a href="#" className="text-white" style={{textDecoration : 'none'}}>TheProviders</a>
              </p>
              <p>
                  <a href="#" className="text-white" style={{textDecoration : 'none'}}>TheProviders</a>
              </p>

            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">

            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">contact</h5>
            <p>
           <i className="fas fa-home mr-3"><FontAwesomeIcon icon={faHome} /></i> Paris, 75015, FR
           </p>
            <p>
           <i className="fas fa-envelope mr-3"><FontAwesomeIcon icon={faEnvelope} /></i> Paris, 75015, FR
           </p>
            <p>
           <i className="fas fa-phone mr-3"><FontAwesomeIcon icon={faPhone} /> </i> Paris, 75015, FR
           </p>
            <p>
           <i className="fas fa-print mr-3"><FontAwesomeIcon icon={faPrint} /> </i> Paris, 75015, FR
           </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

{
  /* <section className="accueil bg-dark d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-1 text-white text-center">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="lead text-center text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          necessitatibus nam dolore labore dolores! Veritatis ratione ea labore
          accusantium sunt.
        </p>
        <p className="lead mb-5">
          <a
            href="#"
            className="btn btn-lg btn-secondary border-3 border-danger"
          >
            En savoir plus
          </a>
        </p>
      </section> */
}
