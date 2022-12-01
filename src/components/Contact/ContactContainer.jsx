import React from 'react'

function ContactContainer() {
  return (
    <div>
        <h2 className='text-center my-5'>CONTACTENOS</h2>
        <div className='container mt-1 mb-5'>
            <form className='row g-3'>
            <div className="col-md-6">
                    <label for="firstName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="firstName" required/>
                </div>
                <div className="col-md-6">
                    <label for="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" required/>
                </div>
                <div className="col-md-8">
                    <label for="emailInfo" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="emailInfo" required/>

                </div>
                <div className="col-md-4">
                    <label for="phoneNumber" className="form-label">Numero de Telefono</label>
                    <input type="text" className="form-control" id="phoneNumber" placeholder="+54 011 1130309929"/>
                </div>
                <div className="col-md-12">
                    <label for="comments" className="form-label">Deje su Consulta</label>
                    <textarea className="form-control" id="comments" rows="5" required></textarea>
                </div>
                <div className="col-md-12">
                    <button type="submit" className="boton btn btn-dark">Enviar</button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactContainer