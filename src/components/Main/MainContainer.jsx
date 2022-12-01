import React from 'react'
import { Link } from 'react-router-dom'; 
import './main.css';

const MainContainer = () => {
  return (
    <div>
        <section id="home">
            <div class="container">
                <h5>NUEVAS OFERTAS</h5>
                <h1><span>Mejores Precios</span> Del Año</h1>
                <p>Comodidad absoluta a la hora de vestir <br/> y tambien a la hora de ejercitar</p>
                <button>COMPRAR</button>
            </div>
        </section>

        <section id="brand" class="container">
            <div class="row m-0 py-5">
                <img class="img-fluid col-lg-2 col-md-4 col-6" src="/img/brand1.png" alt="brand"/>
                <img class="img-fluid col-lg-2 col-md-4 col-6" src="/img/brand2.png" alt="brand"/>
                <img class="img-fluid col-lg-2 col-md-4 col-6" src="/img/brand3.png" alt="brand"/>
                <img class="img-fluid col-lg-2 col-md-4 col-6" src="/img/brand4.png" alt="brand"/>
                <img class="img-fluid col-lg-2 col-md-4 col-6" src="/img/brand5.png" alt="brand"/>
                <img class="img-fluid col-lg-2 col-md-4 col-6" src="/img/brand6.png" alt="brand"/>
            </div>
        </section>

        <section id="banner" className="my-5 py-5">
            <div className="container">
                <h4>VENTA DE MITAD DE TEMPORADA</h4>
                <h1>Coleccion Invierno <br/> CON 20% OFF</h1>
                <Link to="/"><button className="text-uppercase">COMPRAR AHORA</button></Link>
            </div>
        </section>

        <section id="watches" className="my-5">
            <div className="container text-center mt-5 py-5">
                <h3>Mejores Relojes</h3>
                <hr className="mx-auto"/>
                <p>Mira los mejores relojes con los mejores precios</p>
            </div>
            <div className="row mx-auto container-fluid">
                <div className="product text-center col-lg-3 col-md-4 col-12">
                    <img className="img-fluid mb-3" src="img/6.png" alt=""/>
                    <h5 className="p-name">Reloj Casual Negro</h5>
                    <h4 className="p-price">$92.00</h4>
                    <Link to="/"><button class="buy-btn">COMPRAR AHORA</button></Link>
                </div>
                <div className="product text-center col-lg-3 col-md-4 col-12">
                    <img className="img-fluid mb-3" src="img/2.jpg" alt=""/>
                    <h5 className="p-name">Relojr Formal Negro</h5>
                    <h4 className="p-price">$92.00</h4>
                    <Link to="/"><button className="buy-btn">COMPRAR AHORA</button></Link>
                </div>
                <div className="product text-center col-lg-3 col-md-4 col-12">
                    <img className="img-fluid mb-3" src="img/3.jpg" alt=""/>
                    <h5 className="p-name">Reloj Formal de Malla</h5>
                    <h4 className="p-price">$92.00</h4>
                    <Link to="/"><button className="buy-btn">COMPRAR AHORA</button></Link>
                </div>
                <div className="product text-center col-lg-3 col-md-4 col-12">
                    <img className="img-fluid mb-3" src="img/1.jpg" alt=""/>
                    <h5 className="p-name">Reloj Deportivo</h5>
                    <h4 className="p-price">$92.00</h4>
                    <Link to="/"><button className="buy-btn">COMPRAR AHORA</button></Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MainContainer