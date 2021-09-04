import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export const NabVar=()=>{
    return(
        <>  
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Aura</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Comidas</Nav.Link>
                        <Nav.Link href="#link">Precios</Nav.Link>
                        <Nav.Link href="#link">Pedidos</Nav.Link>              
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>s
                
        </>
    )
} 