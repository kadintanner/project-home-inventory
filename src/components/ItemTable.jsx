import axios from 'axios'
import { useEffect, useState } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import AddButton from './AddButton'
import CategoryTabs from './CategoryTabs'
import Navbar from './Navbar'
import Table from 'react-bootstrap/Table';
// import '../App.css'
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


  document.addEventListener('DOMContentLoaded', function () {
  // Super complicated math from StackOverFlow that i don't understand! (It made the navbar pretty though)

  const itemNavbar = document.getElementById("topnav");
  let lastScrollTop = 0;
  addEventListener("scroll", () => {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const distance = scrollTop - lastScrollTop;
    const currentTop = parseInt(
      getComputedStyle(itemNavbar).top.split("px")
    );
    let amount = Math.max(
      Math.min(
        currentTop +
        (distance < 0
          ? Math.abs(distance)
          : -Math.abs(distance)
        ) * 40, 0), -80
    );
    console.log(amount, currentTop, Math.abs(distance));
    itemNavbar.style.top = `${amount}px`;
    lastScrollTop = scrollTop;
  });
  })  

  return (
    <body className='item-table-body'>

      <div id="topnav">
        <a className="active" href="/">Home Inventory</a>
      </div>

      <div class="container">
        <h1 id="items-h1">All Items</h1>
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
      </div>
      <div className='add-button'>
        <AddButton addClick={addRow} />
        {/* <AddCategoryButton /> */}
      </div>
    </body>
  );
}

export default ItemTable;