import React from 'react'

const MisDatos = () => {
    return (
        <section className='misDatos d-f-col-center'>
            <div className="misDatos__datos">
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
                <div className="misDatos__mapa-txt">
                    <img src="./assets/ubicacion.svg" alt="" />
                    <h2>ACERCATE</h2>
                    <p>En nuestros locales de Tapiales, Villa Celina y Ciudad Madero vas a encontrar todo lo que necesitas para tus proyectos.</p>
                </div>
                <div className="misDatos__mapa-mapa">
                    MAPA
                </div>
            </div>
        </section>
    )
}

export default MisDatos