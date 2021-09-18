import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/containers/ItemListContainer'
import Cart from './components/Cart/Cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetai';

export default function App() {
/*     let greeting= 'Bienvenidos a Aura' 
 *//*     let subtitulo='su comida lista para llevar' */
    return  (
        <>
            <NavBar />
            <h1>Menú Inicial</h1>
            {/* <ItemListContainer greeting={greeting}/> */}
            <Router>
                <Switch>
                    <Route path= '/' exact component={ItemListContainer}/>
                    <Route path= '/categpry/:idCategory' exact component={ItemListContainer}/>
                    <Route path= '/detalle/:idProducto' exact component={ItemDetailContainer}/>

                    <Route exact path='/cart'>
                        <Cart />
                    </Route>

                    <Route exact path='/descripcion'>
                        <ItemDetail />
                    </Route>

                </Switch> 
            </Router> 
            
        </>
    )
}
