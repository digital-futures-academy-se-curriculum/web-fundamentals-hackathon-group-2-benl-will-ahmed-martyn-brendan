import { Container, Row, Col, Card} from 'react-bootstrap';
import ControlledCarousel from './ControlledCarousel';
import cinema from "../images/cinema-sunderland.jpg";

const WhatsonpageGrid = () => {
    return (
        <Container fluid className='whatson'>
        <Row style={{ marginTop: '20px' }}>
            <Col md={9}><ControlledCarousel/></Col>
            <Col md={3} className='whats-on-text'>NOW SHOWING!<br/>The Iron Claw <br/> Piranhaconda <br/> No Time To Die <br/> Bagel Man <br/> Troll 2</Col>
        </Row>
        <Row style={{ marginTop: '20px'}}>
            <Col md={3} className="middle-text">Come Find Us At Our Sunderland Headquarters:</Col>
            <Col md={9}><img src={cinema} className='film-image'/></Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
            <Col md={3}><img src="https://lumiere-a.akamaihd.net/v1/images/image_da9047cc.jpeg?region=0%2C45%2C1280%2C720" className='whats-on-image'/></Col>
            <Col md={3}>
            <Card>
              <Card.Header>Featured</Card.Header>
                <Card.Body>
                <Card.Title>Movie Title</Card.Title>
                </Card.Body>
        </Card>
            </Col>
            <Col md={3}>
        <Card>
              <Card.Header>Featured</Card.Header>
                <Card.Body>
                <Card.Title>Movie Synopsis</Card.Title>
                </Card.Body>
        </Card>
    </Col>
    <Col md={3}>
       <Card>
          <Card.Header>Screens and showing times</Card.Header>
            <Card.Body>
            <Card.Title>
            Standard <br />
            3DX <br />
            4DX <br />
            Super Imax
            </Card.Title>
           </Card.Body>
        </Card>
    </Col>
       </Row>  
          </Container>
    )
}

export default WhatsonpageGrid;