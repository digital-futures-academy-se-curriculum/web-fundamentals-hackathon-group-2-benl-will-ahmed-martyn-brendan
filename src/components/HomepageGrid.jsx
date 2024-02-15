import { Container, Row, Col } from 'react-bootstrap';

const HomepageGrid = () => {
    return (
        <Container>
        <Row>
            <Col md={3}>Test</Col>
            <Col md={9}>Test</Col>
        </Row>
        <Row>
            <Col md={9}>Test</Col>
            <Col md={3}>Test</Col>
        </Row>
        <Row>
            <Col md={3}>Test</Col>
            <Col md={9}>Test</Col>
        </Row>
    </Container> 
    )
}

export default HomepageGrid;
