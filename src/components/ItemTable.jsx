import axios from 'axios'
import { useState } from 'react'
import { async } from 'seed/lib/seed'

const ItemTable = ({ initialItemData }) => {
  const [currentData, setCurrentData] = useState(initialItemData)
  const rows = currentData.map((item) => {
    const { id, name, description, cost, date, location, isEditing } = item
    return (
      <TableRow
        key={id}
        id={id}
        initialInvoiceData={{ name, description, cost, date, location }}
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
    const response = await axios.delete(`/deleteInvoice/${itemId}`)
    if (!response.data.error) {
      const filteredList = currentData.filter((item) => item.id !== itemId)
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