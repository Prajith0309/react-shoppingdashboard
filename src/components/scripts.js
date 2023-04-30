

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function Scripts() {
    const [isButtonDisabled1, setIsButtonDisabled1] = useState(true);
    const [isButtonDisabled2, setIsButtonDisabled2] = useState(true);
    const [isButtonDisabled3, setIsButtonDisabled3] = useState(true);
    const [isButtonDisabled4, setIsButtonDisabled4] = useState(true);
    const [isButtonDisabled5, setIsButtonDisabled5] = useState(true);
    const [isButtonDisabled6, setIsButtonDisabled6] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [cartitem,setCartItem] = useState(0);
    const showDropdown = (e) =>{
        e.preventDefault();
        setIsOpen(!isOpen);
    }
  return <>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={showDropdown}
              >
                Shop
              </a>
              <ul 
                className={`dropdown-menu ${isOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#!">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cartitem}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            With this shop homepage template
          </p>
        </div>
      </div>
    </header>
        <section class="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
          <div className="card h-100">
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">Fancy Product</h5>
               $40.00 - $80.00
            </div>
            </div>
          
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>e.preventDefault()}>View options</a></div>
          </div>
          </div>
          </div>
        <div className="col mb-5">
        <div className="card h-100">
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">Special Item</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              </div>
            <span className="text-muted text-decoration-line-through">$20.00</span>
              $18.00
          </div>
          </div>
          
          {isButtonDisabled1?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={()=>setCartItem(cartitem+1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled1(!isButtonDisabled1)
         }} >Add to cart</a>
        </div>
        </div>:<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" disabled onClick={(e)=>e.preventDefault()}>Item Added</a>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent mt-3" onClick={()=>setCartItem(cartitem-1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled1(!isButtonDisabled1)
         }} >Remove from cart</a></div>
        </div>
        </div>
        </div>}
       </div>
        </div>
          <div class="col mb-5">
          <div class="card h-100">
            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">Popular Item</h5>
              <div class="d-flex justify-content-center small text-warning mb-2">
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
            </div>$40.00</div>
          </div>
          {isButtonDisabled2?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={()=>setCartItem(cartitem+1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled2(!isButtonDisabled2)
         }}>Add to cart</a>
        </div>
        </div>:<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" disabled onClick={(e)=>e.preventDefault()}>Item Added</a>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent mt-3" onClick={()=>setCartItem(cartitem-1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled2(!isButtonDisabled2)
         }} >Remove from cart</a></div>
        </div>
        </div>
        </div>}
          </div>
          </div>
          <div className="col mb-5">
          <div className="card h-100">
             <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
               <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                 <div className="card-body p-4">
                 <div className="text-center">
                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through">$50.00</span>
                    $25.00
                 </div>
              </div>
              {isButtonDisabled3?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={()=>setCartItem(cartitem+1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled3(!isButtonDisabled3)
         }} >Add to cart</a>
        </div>
        </div>:<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" disabled onClick={(e)=>e.preventDefault()}>Item Added</a>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent mt-3" onClick={()=>setCartItem(cartitem-1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled3(!isButtonDisabled3)
         }} >Remove from cart</a></div>
        </div>
        </div>
        </div>}
          </div>
          </div>
          <div className="col mb-5">
          <div className="card h-100">
            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">Fancy Product</h5>
               $120.00 - $280.00
            </div>
            </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>e.preventDefault()}>View options</a></div>
          </div>
       </div>
       </div>
       <div className="col mb-5">
       <div className="card h-100">
       <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
          <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
       <div className="card-body p-4">
      <div className="text-center">
        <h5 className="fw-bolder">Special Item</h5>
        <div className="d-flex justify-content-center small text-warning mb-2">
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
        </div>
        <span className="text-muted text-decoration-line-through">$20.00</span>
        $18.00
      </div>
      </div>
      {isButtonDisabled4?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={()=>setCartItem(cartitem+1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled4(!isButtonDisabled4)
         }} >Add to cart</a>
        </div>
        </div>:<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" disabled onClick={(e)=>e.preventDefault()}>Item Added</a>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent mt-3" onClick={()=>setCartItem(cartitem-1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled4(!isButtonDisabled4)
         }} >Remove from cart</a></div>
        </div>
        </div>
        </div>}
    </div>
    </div>
    <div className="col mb-5">
    <div className="card h-100">
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
    <div className="card-body p-4">
      <div className="text-center">
        <h5 className="fw-bolder">Popular Item</h5>
        <div className="d-flex justify-content-center small text-warning mb-2">
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
          <div className="bi-star-fill"></div>
        </div>
        $40.00
      </div>
    </div>
    {isButtonDisabled5?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={()=>setCartItem(cartitem+1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled5(!isButtonDisabled5)
         }} >Add to cart</a>
        </div>
        </div>:<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" disabled onClick={(e)=>e.preventDefault()}>Item Added</a>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent mt-3" onClick={()=>setCartItem(cartitem-1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled5(!isButtonDisabled5)
         }} >Remove from cart</a></div>
        </div>
        </div>
        </div>}
    </div>
    </div>
    <div class="col mb-5">
    <div class="card h-100">
      <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      <div class="card-body p-4">
      <div class="text-center">
        <h5 class="fw-bolder">Popular Item</h5>
        <div class="d-flex justify-content-center small text-warning mb-2">
        <div class="bi-star-fill"></div>
        <div class="bi-star-fill"></div>
        <div class="bi-star-fill"></div>
        <div class="bi-star-fill"></div>
        <div class="bi-star-fill"></div>
      </div>$40.00</div>
      </div>
      {isButtonDisabled6?<div className="card-footer p-4 pt-0 border-top-0 bg-transparent" onClick={()=>setCartItem(cartitem+1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled6(!isButtonDisabled6)
         }} >Add to cart</a>
        </div>
        </div>:<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" disabled onClick={(e)=>e.preventDefault()}>Item Added</a>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent mt-3" onClick={()=>setCartItem(cartitem-1)}>
          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>{
        e.preventDefault();
        setIsButtonDisabled6(!isButtonDisabled6)
         }} >Remove from cart</a></div>
        </div>
        </div>
        </div>}
      </div>
      </div>
    </div>
    </div>
   
    </section>
    <footer className="py-5 bg-dark">
      <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
    </footer>
    </div>

  </>
    
 
}

export default Scripts

