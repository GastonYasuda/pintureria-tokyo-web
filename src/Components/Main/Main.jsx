import React from 'react'
import Heading from '../Heading/Heading'
import Carrosell from '../Carrosell/Carrosell'
import Distribuidor from '../Distribuidor/Distribuidor'
import Funciones from '../Funciones/Funciones'
import Footer from '../Footer/Footer'
import Marcas from '../Marcas/Marcas'
import MisDatos from '../MisDatos/MisDatos'

const Main = () => {
    return (
        <>
            <Heading />
            <Carrosell />
            <Distribuidor />
            <Footer />
            <Funciones />
            <Marcas />
            <MisDatos />
        </>
    )
}

export default Main