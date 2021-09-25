import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/containers/ItemListContainer'
import Cart from './components/Cart/Cart';
import {BrowserRouter as Router, Switch, Route, BrowserRouter, Link} from 'react-router-dom'
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import {CartContextProvider}  from './Context/CartContext';

export default function App() {
/*     let greeting= 'Bienvenidos a Aura' 
 *//*     let subtitulo='su comida lista para llevar' */
    return  (
            <div className='App'>
                <CartContextProvider>
                    <BrowserRouter>
                    <Link to="/">Home</Link>
                        <Switch>
                            <Route exact path="/" component={ItemListContainer}></Route>
                            <Route path="/:id" component={ItemDetailContainer}></Route>
                        </Switch>   
                    </BrowserRouter>
                </CartContextProvider>
            </div>
    )
}
