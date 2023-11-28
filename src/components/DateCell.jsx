import './itemTable.css'

const DateCell = ({ isEditing, value, onValueChange }) => {

  return isEditing ? (
    <td>
      <form action="/action_page.php">
        <input
          className='date-cell'
          type="date"
          id="the-date"
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