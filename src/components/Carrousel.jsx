import { useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { Img } from '@chakra-ui/react';

const CarrouselSection = () =>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return(
    <Carousel>
        <Carousel.Item interval={2000} draggable>
          <Img
            src="https://http2.mlstatic.com/D_NQ_926114-MLA49590703288_042022-OO.webp"
            alt="Lo mejor en herramientas, has un 40% de descuento"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Img
            src="https://http2.mlstatic.com/D_NQ_619381-MLA49609927853_042022-OO.webp"
            alt="Subscribite al nivel 6 y disfruta con los Simpsons"
          />
        </Carousel.Item>
    </Carousel>
    )
}

export default CarrouselSection