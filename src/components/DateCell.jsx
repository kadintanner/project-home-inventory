import './itemTable.css'

const DateCell = ({ isEditing, value, onValueChange }) => {

  return isEditing ? (
    <td>
      <form action="/action_page.php">
        <input

          type="date"
          id="date"
          name="date"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
        >
        </input>

      </form>
    </td>
  ) : (
    <td>{value}</td>
  )
}

export default DateCell;