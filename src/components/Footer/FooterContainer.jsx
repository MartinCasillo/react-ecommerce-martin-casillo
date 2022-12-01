import React from 'react'
import './footer.css'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp } from 'react-icons/ai';

const FooterContainer = () => {
  return (
    <footer className="mt-5 py-5">
        <div className='row container mx-auto pt-5'>
            <div className='footer-one col-lg-3 col-md-6 col-12'>
                <img src="/img/logo.png" width="100%" alt="logo"></img>
                <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ea.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nam.
                </p>
            </div>
            <div className='footer-one col-lg-3 col-md-6 col-12 mb-3'>
                <h5 className="pb-2">Features</h5>
                <ul className="text-uppercase list-unstyled">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/category/Male">Hombres</a></li>
                    <li><a href="/category/Women">Mujeres</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>          
            </div>
            <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                <h5 className="pb-2">Contactenos</h5>
                <div>
                    <h6 className="text-uppercase">Direccion</h6>
                    <p>123 CALLE , PROVINCIA , PAIS</p>
                </div>       
                <div>
                    <h6 className="text-uppercase">Telefono</h6>
                    <p>(123)456-7890</p>
                </div>              
                <div>
                    <h6 className="text-uppercase">Email</h6>
                    <p>ejemplo@hotmail.com</p>
                </div> 
            </div>
            <div className='footer-one col-lg-3 col-md-6 col-12'>
                <h5 className='pb-2'>Instagram</h5>
                <div className="row">
                    <img className="img-fluid w-25 h-100 m-2" src="img/ig1.jpg" alt="foto1"/>
                    <img className="img-fluid w-25 h-100 m-2" src="img/ig2.jpg" alt="foto2"/>
                    <img className="img-fluid w-25 h-100 m-2" src="img/ig3.jpg" alt="foto3"/>
                    <img className="img-fluid w-25 h-100 m-2" src="img/ig4.jpg" alt="foto4"/>
                    <img className="img-fluid w-25 h-100 m-2" src="img/ig5.jpg" alt="foto5"/>
                </div>
            </div>
        </div>
        <div className='copyright mt-5'>
        <div className="row container mx-auto">
                <div className="col-lg-3 col-md-6 col-12 mb-4">
                    <img src="img/payment.png" alt="modo de pago"/>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-nowrap mb-2">
                    <p>Proyecto eCommer @ 2022. All Rights Reserved</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                   <a href="/"><AiOutlineInstagram></AiOutlineInstagram></a>
                   <a href="/"><AiOutlineFacebook></AiOutlineFacebook></a>
                   <a href="/"><AiOutlineWhatsApp></AiOutlineWhatsApp></a>
                </div>
            </div>
        </div>
    </footer>
  )
}


export default FooterContainer