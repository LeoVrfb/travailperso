import React from "react";
import Carousel from "./Carousel";
import "./OnePage.css";

export default function OnePage() {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <a href="#" className="nav-link text-dark">
          Accueil
        </a>
        <a href="#" className="nav-link text-dark">
          Services
        </a>
        <a href="#" className="nav-link text-dark">
          Contact
        </a>
    </div>
  </div>
</nav>

    {/* <section className="accueil bg-dark d-flex flex-column justify-content-center align-items-center">
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
      </section> */}

      <Carousel/>


      <div className="container py-5 bg-light">
        <h2 className="display-4 text-center mb-5">
          un site pour débuter
        </h2>

        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1486506574467-c44963fc7876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="w-100"
              />

              <div className="card-body">
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam odio amet fugit voluptas aspernatur est quos nemo
                  cupiditate voluptates ex!
                </p>
                <div className="btn-group container ">
                  <button
                    type="button"
                    className="btn btb-sm btn-outline-secondary m-1 "
                  >
                    Contact
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary m-1"
                  >
                    Découvrir
                  </button>
                </div>
              </div>
            </div>
          </div>
         
          
              </div>
            </div>

            

     
          
        
    </div>
  );
}
