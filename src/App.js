import {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/containers/ItemListContainer'
import {BrowserRouter as Router, Switch, Route, BrowserRouter, Link} from 'react-router-dom'
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContext } from './Context/cartContext';

//export const  ContextApp = createContext('context')//se crea una sola vez


export default function App() {
    const [state, setState] = useState('product')

    function showProduct(){
        alert(state)
    }
    
/*     let greeting= 'Bienvenidos a Aura' 
 *//*     let subtitulo='su comida lista para llevar' */
    return  (
            <div className='App'>
                 
                <CartContext>
                    <ContextApp.Provider value={{state, showProduct}} >                
                        
                        <BrowserRouter>
                        <Link to="/">Home</Link>
                            <Switch>
                                <Route exact path="/" component={ItemListContainer}></Route>
                                <Route path="/:id" component={ItemDetailContainer}></Route>
                                <Route exact path='/cart'>
                                    <Cart/>
                                </Route>
                            </Switch>   
                        </BrowserRouter>

                    </ContextApp.Provider>
                </CartContext>|    
            </div>
    );
}
