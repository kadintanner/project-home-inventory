import './App.css'
import Login from './components/Login'
import ItemTable from './components/ItemTable'
import Registration from './components/Registration'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/itemTable' element={<ItemTable />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App