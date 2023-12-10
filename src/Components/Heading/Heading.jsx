import React from 'react'


const Heading = () => {
    return (
        <section className='d-flex-row heading'>
            <div className='logo'>
                <img src="assets/logo.png" alt="" />
            </div>

            <div>
                <ul className='d-flex-row menuList'>
                    <li>Distribudor</li>
                    <li>Marca</li>
                    <li>Asesoramiento</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </section>
    )
}

export default Heading