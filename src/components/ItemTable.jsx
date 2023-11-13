import axios from 'axios'
import { useState } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import AddButton from './AddButton'

const ItemTable = ({ initialItemData }) => {
  const [currentData, setCurrentData] = useState(initialItemData)
  const rows = currentData.map((tableItem) => {
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
    const response = await axios.post('/addItem', { description: 'New Item' })
    setCurrentData([...currentData, response.data])
  }

  const deleteRow = async (itemId) => {
    const response = await axios.delete(`/deleteItem/${itemId}`)
    if (!response.data.error) {
      const filteredList = currentData.filter((tableItem) => tableItem.id !== itemId)
      setCurrentData(filteredList)
    }
  }

  return (
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>

        <tbody>
          {rows}
        </tbody>

        <tfoot>
          <AddButton addClick={addRow} />
        </tfoot>
      </table>
    </div>
  );
}

export default ItemTable;