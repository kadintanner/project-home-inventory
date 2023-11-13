import './App.css'
import Login from './components/Login'
import ItemTable from './components/ItemTable'
import Registration from './components/Registration'

function App({ initialData }) {

  return (
    <>
      <ItemTable initialItemData={initialData}/>
    </>
  )
}

export default App
