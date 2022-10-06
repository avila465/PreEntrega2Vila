//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
          <Route path='/item/:productID' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
