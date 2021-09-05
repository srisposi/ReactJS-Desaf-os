import peonza from '../../assets/img/vegan.jpg'
import Navbar from 'react-bootstrap/Navbar'

export default function CartWidget () {
return (
    <Navbar.Brand href="#home">
        <img
            src={peonza}
            width="20%"
            height="20%"
            className="d-inline-block align-top pl-1"
            alt="peonza"
        />
    </Navbar.Brand>                    
)

}