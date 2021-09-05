import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

export default function App() {
    let titulo= 'Bienvenidos a Aura' 
    let subtitulo='su comida lista para llevar'
    return  (
        <>
            <NavBar />
            <h1>Menú Inicial</h1>
            <ItemListContainer titulo={titulo} subtitulo={subtitulo}/>
        </>
    )
}
