import './itemTable.css'

const AddButton = ({ addClick }) => {
  return (
    <tr>
      <td></td>
      <td colSpan={4} >
        <button id="THE-BUTTON" onClick={addClick}>Add Item</button>
      </td>
    </tr>
  );
}

export default AddButton