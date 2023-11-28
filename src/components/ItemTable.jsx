import axios from 'axios'
import { useEffect, useState } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import AddButton from './AddButton'
import CategoryTabs from './CategoryTabs'
import Navbar from './Navbar'
import Table from 'react-bootstrap/Table';
import '../App.css'
import './itemTable.css'
// import AddCategoryButton from './bootstrap-tabs/AddCategoryButton'

const ItemTable = () => {
  const [currentItemData, setCurrentItemData] = useState([])

  const getData = async () => {
    await axios.get('/items')
      .then((response) => {
        setCurrentItemData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }

  useEffect(() => {
    getData()
  }, [])

  const rows = currentItemData.map((tableItem) => {
    const { id, name, description, cost, date, location, isEditing } = tableItem
    return (
      <TableRow
        key={id}
        id={id}
        initialItemData={{ name, description, cost, date, location }}
        initialIsEditing={isEditing}
        deleteFunc={() => deleteRow(id)}
      />
    )
  })

  const addRow = async () => {
    const response = await axios.post('/addItem', { description: '' })
    setCurrentItemData([...currentItemData, response.data])
  }

  const deleteRow = async (itemId) => {
    const response = await axios.delete(`/deleteItem/${itemId}`)
    if (!response.data.error) {
      const filteredList = currentItemData.filter((tableItem) => tableItem.id !== itemId)
      setCurrentItemData(filteredList)
    }
  }

  return (
    <>
      <div className="topnav">
        <a class="active" href="#home">HOME INVENTORY</a>
      </div>


      <div className='item-table'>
        <br />
        <br />
        <br />
        <CategoryTabs />
        <br />
        <br />
        <Table
          id="item-table"
          striped bordered hover size="sm">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
        <AddButton className="add-button" addClick={addRow} />
        {/* <AddCategoryButton /> */}
      </div>
    </>
  );
}

export default ItemTable;