const AddButton = ({ addClick }) => {
  return (
    <tr>
      <td></td>
      <td colSpan={4} >
        <button onClick={addClick}>Add Item</button>
      </td>
    </tr>
  );
}
export default AddButton