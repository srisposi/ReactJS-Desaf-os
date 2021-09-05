import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

export default function App() {
    let greeting= 'Bienvenidos a Aura' 
    let subtitulo='su comida lista para llevar'
    return  (
        <>
            <NavBar />
            <h1>Menú Inicial</h1>
            <ItemListContainer greeting={greeting} subtitulo={subtitulo}/>
        </>
    )
}
