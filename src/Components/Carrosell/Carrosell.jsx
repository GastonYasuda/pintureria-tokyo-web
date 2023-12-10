import Carousel from 'react-bootstrap/Carousel';


function Carrosell() {
    return (
        <div className='carouselContainer'>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img src="assets/carrosel/pared-interior1.png" alt="" text="First slide" />
                    <Carousel.Caption>
                        <h3>Pinta de Violeta</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src="assets/carrosel/pared-interior2.png" alt="" text="Second slide" />
                    <Carousel.Caption>
                        <h3>Pinta de Gris</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carrosell;