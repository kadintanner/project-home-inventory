import './itemTable.css'

const CategoryCell = ({ isEditing, value, onValueChange }) => {

    return isEditing ? (
        <td>
            <select
                className="category-dropdown"
                id="category-dropdown"
                value={value}
                onChange={(e) => onValueChange(e.target.value)} >
                <option value="category 1">Category 1</option>
                <option value="category 2">Category 2</option>
                <option value="category 3">Category 3</option>
                <option value="category 4">Category 4</option>
            </select>
        </td>
    ) : (
        <td>{value}</td>
    )
}

export default CategoryCell; 