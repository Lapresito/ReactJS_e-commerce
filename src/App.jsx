import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting='Welcome to the Unniversse shop!'/>
    </>
  )
}

export default App
