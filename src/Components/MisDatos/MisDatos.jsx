import React from 'react'

const MisDatos = () => {
    return (
        <section className='misDatos d-flex-row'>
            <div className="misDatos__datos d-f-col-center">
                <div className='misDatos__datos-animate'>
                    <img src="./assets/corazon.svg" alt="" />
                    <h2>ANIMATE</h2>
                    <p>Subí tu foto y proba los colores y estilos que más te gustan para renovar las habitaciones de tu casa.</p>
                    <button>Simulador de Colores</button>
                </div>
                <div className='misDatos__datos-contacto'>
                    <img src="./assets/telefono.svg" alt="" />
                    <h2>CONTACTATE</h2>
                    <h4>4622-2824 / 4462-6965</h4>
                    <p>Llevamos 40 años brindando la mejor atención y asesoramiento para que la compra de tus productos se adapte específicamente a lo que necesitas.</p>
                    <button>Contactanos por Whatsapp</button>
                </div>
            </div>
            <div className="misDatos__mapa">
                <div className="misDatos__mapa-contenedor">
                    <div className="misDatos__mapa-contenedor-txt">
                        <img src="./assets/ubicacion.svg" alt="" />
                        <h2>ACERCATE</h2>
                        <p>En nuestros locales de Tapiales, Villa Celina y Ciudad Madero vas a encontrar todo lo que necesitas para tus proyectos.</p>
                    </div>
                    <div className="misDatos__mapa-contenedor-mapa">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6567.606131729318!2d-58.449060205729396!3d-34.609141041809146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scid%20campeador!5e0!3m2!1ses-419!2sar!4v1702338149753!5m2!1ses-419!2sar" referrerpolicy="no-referrer-when-downgrade" style={{ loading: "lazy" }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MisDatos