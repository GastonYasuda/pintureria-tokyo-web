import React from 'react'
import Heading from '../Heading/Heading'
import Carrosell from '../Carrosell/Carrosell'
import Distribuidor from '../Distribuidor/Distribuidor'
import Funciones from '../Funciones/Funciones'
import Footer from '../Footer/Footer'
import MisDatos from '../MisDatos/MisDatos'
import Marcas from '../Marcas/Marcas'

const Main = () => {
    return (
        <>
            <Heading />
            <Carrosell />
            <Funciones />
            <Distribuidor />
            <MisDatos />
            <Marcas />
            <Footer />
        </>
    )
}

export default Main