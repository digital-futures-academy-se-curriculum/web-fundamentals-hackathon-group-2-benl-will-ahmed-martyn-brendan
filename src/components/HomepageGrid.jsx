import { Container, Row, Col } from 'react-bootstrap';

const HomepageGrid = () => {
    return (
        <Container>
        <Row>
            <Col md={9}><img src="https://m.media-amazon.com/images/M/MV5BMTAzOTc4Mjk3NTVeQTJeQWpwZ15BbWU4MDg3NTM1NDQz._V1_.jpg" className='film-image'/></Col>
            <Col md={3} className="middle-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam minus cumque voluptatum quam. Fuga accusamus nostrum laboriosam ipsa dicta. Reprehenderit provident corrupti obcaecati. Reprehenderit? </Col>
        </Row>
        <Row>
            <Col md={3} className="middle-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam voluptatem voluptates debitis, officia nesciunt, laborum, esse dolores illo illum nulla rem nisi tenetur ducimus!</Col>
            <Col md={9}><img src="https://i.pinimg.com/originals/0a/82/13/0a8213395dd185f6fabfeca1578a8a6d.jpg" className='film-image'/></Col>
        </Row>
        <Row>
            <Col md={9}><img src="https://lumiere-a.akamaihd.net/v1/images/image_da9047cc.jpeg?region=0%2C45%2C1280%2C720" className='film-image'/></Col>
            <Col md={3} className="middle-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam asperiores necessitatibus a mollitia iusto ab, officiis eius obcaecati laborum molestiae nam commodi qui consectetur ex.</Col>
        </Row>
    </Container> 
    )
}

export default HomepageGrid;
