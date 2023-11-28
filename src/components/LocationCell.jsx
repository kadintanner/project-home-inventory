import './itemTable.css'

const LocationCell = ({ isEditing, value, onValueChange }) => {

    return isEditing ? (
      <td>
        <textarea
          id="location-cell"
          type="text"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
        />
      </td>
    ) : (
      <td>{value}</td>
    )
  }
  
  export default LocationCell;  