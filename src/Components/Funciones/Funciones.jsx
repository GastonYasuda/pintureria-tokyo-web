import React from 'react'

const Funciones = () => {
    return (
        <div className='funciones'>
            <section className='funciones__box d-f-center'>
                <img src="./assets/estrella.png" alt="" />
                <div className='funciones__box--txt'>
                    <h4>ASESORAMIENTO</h4>
                    <p>Atención personalizada con cada uno de nuestros clientes.</p>
                </div>
            </section>
            <section className='funciones__box d-f-center'>
                <img src="./assets/check.png" alt="" />
                <div className='funciones__box--txt'>
                    <h4>GARANTÍA Y RESPALDO</h4>
                    <p>Somos distribuidores certificados de Sherwin Williams.</p>
                </div>
            </section>
            <section className='funciones__box d-f-center'>
                <img src="./assets/envio.png" alt="" />
                <div className='funciones__box--txt'>
                    <h4>ENVÍO SIN CARGO</h4>
                    <p>A Capital y Gran Buenos Aires.</p>
                </div>
            </section>
        </div>
    )
}

export default Funciones