import React from 'react'

export default function Article() {
    return (
             
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
      
    )
}
