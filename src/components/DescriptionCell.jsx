import './itemTable.css'

const DescriptionCell = ({ isEditing, value, onValueChange }) => {

    return isEditing ? (
      <td>
        <textarea
          type="text"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
        />
      </td>
    ) : (
      <td>{value}</td>
    )
  }
  
  export default DescriptionCell;
  